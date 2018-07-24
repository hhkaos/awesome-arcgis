> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GeoCSV

Specification of the tabular file format CSV with an optional geometry extension

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
  - [Tools & Samples](#tools--samples)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: Specify a common system of annotations and rules for data in tabular text data formats in support of a specific style described in this document called “GeoCSV”.
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: [GIS](../../../data-types/vector/gis/README.md)
* **Multi-file format**: Yes
* **File type**: text-file
* **File extension(s)**: .csv
* **Originally developed by**: Unknown (2015)
* **Technical description/specification**: [GeoCSV file format specification](https://giswiki.hsr.ch/GeoCSV#GeoCSV_file_format_specification)
* **License**: *Unknown*
* **Regulated by**: Unknown
* **Status**: industry-standard/de facto standard/standard/....
* **Sample file(s)**: [GeoCSV examples](https://giswiki.hsr.ch/GeoCSV#Examples)
* **Consumable by**: *Esri products supporting it*

## Introduction

GeoCSV is a recent extension of the CSV file format with an optional extension of geometry. It takes little space and is easy to share.

As the shapefile, it can be accompanied by auxiliary files: .prj (Spatial Reference System), .csvt (field type information), csvz (compression format).

Variants:

* **The WKT option**: stores the constructor in a single column of type String, for example "POINT (-4.5454 45.2211)", which means -4.5454 west and 45.2211 north (longitude / latitude). This option supports the geometry types Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon and even GeometryCollection and ARCs.
* **The option "Point (X / Y)"**: can only store points. This type of point geometry is stored in two columns: longitude, latitude (x / y). Example for two columns of coordinates lon and lat is "8.8249; 47.2274"

### Tools & Samples

* [Koop](../../../../../devops/technologies/koop/README.md): An Open Geospatial ETL Engine that can translate into the [Geoservices specification](https://geoservices.github.io/) supported by the ArcGIS.

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["geocsv"](https://esri-es.github.io/arcgis-search/?search="geocsv"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
