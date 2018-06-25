var fs = require('fs');
var path = require('path');

// Avoid file and folder when checking broken links
var excludeFromLinkChecker = [
                                "docs", "ISSUE_TEMPLATE.md", "CONTRIBUTING.md",
                                "INDUSTRY_PAGE_TEMPLATE.md", "PRODUCT_PAGE_TEMPLATE.md",
                                "node_modules"
                             ];

// Avoid this files to create/update their TOCs
var excludeFileFromDocToc = [
                            "ISSUE_TEMPLATE.md", "INDUSTRY_PAGE_TEMPLATE.md",
                            "PRODUCT_PAGE_TEMPLATE.md", "SUMMARY.md",
                            "CONTRIBUTING.md", "about/README.md"
                        ];
var excludeFoldersFromDocToc = [
                            "./about", "./node_modules"
                        ];

var walk = function(dir, done) {
        var results = [];
        fs.readdir(dir, function(err, list) {
            if (err) return done(err);
            var pending = list.length;
            if (!pending) return done(null, results);
            list.forEach(function(file) {
                file = path.resolve(dir, file);
                basename = path.basename(file);
                //console.log("basename=",basename);
                if(excludeFromLinkChecker.indexOf(basename) !== -1){
                    //console.log("excluding ", basename);
                    if (!--pending) done(null, results);
                }else{

                    fs.stat(file, function(err, stat) {
                        if (stat && stat.isDirectory()) {
                            walk(file, function(err, res) {
                                results = results.concat(res);
                                if (!--pending) done(null, results);
                            });
                        } else {
                            var ext = path.extname(file)
                            if(ext === ".md"){
                                //console.log("including ", file);
                                results.push(file);
                            }
                            if (!--pending) done(null, results);
                        }
                    });
                }
            });
        });

};

var build_book = function(build){
    if(build){
        var cmd = 'node node_modules/gitbook-cli/bin/gitbook.js build';

        exec(cmd, function(error, stdout, stderr) {
            console.log("Building book: ",stdout);

            var cmd = 'mv _book docs';
            exec(cmd, function(error, stdout, stderr) {
                console.log("Renaming folder ./books to ./docs ",stdout);
            });
        });
    }
}

var links = false,
rm_docs = true,
update_summary = true,
build = true;

process.argv.forEach(function (val, index, array) {
    //console.log(index + ': ' + val);
    switch(val){
        case '--links':
        links = true;
        break;
        case '--summary':
        update_summary = true;
        break;
    }
});


var commandExists = require('command-exists');

[{
    app: 'awesome_bot',
    url: 'https://github.com/dkhamsing/awesome_bot'
}].forEach(function(elem){
    commandExists(elem.app, function(err, commandExists) {
        if(!commandExists) {
            console.log(elem.app + ' is not installed: '+ elem.url);
            process.exit();
        }
    });
    ;})

    var exec = require('child_process').exec;

    if(links){
        walk(".", function(err, results) {
            if (err) throw err;

            var len = results.length,
            i = 0;

            while(i < len){
                var cmd = 'awesome_bot --allow-dupe ' + results[i];
                exec(cmd, function(error, stdout, stderr) {
                    // command output is in stdout
                    var index = stdout.indexOf("Issues :-(")
                    var output = [];
                    console.log(stdout.substring(0,stdout.indexOf("\n")));
                    if(index !== -1){
                        var tmp = stdout.split("\n");
                        output.push(tmp[0]);
                        stdout = stdout.substring(index);
                        stdout = stdout.split("\n");
                        stdout = stdout.slice(2,stdout.length-5);
                        output = output.concat(stdout);
                        console.log("\n\n"+output.join("\n"));
                    }
                });

                i++;
            }

        });

        // // TODO: Add asyncronous call
        // var cmd = 'rm -rf awesomebot-results/* && mv ab-re* awesomebot-results';
        // exec(cmd, function(error, stdout, stderr) {
        //     console.log('Moving results from awesomebot to awesomebot-results');
        // });

    }else{
        if(rm_docs){
            var cmd = 'rm -rf docs && rm ab-results*';
            exec(cmd, function(error, stdout, stderr) {
                console.log("Removing last deploy",stdout);
            });
        }

        var cmd = "node node_modules/gitbook-cli/bin/gitbook.js install";
        exec(cmd, function(error, stdout, stderr) {
            console.log("Installing/updating pluggins: ",stdout);
        });

        cmd = "rm SUMMARY.md'";
        exec(cmd, function(error, stdout, stderr) {
            console.log("Removing old summary ",stdout);

            excludeFileFromDocToc = excludeFileFromDocToc.join(" ! -name ");
            excludeFoldersFromDocToc = excludeFoldersFromDocToc.join(" -prune -o -path ");

            cmd = `find . -path ${excludeFoldersFromDocToc} -prune -o -name "*.md" ! -name ${excludeFileFromDocToc} -print | xargs node ./node_modules/doctoc/doctoc.js --title '**Table of contents**'`;
            exec(cmd, function(error, stdout, stderr) {
                console.log("Updating tables of contents: ",stdout);

                if(update_summary){
                    var cmd = 'node node_modules/gitbook-summary/bin/summary.js sm';
                    exec(cmd, function(error, stdout, stderr) {
                        console.log("Updating summary: ", stdout);
                        build_book(build);
                    });
                }else{
                    build_book(build);
                }

            });
        });
    }
