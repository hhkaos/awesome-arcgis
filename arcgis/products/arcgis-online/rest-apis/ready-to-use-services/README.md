> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Ready to use services

There are several services hosted on [ArcGIS Online](../../README.md) that can be consumed though a REST API.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Services](#services)
  - [Geocoder service](#geocoder-service)
  - [Routing service](#routing-service)
  - [GeoEnrichment service](#geoenrichment-service)
  - [Spatial Analysis](#spatial-analysis)
- [REST API to calculate credit consumption](#rest-api-to-calculate-credit-consumption)
- [More resources](#more-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Some of theres are *free* and some consume [credits](../../credits/README.md), those that consume credits require to be [authenticated](../../../../name-users/oauth/README.md).

## Services

### Geocoder service

Learn more about the [Geocoding and Place Search service](https://developers.arcgis.com/features/geocoding/) and the [Geocoder coverage](https://doc.arcgis.com/en/arcgis-online/reference/geocode-coverage.htm).

HowTos: [Geocoding API DevLabs](https://developers.arcgis.com/labs/browse/?topic=Geocoding&product=any)

Trick: Custom geocoder with candidates filtered by URL: `http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer?sourceCountry={{Country_code}}`

For example:
`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer?sourceCountry=ESP`


### Routing service

HowTos:
* [Routing API DevLabs](https://developers.arcgis.com/labs/browse/?topic=Routing&product=any)
* [Routing on ArcGIS Online](http://odoe.net/blog/routing-arcgis-online/)

### GeoEnrichment service

HowTos:

* [GeoEnrichment API DevLabs](https://developers.arcgis.com/labs/browse/?topic=Demographics&product=any)
* [Uploading and enriching data to ArcCGIS Online](http://odoe.net/blog/uploading-enriching-data-arcgis-online/)

### Spatial Analysis

HowTos: [Spatial Analysis API DevLabs](https://developers.arcgis.com/labs/browse/?topic=Spatial-Analysis&product=any)


## REST API to calculate credit consumption

This REST API is not documented but if you debug the **analysis tools** inside the [ArcGIS Online Web Viewer](http://www.arcgis.com/home/webmap/viewer.html) whenever you click the "Show credits" link you will find an AJAX request to this endpoint: `https://analysis.arcgis.com/arcgis/rest/services/tasks/GPServer/exts/Estimate/<OPERATION>`.

Use it to find the parameters you need to send in order to do the calculations.

## More resources

**Pending**:

* Geometry engine
* Print service
* ...
