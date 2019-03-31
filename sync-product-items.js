require('isomorphic-form-data')
require('isomorphic-fetch')
import { searchItems, updateItem } from '@esri/arcgis-rest-items';
import { UserSession } from '@esri/arcgis-rest-auth';
import { parse } from 'node-html-parser';


var fs = require('fs');
var settings = require('./settings.json')

var session = new UserSession({
  username: settings.username,
  password: settings.password
})

updateItem({
  item: {
    id: "bb04b466539446cb9715943406c4c707",
    description: "<h1>H1 Header</h1><p>Paragraph</p>",
    clearEmptyFields: true
  },
  authentication: session
}).then(response=>{
  console.log("response=",response)
});

// searchItems('group:663480a878724c42aef09a523a8d5139').then(response => {
//     response.results.forEach((elem, i) =>{
//         parseHTML(elem.url).then(function(html) {
//             updateItem({
//               item: {
//                 id: elem.id,
//                 description: html
//               },
//               authentication: session
//           }).then(response=>{
//               console.log("response=",response)
//           });
//         });;
//
//     })
// });
//
//
// function parseHTML(url){
//     var path = url.split("/").slice(4).join("/");
//     var promise = new Promise(function(resolve, reject) {
//         fs.readFile(`docs/${path}index.html`, 'utf8', function(err, html) {
//
//             var site = url,
//                 root = parse(html),
//                 content = root.querySelector('.search-noresults').toString(),
//                 content = urlify(content, site);
//
//             resolve(content);
//
//         });
//     });
//     return promise;
//
// }
//
// function urlify(text, site) {
//     var urlRegex = /"\.\..*"/g;
//     return text.replace(urlRegex, function(url) {
//         var newUrl = convertRelativeToAbsolute(url, site);
//         return newUrl;
//     })
// }
//
// function convertRelativeToAbsolute(url, site) {
//     url = url.substring(1, url.length - 1);
//     if(url[0] == "#"){
//         return url;
//     }
//
//     var slug = site,
//         parts = url.split(".."),
//         counter = 0,
//         newUrl = [];
//
//     parts.forEach(function(elem, i){
//         if(elem == '' || elem == '/'){
//             counter++
//         }else{
//             newUrl.push(elem)
//         }
//     });
//
//     slug = slug.split('/');
//     while(counter>=0){
//         slug.pop();
//         counter--;
//     }
//
//     slug = slug.join('/');
//     var aux = slug + newUrl.join('');
//
//     return aux
// }
