var fs = require('fs');
var path = require('path');
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
      if(basename === "docs"){
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
              results.push(file);
            }
            if (!--pending) done(null, results);
          }
        });
      }
    });
  });
};

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
}

var cmd = "rm SUMMARY.md && doctoc --title '**Table of contents**' .";
exec(cmd, function(error, stdout, stderr) {
  console.log(stdout);
});

if(rm_docs){
  var cmd = 'rm -rf docs && rm ab-results*';
  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
  });
}

if(update_summary){
  var cmd = 'book sm';
  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
  });
}

if(build){
  var cmd = 'gitbook build';

  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);

    var cmd = 'mv _book docs';
    exec(cmd, function(error, stdout, stderr) {
      console.log(stdout);
    });
  });
}
