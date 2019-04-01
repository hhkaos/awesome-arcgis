require('isomorphic-form-data')
require('isomorphic-fetch')
import { searchItems, updateItem } from '@esri/arcgis-rest-items';
import { UserSession } from '@esri/arcgis-rest-auth';
import { parse } from 'node-html-parser';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


var fs = require('fs');
var settings = require('./settings.json')

var session = new UserSession({
  username: settings.username,
  password: settings.password
})

// updateItem({
//   item: {
//     id: "bb04b466539446cb9715943406c4c707",
//     description: "<h1>H1 Header</h1><p>Paragraph</p>",
//     clearEmptyFields: true
//   },
//   authentication: session
// }).then(response=>{
//   console.log("response=",response)
// });

searchItems({
        'searchForm':{
            q: 'group:663480a878724c42aef09a523a8d5139',
            num: 100
        }
    }).then(response => {
    console.log("response.results.length=",response.results.length);
    response.results.forEach((elem, i) =>{
        if(elem.id=='bb04b466539446cb9715943406c4c707'){
            parseHTML(elem.url).then(function(obj) {
                var urlSplitted = elem.url.split('/'),
                    slug = urlSplitted[urlSplitted.length-2];

                const thumbnail = `./arcgis/products/product-thumbnails/${slug}.png`,
                      thumbnailPath = 'https://esri-es.github.io/awesome-arcgis/arcgis/products/product-thumbnails',
                      defaultThumb = 'https://www.arcgis.com/sharing/rest/content/items/c45fae339fae49c49136e507b82ccc22/info/thumbnail/thumbnail1533885818200.png';

                var itemProp = {
                    id: elem.id,
                    description: obj.html,
                    licenseInfo: `<div style="text-align: left;">Content is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Attribution 4.0 International (CC BY 4.0)</a></div><div style="text-align: left;">Source code under <a href="https://github.com/esri-es/awesome-arcgis/blob/master/LICENSE" target="_blank">GNU GENERAL PUBLIC LICENSE</a><br /></div>`,
                    accessInformation: 'https://github.com/esri-es/awesome-arcgis/graphs/contributors',
                    snippet: obj.summary,
                    thumbnail: defaultThumb,
                    thumbnailurl: defaultThumb
                }

                try{
                    if(fs.existsSync(thumbnail)){
                        itemProp.thumbnailurl = `${thumbnailPath}/${slug}.png`;
                        itemProp.thumbnail = `${thumbnailPath}/${slug}.png`;
                        console.log("thumbnail exist, path=",itemProp.thumbnailurl)
                    }
                }catch(err){
                    console.log("No thumbnail for ",slug)
                }

                updateItem({
                    item: itemProp,
                    authentication: session
                }).then(response=>{
                    console.log("response=",response)
                });
            });
        }

    })
});


function parseHTML(url){
    var path = url.split("/").slice(4).join("/");
    var promise = new Promise(function(resolve, reject) {
        fs.readFile(`docs/${path}index.html`, 'utf8', function(err, html) {

            try{
                var site = url,
                    root = parse(html),
                    content = root.querySelector('.search-noresults').toString(),
                    content = urlify(content, site),
                    content = headify(content);

                // Forr some reason I couldn't make parse work to get the summary
                const dom = new JSDOM(content);
                var summary = dom.window.document.querySelector('.search-noresults p:nth-child(3)').textContent;

                resolve({html:content, summary: summary});
            }catch(e){
                console.log("Error: ",e);
                console.log("\nurl=",url);
                //console.log("html=",html);
            }

        });
    });
    return promise;

}

function urlify(text, site) {
    var urlRegex = /"\.\..*"/g;
    return text.replace(urlRegex, function(url) {
        var newUrl = convertRelativeToAbsolute(url, site);
        return newUrl;
    })
}

function headify(text) {
    var urlRegex = /(<h\d) (.*)>/g;
    return text.replace(urlRegex, function(str) {
        var result = str.match(/(<h\d) (.*)>(.*)(<\/h\d>)/);
        switch(result[1]){
            case '<h1':
                return `<p><font size="6" ${result[2]}>${result[3]}</font></p>`;
            case '<h2':
                return `<p><font size="5" ${result[2]}>${result[3]}</font></p>`;
            default:
                return `<p><font size="4" ${result[2]}>${result[3]}</font></p>`;
        }
    })
}

function convertRelativeToAbsolute(url, site) {
    url = url.substring(1, url.length - 1);
    if(url[0] == "#"){
        return url;
    }

    var slug = site,
        parts = url.split(".."),
        counter = 0,
        newUrl = [];

    parts.forEach(function(elem, i){
        if(elem == '' || elem == '/'){
            counter++
        }else{
            newUrl.push(elem)
        }
    });

    slug = slug.split('/');
    while(counter>=0){
        slug.pop();
        counter--;
    }

    slug = slug.join('/');
    var aux = slug + newUrl.join('');

    return aux
}
