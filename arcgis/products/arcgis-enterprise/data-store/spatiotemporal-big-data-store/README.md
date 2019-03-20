> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Spatiotemporal Big Data Store

The [ArcGIS Data Store](../README.md), available with [ArcGIS Enterprise](../../README.md), has been enhanced to work with observational data by way of introducing the spatiotemporal big data store.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Videos](#videos)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

This is the technology provided to work with observational data, it can be moving objects, changing attributes of stationary sensors, or both.

The spatiotemporal big data store enables archival of high volume observation data, sustains high velocity write throughput, and can run across multiple machines (nodes). Adding additional machines adds capacity, enabling you to store more data, implement longer retention policies of your data, and support higher data write throughput.

It allows in-flight aggregations of up to **hundreds of millions** of geometries.

> For each larger amount of data [ArcGIS Analytics for IoT](https://www.esri.com/en-us/landing-page/product/2018/arcgis-analytics-for-iot) will be released in Beta in June 2019 (it will be deployed over [ArcGIS Online](../../../../products/arcgis-online/README.md))

> Bear in mind that working with point geometry is not the same as working with linear or polygonal geometries, as each of these geometries can be large in size.

> **Note**: it has been a developer from [Elasticsearch](https://en.wikipedia.org/wiki/Elasticsearch).

Learn more about the [spatiotemporal big data store](http://enterprise.arcgis.com/en/geoevent/latest/administer/managing-big-data-stores.htm).

> To be able to publish in Big Data you have to have [GeoEvent Server](../../../../products/arcgis-enterprise/arcgis-server/geoevent-server/README.md) or [GeoAnalytics Server](../../../../products/arcgis-enterprise/arcgis-server/geoanalytics-server/README.md).

## Training

* [Spatiotemporal Big Data Store](https://www.esri.com/training/catalog/599c71907ff0c21b68d07c2d/spatiotemporal-big-data-store/)
* [Troubleshooting guide for ArcGIS Spatiotemporal Big Data Store](https://community.esri.com/groups/big-data/blog)

### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=spatiotemporal+big+data+store#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=spatiotemporal+big+data+store) you will find many technical talks. Or check [Esri Geodev](https://www.youtube.com/channel/UCgCXcfk5uEraWkpE9wlRwgw) channel for short videos.

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2018|[Real-Time and Big Data GIS: Leveraging the Spatiotemporal Big Data Store](https://www.youtube.com/watch?v=iW7_w9Evr6c)|1h 05min 51secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Big Data: GeoEvent & GeoAnalytics, Leveraging the Spatiotemporal Big Data Store](https://www.youtube.com/watch?v=-gnWpOrv7-4)|58:56

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["Spatiotemporal Big Data Store"](https://esri-es.github.io/arcgis-search/?search="spatiotemporal big data store"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
