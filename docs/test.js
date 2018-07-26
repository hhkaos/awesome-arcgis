var summary_titles =    ["ArcGIS", "GIS","oAuth", "ESA", "PNOA", "HERE",
                        "USGS NASA", "MODIS", "CSV", "ECW", "GDB", "GeoCSV",
                        "GeoJSON", "GML", "GPKG", "GPX", "GTFS", "KML", "KML",
                        "LAS", "MDB", "MMPK", "TopoJSON", "OGC", "CAD",
                        "AppStudio", "AWS", "JS", "jQuery", "ExtJS", "iOS",
                        "ArcCatalog", "ArcMap", "GeoAnalytics", "GeoEvent",
                        "Power BI", "APIs", "AppBuilder", "BIM", "BI",
                        "GeoNet", "AR", "IoT", "UAVs", "VR", "REST", "API"];
var fs = require('fs');
var someFile = "SUMMARY.md";

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var i = 0;
  var capitalizeFirstLetter = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  do{
      var pattern = capitalizeFirstLetter(summary_titles[i].toLocaleLowerCase())
      re = new RegExp("\\b"+pattern+"\\b", "g");
      data = data.replace(re, summary_titles[i])
      i++;
  }while(summary_titles[i])

  fs.writeFile(someFile, data, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
