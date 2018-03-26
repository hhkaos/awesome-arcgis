> **Note**: this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# .NET Developers

On this page you will find resources to learn how to develop desktop applications using [the ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net/latest). See the following pages if you are looking for resources to learn: [how extend ArcGIS Pro using .Net](../../../arcgis/products/arcgis-desktop/arcgis-pro/README.md) or [using Xamarin to develop mobile applications using .NET](../../../mobile/technologies/xamarin/README.md)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Documentation](#documentation)
  - [Tutorials](#tutorials)
  - [Videos](#videos)
  - [Slides](#slides)
- [Get the tool](#get-the-tool)
- [Coding](#coding)
  - [Code](#code)
  - [Tools](#tools)
- [Community](#community)
- [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Introduction

ArcGIS Runtime SDK for .NET contains APIs (for [WPF](https://developers.arcgis.com/net/latest/wpf/guide/display-a-map.htm), [UWP](https://developers.arcgis.com/net/latest/uwp/guide/display-a-map.htm), ...) that enable you to build native mapping apps and share source code across Windows, Android, and iOS. Integrate a range of mapping and GIS capabilities online or offline, including 2D and 3D data visualization, web and mobile maps, editing, geocoding, routing, and spatial analysis.

## Training
### Documentation

* [Official documentation](https://developers.arcgis.com/net/latest/)
* [Official training](www.esri.com/training/Bookmark/PKEDPSDGS)

### Tutorials

* [.NET Devlabs](https://developers.arcgis.com/labs/browse/?topic=any&product=NET)

### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=.NET#?sortby=recent) you will find and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=TOPIC) you will find many technical talks (some of them are **Runtime generic**).

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime: Building Cross-platform Apps](https://www.youtube.com/watch?v=XLT1PjZgbAQ)|59min 08secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime SDK for .NET: Building Apps](https://www.youtube.com/watch?v=_KBcHw9HZ50)|1h 01min 23sec|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime: Migrating from ArcGIS Engine](https://www.youtube.com/watch?v=h1lyaH00G6A)| 1h 10min 32secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[ArcGIS Runtime SDK for .NET: Tips and Tricks](https://www.esri.com/videos/watch?videoid=5064&channelid=LegacyVideo&isLegacy=true&title=arcgis-runtime-sdk-for-.net:-tips-and-tricks)|58min 18secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[Developing Windows Desktop and Device Apps with the ArcGIS Runtime SDK for .NET](https://www.esri.com/videos/watch?videoid=4733&channelid=LegacyVideo&isLegacy=true&title=developing-windows-desktop-and-device-apps-with-the-arcgis-runtime-sdk-for-.net)|1h 06min 59secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Runtime SDK for .NET: Integrating Devices, Sensors, Services, and More](https://www.esri.com/videos/watch?videoid=4448&channelid=LegacyVideo&isLegacy=true&title=arcgis-runtime-sdk-for-.net:-integrating-devices,-sensors,-services,-and-more)|56min 21secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Runtime SDK for .NET: How We Built the Plenary Apps](https://www.esri.com/videos/watch?videoid=4449&channelid=LegacyVideo&isLegacy=true&title=arcgis-runtime-sdk-for-.net:-how-we-built-the-plenary-apps)|40min 52secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Runtime SDK for .NET: Transitioning to It from Other Esri .NET SDKs](https://www.esri.com/videos/watch?videoid=4413&channelid=LegacyVideo&isLegacy=true&title=arcgis-runtime-sdk-for-.net:-transitioning-to-it-from-other-esri-.net-sdks)|1h 3min 17secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[Geo-Enable Your .NET Apps with ArcGIS Online and Runtime](https://www.esri.com/videos/watch?videoid=4415&channelid=LegacyVideo&isLegacy=true&title=geo-enable-your-.net-apps-with-arcgis-online-and-runtime)|59min 50secs|

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw), [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+.NET+-"ArcGIS+Pro") or check on [geonet](https://community.esri.com/content?query=ArcGIS+Runtime+SDK+for+.NET&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Get the tool

You first need and [ArcGIS Developer Subscription](https://developers.arcgis.com/pricing/), then you will be able to [download it from here](https://developers.arcgis.com/downloads/apis-and-sdks) or follow the following [installation guide](https://developers.arcgis.com/net/latest/wpf/guide/install-the-sdk.htm).

## Coding

### Code

* [arcgis-runtime-samples-dotnet: Sample code for ArcGIS Runtime SDK for .NET – UWP, WPF, Xamarin.Android, Xamarin.iOS, and Xamarin.Forms](https://github.com/Esri/arcgis-runtime-samples-dotnet)
* [Other Esri Open Sourced .NET Samples ](https://github.com/Esri?utf8=%E2%9C%93&q=dotnet&type=&language=)
* [.NET samples at developer-support repo](https://github.com/Esri/developer-support/tree/master/runtime-net)
* [ArcGISRestAPI - A .NET library for interfacing with the ArcGIS REST API - for developing with ArcGIS Online and Portal for ArcGIS](https://github.com/EsriUK/ArcGISRestAPI)

### Tools

Additional tools to help you speedup your developments:

* [Toolkit for ArcGIS Runtime SDK for .NET](https://github.com/Esri/arcgis-toolkit-dotnet)

## Awesome projects

[ArcGIS Runtime SDK for .Net Demo at 2017 DevSummit Plenary](https://youtu.be/i8FgR_3zumQ?t=39m59s)

## Community

* [ArcGIS Runtime SDK for .NET on GeoNet](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-net)
* [Stackexchange](https://gis.stackexchange.com/search?q=.net+arcgis)

## People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=ArcGIS%20Runtime%20SDK%20for%20.NET):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=ArcGIS%20Runtime%20SDK%20for%20.NET)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

More news:

* [ArcGIS Runtime SDK for .NET at blogs.esri.com](https://blogs.esri.com/esri/arcgis/tag/arcgis-runtime-sdk-for-net/)
* [ArcGIS Runtime SDK for .NET at esri.com search engine](https://www.esri.com/en-us/search#/?q=ArcGIS%20Runtime%20SDK%20for%20.NET&v=0&tab=Explore&page=1)
* [Blog Posts about "Runtime SDK .NET" inside Places at GeoNet](https://community.esri.com/content?query=Runtime+SDK+.NET&filterID=all~objecttype~objecttype%5Bblogpost%5D)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["ArcGIS Runtime SDK for .NET"](https://esri-es.github.io/arcgis-search/?search=%22ArcGIS%20Runtime%20SDK%20for%20.NET%22&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).
