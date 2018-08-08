> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# ArcGIS Image Server

ArcGIS Image Server provides serving, processing, analysis, and extracting value from massive collections of imagery, rasters, and remotely sensed data.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Functionality Matrix](#functionality-matrix)
- [Training](#training)
  - [Documentation](#documentation)
  - [Tutorials](#tutorials)
  - [Videos](#videos)
  - [Slides](#slides)
- [Get the tool](#get-the-tool)
- [Awesome projects & cool demos](#awesome-projects--cool-demos)
- [Support and Community](#support-and-community)
  - [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[ArcGIS Image Server](http://www.esri.com/arcgis/products/image-server) allows you to do:

* **Raster Analytics**: Raster Analytics quickly extracts information from very large images or image collections. Highly scalable raster analysis models, with distributed computing and storage, get traditionally large and slow analytical tasks done in a fraction of the time. Use Raster Analytics to preserve dynamic imagery as large datasets while analysis tools run, to run multiple analyses on the same imagery, and to maintain data records. Create and run your own job-specific raster analysis models on existing imagery, rasters, and GIS data.

* **Access and Process with Dynamic Image Services**: it provides on-the-fly processing and mosaicking capabilities to make it easy to access both new and existing imagery. On-the-fly processing transforms your source imagery into a wide range of on-demand products, reducing the amount of imagery you need to process and maintain. Dynamic Mosaicking easily handles overlapping imagery to display the most relevant imagery on top.

* **Share Imagery Products Enterprise-Wide**: Give your entire organization access to imagery—a great interactive source of visual and analytic information. With ArcGIS Image Server, it’s easy to deliver interactive imagery products and provide access to end-users where and how they need it via the entire ArcGIS platform.

## Functionality Matrix

> Check the [ArcGIS Enterprise Functionality Matrix](https://assets.esri.com/content/dam/esrisites/media/brochures/arcgis-enterprise-functionality-matrix.pdf)

SERVER CAPABILITIES:

* Run on Windows
* Run on Linux
* Deploy in the cloud
* Deploy on premises
* Deploy disconnected from the open Internet
* Script and automate workflows
* Create analytical models and model chains
* Edit data on the web
* Create OGC-compliant web services
* Create image and raster mosaics dynamically
* Display imagery and raster data on the fly
* Process and analyze big data

SERVICE TYPES:

* Cached service—Map, image
* Geoprocessing service
* Image service—From mosaic dataset
* Image service—From single raster

HOSTED LAYER TYPES:

* Imagery layer

INPUT DATA TYPES:

* Big data—Imagery/Raster
* Feature data (points, lines, polygons)
* Imagery/Raster data—Mosaic dataset
* Imagery/Raster data—Single raster
* Lidar/Terrain data—Mosaic dataset
* Lidar/Terrain data—Single raster
* Raster elevation surfaces

## Training

### Documentation

* What is ArcGIS Image Server (for [Windows]((http://server.arcgis.com/en/server/latest/get-started/windows/what-is-arcgis-image-server-.htm)) | [Linux](http://server.arcgis.com/en/server/latest/get-started/linux/what-is-arcgis-image-server-.htm))

There is also a MOOC for Imagery Analysts: [Earth Imagery at Work](https://www.esri.com/training/catalog/57aba196cbc441087e0d2395/earth-imagery-at-work/).

### Tutorials

These are not tutorials on [learn.arcgis.com](https://www.esri.com/training/catalog/57aba196cbc441087e0d2395/earth-imagery-at-work/) for Imager Server, but there are some for Image Analyst, ArcGIS Pro, ArcGIS Spatial Analyst and 3D Analyst so you can better understand what can be done on **Imagery and Remote Sensing data** in the platform. For example: [Assess Burn Scars with Satellite Imagery](https://learn.arcgis.com/en/projects/assess-burn-scars-with-satellite-imagery/).

### Videos

We have created a [Image Server Youtube playlist](https://www.youtube.com/playlist?list=PLahIW2YFPQd6gBA7tNQ1ULVmEtEU32hmS) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../../../assets/SavePlaylist.gif)).

On [*video.esri.com*](https://www.esri.com/videos/search?q=%22image%20server%22#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=%22image+server%22) you will find many technical talks.

|Event|Title|Length|
|---|---|---|
|[UC](http://www.esri.com/about/events/uc) 2017|[Image Management Using Mosaic Datasets and Image Services](https://www.youtube.com/watch?v=kPfgxeQZd3s)| 1h 18min 19secs|
|[UC](http://www.esri.com/about/events/uc) 2017|[Raster Analytics in Image Server: An Introduction](https://www.youtube.com/watch?v=FyAzbWbHHgg&t=71s&index=2&list=PLahIW2YFPQd6gBA7tNQ1ULVmEtEU32hmS)|1h 10min 26secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Automating Distributed Raster Analysis using the Image Server REST API](https://www.youtube.com/watch?v=zFgYrOfC0w8&index=6&list=PLahIW2YFPQd6gBA7tNQ1ULVmEtEU32hmS)|30min 25secs


> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query=%22imager+server%22), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query=%22image+server%22), [EsriTV](https://www.youtube.com/user/esritv/search?query=%22image+server%22), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query=%22image+server%22) [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?ei=eZXgWudZpe3oBISku4AH&q=site%3Aproceedings.esri.com+%22image+server%22) or check on [GeoNet](https://community.esri.com/content?query=%22image+server%22&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Get the tool

You can access to this tool though and [ArcGIS Developer Subscription](https://developers.arcgis.com/pricing/) (Entreprise Plan) or if you are an Startup you could also request to join to the [Esri Startup program](../../../../../esri//partners/programs/startup-program/README.md).

## Awesome projects & cool demos

* [Image Server: Raster Analytics](https://www.youtube.com/watch?v=zPEsVTYUe0g&list=PLahIW2YFPQd6gBA7tNQ1ULVmEtEU32hmS&index=4)

## Support and Community

If needed, remember you can always check the [Technical Support Website](https://support.esri.com/en) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.

**Community channels:**

* [ArcGIS Image Server](https://community.esri.com/community/gis/enterprise-gis/arcgis-image-server) place on GeoNet
    * [Answered questions on GeoNet](https://community.esri.com/community/gis/enterprise-gis/arcgis-image-server/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* ["Image server" on StackExchange](https://gis.stackexchange.com/search?q=%22image+server%22)

There are also people suggesting [enhancements on ArcGIS ideas](https://community.esri.com/search.jspa?q=%22image+server%22&place=%2Fplaces%2F478947&depth=ALL).

### People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=image%20server):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=image%20server)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

* [What’s new with Image Server in ArcGIS Enterprise 10.6](https://www.esri.com/arcgis-blog/products/arcgis-enterprise/announcements/whats-new-with-image-server-in-arcgis-enterprise-10-6/)

More news:

* [Blog Posts about "Image Server" inside Places at GeoNet](https://community.esri.com/content?query=Image Server&filterID=all~objecttype~objecttype%5Bblogpost%5D)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["Image Server"](https://esri-es.github.io/arcgis-search/?search="Image Server"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
