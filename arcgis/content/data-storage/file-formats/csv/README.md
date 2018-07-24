> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# CSV

Comma-Separated Values (CSV) file is a delimited text file that uses a comma to separate values.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Quick overview](#quick-overview)
- [Introduction](#introduction)
  - [Additional documentation](#additional-documentation)
  - [Tools](#tools)
- [Additional resources](#additional-resources)
  - [Related resources](#related-resources)
  - [Localized resources](#localized-resources)
    - [Spanish](#spanish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick overview

* **Purpose**: Stores tabular data (numbers and text) in plain text
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: General Purpose
* **Multi-file format**: No
* **File type**: plain-text
* **File extension(s)**: .csv
* **Originally developed by**: Unknown (2005)
* **Technical description**: [RFC 4180 standard](https://tools.ietf.org/html/rfc4180)
* **License**: *Unknown*
* **Regulated by**: [IETF](https://www.ietf.org)
* **Status**: IETF Standard
* **Sample file(s)**: [ArcGIS Online public CSVs](https://www.arcgis.com/home/search.html?q=typekeywords%3Acsv&start=1&sortOrder=desc&sortField=relevance)
* **Consumable by**:
    * [ArcGIS Online](../../../../products/arcgis-online/README.md) - [How to generate hosted service from CSV](https://developers.arcgis.com/labs/arcgisonline/import-data/)
    * [ArcGIS Web Map Viewer](../../../../products/web-map-viewer/README.md)
    * [ArcGIS Web Scene Viewer](../../../../products/web-scene-viewer)
    * ...

## Introduction

CSV is a format for tabular data, and where you can find attributes that contain geographic information, usually in the form of X and Y coordinates (or latitude and longitude).

The main advantage of this format is that they can be processed quickly and take up very little space.

[From Wikipedia](https://en.wikipedia.org/wiki/Comma-separated_values):

> The CSV file format is not fully standardized. The basic idea of separating fields with a comma is clear, but that idea gets complicated when the field data may also contain commas or even embedded line-breaks. CSV implementations may not handle such field data, or they may use quotation marks to surround the field. Quotation does not solve everything: some fields may need embedded quotation marks, so a CSV implementation may include escape characters or escape sequences.

### Tools & Samples

* [CSV projects on Esri GitHub](https://github.com/esri?utf8=%E2%9C%93&q=csv&type=&language=)
    * [field-splitter-for-geoevent](https://github.com/Esri/field-splitter-for-geoevent): ArcGIS GeoEvent Server Sample Processor for Splitting fields with CSV values into multiple GeoEvents
    * [spatialsearch-opencsv-censusreport](https://github.com/Esri/spatialsearch-opencsv-censusreport): An Operations Dashboard for ArcGIS addin with a map tool that supports selection by location, a widget that opens a CSV file, and a feature action that generates a census report
    * [multi-value-counter-for-geoevent](): ArcGIS GeoEvent Server sample comma delimited values in a field Counter Processor.
* [Koop](../../../../../devops/technologies/koop/README.md): An Open Geospatial ETL Engine that can translate into the [Geoservices specification](https://geoservices.github.io/) supported by the ArcGIS.
* [CSV point layer extension for ArcPad](https://www.arcgis.com/home/item.html?id=144188a1c0414f318096cb0567660e79)
* [Add CSV Feed to a Graphics Layer for Android (Deprecated)](https://www.arcgis.com/home/item.html?id=dc66715d88eb4ecc92ee5d1b390a96d4)
* [developer-support samples](https://github.com/Esri/developer-support/search?q=csv&unscoped_q=csv)
    * [R Script to publish a feature service in ArcGIS Online from CSV](https://github.com/Esri/developer-support/tree/master/r/csv-to-arcgisonline-feature-service)
    * [Python Script to publish a feature service in ArcGIS Online from CSV](https://github.com/Esri/developer-support/blob/96c94c093ddfebf6dba45bf136083de73a8aaeaf/python/general-python/csv-to-arcgisonline-feature-service/README.md)
    * [Display XY Data from CSV (ArcObjects Java)](https://github.com/Esri/developer-support/blob/96c94c093ddfebf6dba45bf136083de73a8aaeaf/arcobjects-java/display-XY-data-from-CSV/Readme.md)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["CSV"](https://esri-es.github.io/arcgis-search/?search="CSV"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Related resources

* [awesome-csv](https://github.com/csvalues/awesome-csv: Awesome Comma-Separated Values (CSV) - What's Next? - Frequently Asked Questions (F.A.Q.s)

### Localized resources

#### Spanish

* [Cargar un CSV con coordenadas en ArcGIS Online](https://www.youtube.com/watch?v=tHy3ecKKZTM&t=2s&list=PLwq5dz_FjCx6F9SsNuQVQQKyGzuEuu1hd&index=4)
