> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# GeoJSON

Represent simple geographical features, along with their non-spatial attributes based on JSON.

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

* **Purpose**: Represent simple geographical features, along with their non-spatial attributes based on JSON.
* **Data type**: [vector](../../../data-types/vector/README.md)
* **Type of format**: GIS
* **Multi-file format**: No
* **File type**: text-file
* **File extension(s)**: .json, .geojson
* **Originally developed by**: [Geographic JSON working group](https://datatracker.ietf.org/wg/geojson/history/) ([2007](http://lists.geojson.org/pipermail/geojson-geojson.org/2007-March/thread.html))
* **Technical description/specification**: [The GeoJSON Specification (RFC 7946)](https://tools.ietf.org/html/rfc7946)
* **License**: *Unknown*
* **Regulated by**: [IETF](https://www.ietf.org/)
* **Status**: IETF Standard
* **Sample file(s)**: [ArcGIS Online public GeoJSON](https://www.arcgis.com/home/search.html?q=typekeywords%3Ageojson&start=1&sortOrder=desc&sortField=numviews)
* **Consumable by**:
    * [ArcGIS Online](../../../../products/arcgis-online/README.md) - [How to](https://developers.arcgis.com/labs/arcgisonline/import-data/)
    * [ArcGIS API for JavaScript 4.x](../../../../../front-end/technologies/dojo/4.x/README.md) - [How to](https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/index.html)
    * [ArcGIS API for JavaScript 3.x](../../../../../front-end/technologies/dojo/3.x/README.md) - [How to](https://github.com/Esri/geojson-layer-js)
    * ...

## Introduction

From [Wikipedia](https://en.wikipedia.org/wiki/GeoJSON).

> **GeoJSON** is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on JSON, the JavaScript Object Notation.
>
> The features include points (therefore addresses and locations), line strings (therefore streets, highways and boundaries), polygons (countries, provinces, tracts of land), and multi-part collections of these types. GeoJSON features need not represent entities of the physical world only; mobile routing and navigation apps, for example, might describe their service coverage using GeoJSON.

## Additional documentation

* [GeoJSON](http://geojson.org/)

## Tools

* [Koop](../../../../../devops/technologies/koop/README.md): An Open Geospatial ETL Engine. It is a Node.js server that can translate [GeoJSON](http://geojson.org/) into the [Geoservices specification](https://geoservices.github.io/) supported by the ArcGIS
* [esri-leaflet](../../../../../front-end/technologies/leaflet/README.md): A lightweight set of tools for working with ArcGIS services in Leaflet - (example: [Using GeoJSON with Leaflet](https://leafletjs.com/examples/geojson/))
* [geojson projects on Github](https://github.com/Esri?utf8=%E2%9C%93&q=geojson&type=&language=)
    * [geojson-utils](https://github.com/Esri/geojson-utils): A set of utilities for converting between standard geojson and other json formats
    * [arcgis-to-geojson-utils](https://github.com/Esri/arcgis-to-geojson-utils): Tools to convert ArcGIS JSON geometries to GeoJSON geometries and vice-versa.
    * [terraformer](https://github.com/Esri/terraformer): A geographic toolkit for dealing with geometry, geography, formats, and building geo databases
    * [terraformer-wkt-parser](https://github.com/Esri/terraformer-wkt-parser): Well-Known Text parser for Terraformer
    * [terraformer-arcgis-parser](https://github.com/Esri/terraformer-arcgis-parser)
* [GeoJSONLint](http://geojsonlint.com/)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["geojson"](https://esri-es.github.io/arcgis-search/?search="geojson"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Related resources

* [awesome geojson](https://github.com/tmcw/awesome-geojson): GeoJSON utilities that will make your life easier.
* [TopoJSON format](../topojson/README.md)

### Localized resources

#### Spanish

* [Terraformer Toolkit](https://www.youtube.com/watch?v=6NuEO4LlqvE)
