> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Raster data types

Rasters are digital aerial photographs, imagery from satellites, digital pictures, or even scanned maps.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Raster data types](#raster-data-types)
- [Training](#training)
  - [Getting started](#getting-started)
  - [Documentation and courses](#documentation-and-courses)
  - [Videos](#videos)
  - [Slides](#slides)
- [Related products or technologies](#related-products-or-technologies)
- [Other related list of resources](#other-related-list-of-resources)
- [Localized resources](#localized-resources)
  - [Spanish](#spanish)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

{% youtube %} https://www.youtube.com/watch?v=V08z5nk9KqU {% endyoutube %}

The raster model represents the surface of the earth as a grid of cells of equal size (square meter, square mile, ...) is usually used to represent continuous phenomena such us precipitation, elevation, heat from a forest fire, etc..

Each grid contains a discrete or continuous value. Examples:

* Discrete can have values that represent a code for a particular category. For example could be values defining the land type / land cover (1=backgound, 2=oak-pine, etc.)
* Continuous an elevation raster where each value define the altitude of that point

![Raster data](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/GUID-6754AF39-CDE9-4F9D-8C3A-D59D93059BDD-web.png)

> Learn more: [What is raster data?](http://desktop.arcgis.com/en/arcmap/latest/manage-data/raster-and-images/what-is-raster-data.htm)

Raster data types could be classified in many different ways,

* **Number of spectral bands**: sunlight consist of more wavelengths of electromagnetic radiation than the human eye can see (images are single band or multispectral)
    * **Single bands**: grayscale imagery, DEM (Digital Elevation Model), 3D imagery (DTM and DSM)
    * **Multispectral**: NaturalColor, color infrared, NDMI, NDVI, ...

* **Imagery sources** (Sensor platforms):
    * Satellites: Landsat, MODIS, Sentinel, WorldView, ...
    * Aerial: aircrafts, helicopters, balloons, drones (UAVs), blimps and dirigibles, rockets, pigeons, kites, parachutes, ...
    * Ground based: vehicle-mounted poles, stand-alone telescoping, handheld, ...

* **Sensor type used**:
    * Passive (record reflected sunlight): cameras, spectrometers
    * Active (emit energy and record reflected radiation): Lidar, Radar, Sonar

* **Number of dimensions**: unidimensional or multidimensional.

* **Use type**: basemap, multispectral, temporal, event, elevation, ...

## Raster data types

When we are working raster data types in a geographics information system we usually refers to four types:

* [Aerial photography, aerial imagery or airborne imagery](./aerial-imagery/README.md): photographs from an flying object (aircraft, helicopters, UAVs (or "drones"), etc.
* [Satellite imagery (from satellite sensors)](./satellite-sensor/README.md)
* [Multidimensional data](./multidimensional/README.md): refers to data normally stored as variables, where each variable is a multidimensional array.
* [Street-level imagery](./street-level/README.md): photographs taken at street level.

But sometimes even about scanned maps.

## Training

### Getting started

* [Imagery & Remote Sensing tutorials](https://learn.arcgis.com/en/gallery/#?c=imagery)

### Documentation and courses

* [ArcGIS Imagery Book](https://learn.arcgis.com/en/arcgis-imagery-book)
* [ArcGIS Imagery Book - Instructional Guide](http://downloads.esri.com/LearnArcGIS/pdf/instructional-guide-for-the-arcgis-imagery-book.pdf)
* [MOOC: Earth Imagery at work](https://www.esri.com/training/catalog/57aba196cbc441087e0d2395/earth-imagery-at-work/)

### Videos

We have created a [Imagery Youtube playlist](https://www.youtube.com/playlist?list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../assets/SavePlaylist.gif)).

On [*video.esri.com*](https://www.esri.com/videos/search?q=Imagery#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=Imagery) you will find many technical talks. Or check [Esri Geodev](https://www.youtube.com/channel/UCgCXcfk5uEraWkpE9wlRwgw) channel for short videos.

And

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2019|[Processing Drone Imagery using the ArcGIS API for Python](https://www.youtube.com/watch?v=WZZG4qIj5jQ&list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B&index=3)| 55min 9secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2019|[Using Deep Learning Models with ArcGIS to Extract Information from Imagery](https://www.youtube.com/watch?v=RtagUu7t63c&list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B&index=4)|51min 20secs
|[DevSummit](http://www.esri.com/events/devsummit) 2019|[Developing Imagery Apps using the ArcGIS API for JavaScript and WebApp Builder](https://www.youtube.com/watch?v=xmNpRRfegVE&list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B&index=1)|59min 44secs
|[FedGIS](https://www.esri.com/en-us/about/events/federal-gis-conference/overview) 2018|[ArcGIS Image Exploitation and Geospatial Analysis](https://www.youtube.com/watch?v=5mvST0o9Edk&list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B&index=13)|16min 55secs
|[DevSummit](http://www.esri.com/events/devsummit) 2018|[Imagery and Raster Data in ArcGIS - An Introduction](https://www.youtube.com/watch?v=dY9BOyacIx8&list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B&index=14)|1h 10min 41secs
|[User Conference](https://www.esri.com/en-us/about/events/uc/overview) 2017|[Imagery Sources and Usage in ArcGIS](https://www.youtube.com/watch?v=pnoj24ncZas&list=PLahIW2YFPQd5uO1xe6QmO2wsQHfWnRs-B&index=16)|1h 12min 45secs|




> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query="Imagery"), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query="Imagery"), [EsriTV](https://www.youtube.com/user/esritv/search?query="Imagery"), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query="Imagery") [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels), and [distributor's Youtube Channels](../../../esri#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+Imagery) or check on [GeoNet](https://community.esri.com/content?query=Imagery&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Related products or technologies

There are several products you can use to work imagery content:

|Product|How to get the tool|
|---|---|
|[ArcGIS Online](../../../products/arcgis-online/README.md)|[Sign-up for free](https://developers.arcgis.com/sign-up/)|
|[ArcGIS Earth](../../../products/arcgis-earth/README.md)|[Download for free](https://www.esri.com/en-us/arcgis/products/arcgis-earth/overview)|
|[ArcGIS Pro](../../../products/arcgis-desktop/arcgis-pro/README.md)|[21-day trial](https://www.esri.com/en-us/arcgis/products/arcgis-pro/trial), [Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[ArcGIS Spatial Analyst Extension](../../../products/extensions/spatial-analyst/README.md)|[21-day trial](https://www.esri.com/en-us/arcgis/products/arcgis-pro/trial), [Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[ArcGIS 3D Analyst Extension](../../../products/extensions/3d-analyst/README.md)|[21-day trial](https://www.esri.com/en-us/arcgis/products/arcgis-pro/trial), [Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[ArcGIS Image Analyst Extension](../../../products/extensions/image-analyst/README.md)|[21-day trial](https://www.esri.com/en-us/arcgis/products/arcgis-pro/trial), [Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[ArcGIS Image Server Extension](../../../products/extensions/image-server/README.md)|[21-day trial](https://www.esri.com/en-us/arcgis/products/arcgis-pro/trial), [Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[ArcGIS Enterprise](../../../products/arcgis-enterprise/README.md)|[Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[ArcGIS Excalibur](https://esri-es.github.io/awesome-arcgis/arcgis/products/arcgis-excalibur/)|[Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[Ortho Market](https://enterprise.arcgis.com/en/portal/latest/use/introduction-to-ortho-maker.htm)|[Dev. Professional Plan](https://developers.arcgis.com/pricing/compare-plans/#extend-arcgis) or [thru the Startup Program](../../../../esri/partners/programs/startup-program/README.md)|
|[Drone2Map](../../../products/drone2map/README.md)|[15-day trial](https://marketplace.arcgis.com/listing.html?id=3855a9d026f64917a09bfc78b590c42f)|



## Other related list of resources

* [awesome-satellite-imagery-datasets](https://github.com/chrieke/awesome-satellite-imagery-datasets): List of satellite image training datasets with annotations for computer vision and deep learning
* [awesome-satellite-imagery-competitions](https://github.com/wassname/awesome-satellite-imagery-competitions): List of machine learning competitions for satellite imagery and remote sensing.
* [awesome-computer-vision](https://github.com/jbhuang0604/awesome-computer-vision): A curated list of awesome computer vision resources

## Localized resources

### Spanish

* [Imágenes y Teledetección: Conceptos básicos del tratamiento de imágenes en la Plataforma ArcGIS](https://geogeeks.maps.arcgis.com/apps/Cascade/index.html?appid=5072b8d56cef4f7bb5d24e5d840461da)
* [Tratamiento de imágenes Sentinel-2 con ArcGIS](https://storymaps.arcgis.com/stories/8cf7c8024f6e4eb1bbb1d977bda137cf)
