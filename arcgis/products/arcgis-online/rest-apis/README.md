> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# ArcGIS Online REST API

ArcGIS Online provide a set of endpoints that will allow us to manage content, search data, use ready to use services (geocoding and place search, directions and routing, demographics, analysis) and much more.

![ArcGIS REST API Screenshot](../../product-thumbnails/arcgis-rest-api-query.png)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Getting started](#getting-started)
- [Training](#training)
  - [Documentation](#documentation)
  - [Videos](#videos)
- [Coding](#coding)
  - [Code](#code)
- [Tools](#tools)
- [Community](#community)
- [News](#news)
- [Additional resources](#additional-resources)
  - [Related products or technologies](#related-products-or-technologies)
  - [Localized resources](#localized-resources)
    - [Spanish](#spanish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

> *The ArcGIS Online REST API is one of the **[ArcGIS REST APIs](../../../../../esri/open-vision/open-specifications/arcgis-rest-api/README.md)** which is also part of the [Esri's Open Vision]((../../../../../esri/open-vision/README.md))).*

In the [ArcGIS REST API official documentation](https://developers.arcgis.com/rest/) you will find everything about how to use ArcGIS Online APIs. There are hundreds of endpoints to do things like:

* **Manage items**: databases, files, permissions, apps, ...
* **Manage an organization**: members, groups, settings, ...
* **Consume data**: Living Atlas, Open Data, ArcGIS user community, ...
* **Access public and free services**: geometry engine, place search, ...
* **Authenticate**: to access premium services, your private content, ...

You can access or manage any product built on top of the ArcGIS Online using it's API. For example: Living Atlas, ArcGIS Hub, ArcGIS Marketplace, ...

## Getting started

If you want to jump directly to the code you can do find some **tutorials in the [ArcGIS Dev Labs](https://developers.arcgis.com/labs/browse/?topic=any&product=rest-api)**.

## Training

### Documentation

* [ArcGIS REST API official documentation](https://developers.arcgis.com/rest/)
* [Location-based services](./location-based-services/README.md)
* [Using the ArcGIS REST Query Page](http://odoe.net/blog/using-arcgis-rest-query-page/) (filter and query content)
* [Introductory guide to Hosted Feature Service](https://github.com/esri-es/ArcGIS-REST-API/tree/master/HostedFeatureServices#hosted-feature-service---services-reference)
    * [Hosted Feature Service - Service Definition](https://github.com/esri-es/ArcGIS-REST-API/tree/master/HostedFeatureServices#hosted-feature-service---services-reference)

> **Warning**: some products like the Living Atlas, ArcGIS Hub, ArcGIS Marketplace, etc haven't got (yet) any specific documentation about their APIs, so you might need to do some reverse engineering

### Videos

We have created a [ArcGIS REST API Youtube playlist](https://www.youtube.com/playlist?list=PLahIW2YFPQd7o6L9fxSAXCuv5FldGkycP) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../assets/SavePlaylist.gif)).

On [*video.esri.com*](https://www.esri.com/videos/search?q=ArcGIS%20REST%20API#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=ArcGIS%20REST%20API) you will find many technical talks. Or check [Esri Geodev](https://www.youtube.com/channel/UCgCXcfk5uEraWkpE9wlRwgw) channel for short videos.

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2020|[Hosted Feature Services Webhooks](https://youtu.be/pp5GP2_xFeo?t=4190)|5min
|[DevSummit](http://www.esri.com/events/devsummit) 2020|[Node.js and Browser Applications with ArcGIS REST JS](https://www.youtube.com/watch?v=kJTnvGLcKdI&list=PLahIW2YFPQd7o6L9fxSAXCuv5FldGkycP&index=2&t=6s)| 49min 43secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2020|[ArcGIS REST JS: Universal, Isomorphic Tasty JavaScript for Much Win](https://www.youtube.com/watch?v=RUk8QDRZpXs&list=PLahIW2YFPQd7o6L9fxSAXCuv5FldGkycP&index=4)| 1h 02min 2secs|
|[GeoDev Webinar](https://www.youtube.com/playlist?list=PLGZUzt4E4O2ILC945g6dPRoRyyYTXoYmx) 2019|[ArcGIS REST JS: Portal and Server API](https://www.youtube.com/watch?v=2KA9ZShuWwo&list=PLGZUzt4E4O2ILC945g6dPRoRyyYTXoYmx&index=26)|1h
|[DevSummit](http://www.esri.com/events/devsummit) 2019|[Interacting with Hosted Feature Layers through the REST API](https://www.youtube.com/watch?v=uJvZ8MJA0t4&list=PLahIW2YFPQd7o6L9fxSAXCuv5FldGkycP&index=9&t=1450s)| 29min 43secs|
|n.a.|[Using the ArcGIS REST Query Page](https://www.youtube.com/watch?v=LsYgtjkm69Y&feature=emb_title)| 8min 24secs|

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query="ArcGIS+REST+API"), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query="ArcGIS+REST+API"), [EsriTV](https://www.youtube.com/user/esritv/search?query="ArcGIS+REST+API"), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query="ArcGIS+REST+API") [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels), and [distributor's Youtube Channels](../../../esri#youtube-channels)

## Coding

### Code  

**[ArcGIS-API-REST](https://github.com/esri-es/ArcGIS-REST-API): Postman collections for ArcGIS REST APIs**

ArcGIS REST API wrappers:

* ArcGIS Online:
    * [arcgis-rest-js](https://github.com/Esri/arcgis-rest-js): compact, modular JavaScript wrappers for the ArcGIS REST API
    * [ArcGIS API for Python: Accessing and creating content](https://developers.arcgis.com/python/guide/accessing-and-creating-content/)
    * [arcgis-python-api](https://github.com/Esri/arcgis-python-api): Documentation and samples for ArcGIS API for Python
* [ArcGIS Hub](../../arcgis-hub/README.md):
    * [hub.js](https://esri.github.io/hub.js/guides/): JavaScript wrappers for talking to ArcGIS Hub (REST API)
    * [hub.js](https://github.com/esri/hub-py/wiki): Python interface to ArcGIS Hub (REST API)


## Tools

* [Fiddler](https://www.telerik.com/fiddler): web debugging tool for logging HTTP/S traffic. Inspect traffic, mock requests/responses, share sessions, collaborate within teams to debug issues.

## Community

* [ArcGIS REST API place on GeoNet](https://community.esri.com/community/developers/web-developers/arcgis-rest-api)
* [ArcGIS Open Data community](https://community.esri.com/groups/data-community)
* [ArcGIS Open Data](https://community.esri.com/community/gis/web-gis/arcgis-open-data)
* [ArcGIS Python API](https://community.esri.com/groups/arcgis-python-api)

## News

About ArcGIS Open Data:

* [ArcGIS for Developers: Improved ArcGIS REST API Documentation](https://www.esri.com/arcgis-blog/products/api-rest/uncategorized/arcgis-for-developers-improved-arcgis-rest-api-documentation/?rmedium=redirect&rsource=blogs.esri.com/esri/arcgis/2018/01/19/arcgis-for-developers-arcgis-rest-api-documentation)
* [ArcGIS API for Python Core Concepts Part 1: Python, APIs, and REST](https://www.esri.com/arcgis-blog/products/api-python/administration/arcgis-api-for-python-core-concepts-part-1/)
* [ArcGIS Open Data tag at blogs.esri.com](https://blogs.esri.com/esri/arcgis/tag/arcgis-open-data-2/)
* [@EsriDC at twitter](https://twitter.com/esridc?lang=en)


## Additional resources

* [GeoDev Webinar Series](go.esri.com/geodev)

* Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["ArcGIS REST API"](https://esri-es.github.io/arcgis-search/?search="ArcGIS%20REST%20API"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Related products or technologies

* [Koop](../../../developers/profiles/devops/technologies/koop/README.md): Transform, query, and download geospatial data on the web. (support ArcGIS REST API as an output)


### Localized resources

#### Spanish

* [Videos sobre la "ArcGIS REST API" en el canal de Youtube de GeoDevelopers](https://www.youtube.com/c/GeoDevelopers/search?query=arcgis+api+rest)
* [GeoDev Spain en GeoNet](https://geonet.esri.com/groups/geodev-spain)
* [Videos sobre la "ArcGIS REST API" en el canal de Youtube de Esri España](https://www.youtube.com/user/esriSpainTV/search?query=ArcGIS+REST)
