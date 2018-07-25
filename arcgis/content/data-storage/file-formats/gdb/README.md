> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GDB

A file GeoDataBase (GDB) is a collection of files in a folder on disk that can store, query, and manage both spatial (vector and raster) and nonspatial data.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
- [Additional documentation](#additional-documentation)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: Store, query, and manage both spatial (vector and raster) and nonspatial data.
* **Data type**: [vector](../../../data-types/vector/README.md) and [raster](../../../data-types/raster/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: Yes
* **File type**: binary
* **File extension(s)**: .gdb, .zip
* **Originally developed by**: Esri (2006)
* **Technical description/specification**: [File geodatabase API](https://github.com/Esri/dgb-api)
* **License**: *Unknown*
* **Regulated by**: Esri
* **Status**: proprietary
* **Sample file(s)**: [ArcGIS Online public File GeoDatabases](https://www.arcgis.com/home/search.html?q=typekeywords%3AGeodatabase&start=1&sortOrder=desc&sortField=relevance)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md) - [How to](http://pro.arcgis.com/en/pro-app/help/projects/connect-to-a-database.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md) - [How to](http://desktop.arcgis.com/en/arcmap/latest/manage-data/using-arccatalog/connect-to-file-or-personal-geodatabase.htm)
    * [ArcGIS Enterprise](../../../../products/arcgis-enterprise/README.md) through [ArcGIS Server](../../../../products/arcgis-enterprise/arcgis-server/README.md) - [How to](http://enterprise.arcgis.com/en/server/latest/publish-services/linux/publishing-a-geodata-service.htm)
    * [ArcGIS Runtime for Java](../../../../../arcgis/developers/desktop/technologies/java/README.md) (supported only if using local server)
    * [ArcGIS Runtime for .NET](../../../../../arcgis/developers/desktop/technologies/dot-net/README.md) (supported only if using local server)
    * [ArcGIS Runtime for Qt](../../../../../arcgis/developers/desktop/technologies/qt/README.md) (Supported only if using C++ API and local server. Not supported with QML API.)
    * [ArcObjects](../../../../../arcgis/developers/desktop/technologies/arcobjects/README.md)
    * ...

## Introduction

> It is the evolution from the [personal geodatabase](../mdb/README.md) and it was introduced in ArcMap 9.2 (2006). It is also preferred over the [shapefile](../shapefile/README.md).

**Description**: A collection of various types of GIS datasets held in a file system folder.(This is the recommended native data format for ArcGIS stored and managed in a file system folder.)

**Number of users**: Single user and small workgroups:many readers or one writer per feature dataset, stand-alone feature class, or table. Concurrent use of any specific file eventually degrades for large numbers of readers.

**Storage format**: Each dataset is a separate file on disk. A file geodatabase is a file folder that holds its dataset files.

**Size limits**: One TB for each dataset. Each file geodatabase can hold many datasets. The 1 TB limit can be raised to 256 TB for extremely large image datasets. Each feature class can scale up to hundreds of millions of vector features per dataset.

**Versioning support**: Only supported as a geodatabase for clients who post updates using checkout and check-in and as a client to which updates can be sent using one-way replication.

**Platforms**: Cross-platform.

**Security and permissions**: Operating file system security.

**Database administration tools**: File system management.

**Notes**: You can optionally store data in a read-only compressed format to reduce storage requirements.

## Additional documentation

* Vídeo: [Geodatabase Fundamentals](https://www.youtube.com/watch?v=ocSd7NxPvBg)
* [Comparing the three types of geodatabases](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/types-of-geodatabases.htm)
* [License a file geodatabase](http://desktop.arcgis.com/en/arcmap/latest/manage-data/administer-file-gdbs/license-file-geodatabase.htm): You can share data in a file geodatabase with other people and apply a license that determines the length of time they can use the data or whether they can export feature classes.

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["file geodatabase"](https://esri-es.github.io/arcgis-search/?search="file geodatabase"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
