> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GDB

File Geodatabase (GDB) is an Esri format based on multiple binary files

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: *Unknown*
* **Data type**: [vector](../../../data-types/vector/README.md) and [raster](../../../data-types/raster/README.md)
* **Type of format**: GIS
* **Multi-file format**: Yes
* **File type**: binary
* **File extension(s)**: .gdb, .zip
* **Originally developed by**: Esri (2006)
* **Technical description/specification**: [File geodatabase API](https://github.com/Esri/file-geodatabase-api)
* **License**: *Unknown*
* **Regulated by**: Esri
* **Status**: proprietary
* **Sample file(s)**: [ArcGIS Online public File GeoDatabases](https://www.arcgis.com/home/search.html?q=typekeywords%3AGeodatabase&start=1&sortOrder=desc&sortField=relevance)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md) - [How to](http://pro.arcgis.com/en/pro-app/help/projects/connect-to-a-database.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md) - [How to](http://desktop.arcgis.com/en/arcmap/latest/manage-data/using-arccatalog/connect-to-file-or-personal-geodatabase.htm)
    * [ArcGIS Enterprise](../../../../products/arcgis-enterprise/README.md) through [ArcGIS Server](../../../../products/arcgis-enterprise/arcgis-server/README.md) - [How to](http://enterprise.arcgis.com/en/server/latest/publish-services/linux/publishing-a-geodata-service.htm)
    * [ArcGIS Runtime for Java](../../../../../desktop/technologies/java/README.md) (supported only if using local server)
    * [ArcGIS Runtime for .NET](../../../../../desktop/technologies/dot-net/README.md) (supported only if using local server)
    * [ArcGIS Runtime for Qt](../../../../../desktop/technologies/qt/README.md) (Supported only if using C++ API and local server. Not supported with QML API.)
    * [ArcObjects](../../../../../desktop/technologies/arcobjects/README.md)
    * ...

## Introduction

Evolution from the [personal geodatabase](../personal-geodatabase/README.md) created in 9.2. It is also prefered over the [shapefile](../shapefile/README.md). It is a collection of binary files stored on disk
Multi user, single editor, 1TB per dataset*
