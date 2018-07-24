> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Shapefile

Shapefile format is a geospatial vector data format for geographic information system software. The shapefile format can spatially describe vector features: points, lines, and polygons, representing, for example, water wells, rivers, and lakes. Each item usually has attributes that describe it, such as name or temperature.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
- [Additional documentation](#additional-documentation)
- [Tools](#tools)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: *Unknown*
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: GIS
* **Multi-file format**: Yes (ZIP)
* **File type**: binary
* **File extension(s)**: .zip (.shp, .shx, .dbf, ...)
* **Originally developed by**: Esri (1998)
* **Technical description/specification**: [Shapefile Technical Description](https://www.esri.com/library/whitepapers/pdfs/shapefile.pdf)
* **License**: *Unknown*
* **Regulated by**: Esri
* **Status**: industry-standard
* **Sample file(s)**: [ArcGIS Online public shapefiles](https://www.arcgis.com/home/search.html?q=typekeywords%3Ashapefile&start=1&sortOrder=desc&sortField=relevance)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md): [How to](http://pro.arcgis.com/en/pro-app/help/data/shapefiles/working-with-shapefiles-in-arcgis-pro.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md): [How to](http://desktop.arcgis.com/en/arcmap/10.3/manage-data/shapefiles/what-is-a-shapefile.htm)
    * ...
    * ArcGIS Runtime SDKs for .Net : [ Howto](https://developers.arcgis.com/net/latest/wpf/sample-code/featurelayershapefile.htm)
    * ...
    * Javascript API v3.25: [How to](https://developers.arcgis.com/javascript/3/jssamples/portal_addshapefile.html)

## Introduction

It was originated to work with ArcView GIS product. It does not have the capacity to store topological information and the maximum allowed file size is restricted to 2GB (dbf). They do not handle the current life cycle of the creation, edition, version and archiving of data.

It is a multi-file format. The minimum number required is three and they have the following extensions:

* .shp: geometric entities of the objects.
* .shx: index of geometric entities.
* .dbf: it is the database, in dBASE format, where the information of the attributes of the objects is stored.

Optionally, you can include other types of files in relation to the map projection (.prj) or the metadata.

## Additional documentation

* [What is a shapefile? - ArcMap Documentation](http://desktop.arcgis.com/en/arcmap/10.3/manage-data/shapefiles/what-is-a-shapefile.htm)
* [Shapefile - ArcGIS Online Documentation](https://doc.arcgis.com/en/arcgis-online/reference/shapefiles.htm)
* [Shapefile - At Wikipedia](https://en.wikipedia.org/wiki/Shapefile)

## Tools

* [add-shapefile-js](https://github.com/Esri/add-shapefile-js): This ArcGIS JavaScript sample let's you navigate to a local .zip file add a shapefile to your web map. It uses the Portal API REST Generate method to create features that can be loaded into a web map application

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["shapefile"](https://esri-es.github.io/arcgis-search/?search="shapefile"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
