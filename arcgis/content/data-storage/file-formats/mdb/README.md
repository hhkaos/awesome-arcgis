> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# MDB

MDB is a database file used by Microsoft Access, but in a GIS context it use to be an **Esri Personal Geodatabase** which is based on Microsoft Access.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
- [Additional documentation](#additional-documentation)
- [Additional resources](#additional-resources)
  - [Related resources](#related-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: Store, query, and manage both spatial and nonspatial data.
* **Data type**: [vector](../../../data-types/vector/README.md) and [raster](../../../data-types/raster/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: No
* **File type**: binary
* **File extension(s)**: .mdb, .zip
* **Originally developed by**: Microsoft (1992)
* **Technical description/specification**: *Not available*
* **License**: *Unknown*
* **Regulated by**: Microsoft
* **Status**: proprietary
* **Sample file(s)**: [Personal GeoDatabases sample files](https://www.state.nj.us/transportation/refdata/countysidewalks/downloads.shtm)
* **Consumable by**:
    * [ArcGIS Pro](../../../../products/arcgis-desktop/arcgis-pro/README.md) - [How to](http://pro.arcgis.com/en/pro-app/help/projects/connect-to-a-database.htm)
    * [ArcMap](../../../../products/arcgis-desktop/arcmap-arccatalog/README.md) - [How to](http://desktop.arcgis.com/en/arcmap/latest/manage-data/using-arccatalog/connect-to-file-or-personal-geodatabase.htm)
    * ArcObjects
    * ...
    * [Using ODBC (Microsoft Open Database Connectivity)](https://docs.microsoft.com/en-us/sql/odbc/microsoft-open-database-connectivity-odbc?view=sql-server-2017)

## Introduction

> Note: Personal GeoDatabases were introduced by Esri in ArcGIS for Desktop 8.0 (1999).

**Description**: Original data format for ArcGIS geodatabases stored and managed in Microsoft Access data files.(This is limited in size and tied to the Windows operating system.)

**Number of users**: Single user and small workgroups with smaller datasets: some readers and one writer. Concurrent use eventually degrades for large numbers of readers.

**Storage format**: All the contents in each personal geodatabase are held in a single Microsoft Access file (.mdb).

**Size limits**: Two GB per Access database. The effective limit before performance degrades is typically between 250 and 500 MB per Access database file.

**Versioning support**: Only supported as a geodatabase for clients who post updates using checkout and check-in and as a client to which updates can be sent using one-way replication.

**Platforms**: Windows only.

**Security and permissions**: Windows file system security.

**Database administration tools**: Windows file system management.

**Notes**: Often used as an attribute table manager (via Microsoft Access). Users like the string handling for text attributes.

## Additional documentation

* Vídeo: [Geodatabase Fundamentals](https://www.youtube.com/watch?v=ocSd7NxPvBg)
* [Comparing the three types of geodatabases](http://desktop.arcgis.com/en/arcmap/latest/manage-data/geodatabases/types-of-geodatabases.htm)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["personal geodatabase"](https://esri-es.github.io/arcgis-search/?search="personal geodatabase"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Related resources

* [File GeoDataBase](../gdb/README.md): is the evolution of the personal geodatabase
