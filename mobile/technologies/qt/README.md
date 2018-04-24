> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Qt Developers

ArcGIS Runtime for the Qt integrates a wide range of mapping and GIS capabilities online or offline, including editing, analysis, geocoding, routing, management of web maps, 2D and 3D, data visualization, mobile map packages, and vector tiled layers.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Documentation](#documentation)
  - [Tutorials](#tutorials)
  - [Videos](#videos)
  - [Slides](#slides)
- [Download the Runtime SDK for Qt](#download-the-runtime-sdk-for-qt)
- [Coding](#coding)
  - [Code](#code)
  - [Tools](#tools)
- [Awesome projects & cool demos](#awesome-projects--cool-demos)
- [Support and Community](#support-and-community)
  - [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)
- [Awesome lists for Qt](#awesome-lists-for-qt)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The [ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/qt/latest/) is the technology you may want to use if you want to build your Android and iOS applications in C++ & QML.

You also have an IDE to use Qt and QML with several templates, it is called
[App Studio for ArcGIS](../../../desktop/technologies/qt/app-studio/README.md).

You can also use the [ArcGIS Runtime SDK for .NET](../xamarin/README.md) to build cross mobile applications (Android & iOS) using .NET.

As last resource, you may even consider to make an application or prototype as fast as possible (without writing any code), in this case you should also consider using some of [our app builders, like AppStudio or Survey123](../../../arcgis/products/README.md#app-builders).

And remember, before reinventing the wheel [check the existing Esri mobile apps](../../../arcgis/mobile-apps/README.md) and consider if it make sense for you to integrate with any of the existings before doing an strong investment.

## Training

### Documentation

* [ArcGIS Runtime SDK for Qt Official Documentation](https://developers.arcgis.com/qt/latest/)
    * Guides: [QML](https://developers.arcgis.com/qt/latest/qml/guide/arcgis-runtime-sdk-for-qt.htm) & [C++](https://developers.arcgis.com/qt/latest/cpp/guide/arcgis-runtime-sdk-for-qt.htm)
    * API Reference: [C++ API Reference](https://developers.arcgis.com/qt/latest/cpp/api-reference/), [QML API Reference](https://developers.arcgis.com/qt/latest/qml/api-reference/), [Toolkit](https://developers.arcgis.com/qt/latest/toolkit/api-reference/) & [QML Extras](https://developers.arcgis.com/qt/latest/extras/api-reference/)

Important concepts:

* Mobile map package - [QML](https://developers.arcgis.com/qt/latest/qml/guide/display-a-map.htm#ESRI_SECTION2_4CCB74E11EE04611849F3C0F41D9381C) & [C++](https://developers.arcgis.com/qt/latest/cpp/guide/display-a-map.htm#ESRI_SECTION2_4CCB74E11EE04611849F3C0F41D9381C): is a file object (.mmpk) created in ArcGIS Pro. It is a transport mechanism for maps, their layers, data, networks, and locators. A mobile map package can be sideloaded onto a device by email, or by platform-specific transfer mechanism, or it can be downloaded from a portal to the device. It available for applications developed using ArcGIS Runtime SDK starting with version 100.0.

### Tutorials

Less than 20 minutes tutorials: [Qt DevLabs](https://developers.arcgis.com/labs/browse/?topic=any&product=Qt)


### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=qt#?sortby=recent) you will find and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=ios) you will find many technical talks.


|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime: Building Cross-platform Apps](https://www.youtube.com/watch?v=XLT1PjZgbAQ)|  59min 08secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[QML Cross-platform Apps - Design Patterns](https://www.youtube.com/watch?v=epYiF86MTJ8)|33min 51secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime SDK for Qt: Building Apps](https://www.youtube.com/watch?v=_vWr1J8RPhE)|54min 39secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[QML & Javascript: No Browser Required](https://www.youtube.com/watch?v=T3pvIBCAzQU)|28min 32secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Building Native Apps that Target Multiple Platforms](https://www.esri.com/videos/watch?videoid=5062&channelid=LegacyVideo&isLegacy=true&title=building-native-apps-that-target-multiple-platforms)|50min 3secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[QML and JavaScript for Native App Development](https://www.esri.com/videos/watch?videoid=5053&channelid=LegacyVideo&isLegacy=true&title=qml-and-javascript-for-native-app-development)|1h 1min 10secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[C++ Unchained: Extending the QML API for ArcGIS Runtime for Qt](https://www.esri.com/videos/watch?videoid=4542&channelid=LegacyVideo&isLegacy=true&title=c++-unchained:-extending-the-qml-api-for-arcgis-runtime-for-qt)|30min 42secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Runtime SDK for Qt: Hit the Ground Running](https://www.esri.com/videos/watch?videoid=4477&channelid=LegacyVideo&isLegacy=true&title=arcgis-runtime-sdk-for-qt:-hit-the-ground-running)|1h 2min 40secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[Real-world Native App Design Using Qt/QML](https://www.esri.com/videos/watch?videoid=4478&channelid=LegacyVideo&isLegacy=true&title=real-world-native-app-design-using-qt/qml)|56min 43secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[Building Native Apps that Target Multiple Platforms](https://www.esri.com/videos/watch?videoid=4311&channelid=LegacyVideo&isLegacy=true&title=building-native-apps-that-target-multiple-platforms)|1h 1min 28secs
|[DevSummit](http://www.esri.com/events/devsummit) 2014|[Building a Slick App Using Qt](https://www.esri.com/videos/watch?videoid=3324&channelid=LegacyVideo&isLegacy=true&title=building-a-slick-app-using-qt)|24min 38secs
|[DevSummit](http://www.esri.com/events/devsummit) 2014|[Using Python with ArcGIS Runtime Desktop SDKs](https://www.esri.com/videos/watch?videoid=3337&channelid=LegacyVideo&isLegacy=true&title=using-python-with-arcgis-runtime-desktop-sdks)|26min 10secs
|[DevSummit](http://www.esri.com/events/devsummit) 2014|[Getting Started with ArcGIS Runtime SDK for Qt](https://www.esri.com/videos/watch?videoid=3379&channelid=LegacyVideo&isLegacy=true&title=getting-started-with-arcgis-runtime-sdk-for-qt)|1h 12min 47secs
|[DevSummit](http://www.esri.com/events/devsummit) 2014|[Building Qt Apps with ArcGIS Runtime SDK](https://www.esri.com/videos/watch?videoid=3395&channelid=LegacyVideo&isLegacy=true&title=building-qt-apps-with-arcgis-runtime-sdk)| 1h 1min 20secs|


> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw), [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+Qt) or check on [geonet](https://community.esri.com/content?query=Qt&filterID=all~objecttype~objecttype%5Bdocument%5D).


## Download the Runtime SDK for Qt

You need to [sign up](https://developers.arcgis.com/sign-up/) in order to be able
to [download de ArcGIS Runtime SDK for Qt](https://developers.arcgis.com/downloads/).

## Coding

### Code

* Developer Site:
    * [QML Samples](https://developers.arcgis.com/qt/latest/qml/sample-code/sample-qt-main-page.htm)
    * [C++ samples](https://developers.arcgis.com/qt/latest/cpp/sample-code/sample-qt-main-page.htm)
* Github:
    * [developer-support/runtime-qt](https://github.com/Esri/developer-support/tree/master/runtime-qt)
    * [Qt repos on Esri's Github](https://github.com/search?q=org%3AEsri+qt)
        * [Dynamic Situational Awareness Qt](https://github.com/Esri/dynamic-situational-awareness-qt)
* ArcGIS Online:  
    * [Interactive Samples App](http://www.arcgis.com/home/search.html?t=content&q=tags%3AQtSampleViewer&content=all&start=1&sortOrder=desc&sortField=modified)
    * [QML Maps and Charts](http://www.arcgis.com/home/item.html?id=1a423703543f41e0b7c75905f58446cc)
    * [EsriQtTeam items](http://www.arcgis.com/home/search.html?q=owner%3AEsriQtTeam&restrict=false&start=1&sortOrder=desc&sortField=modified)
    * [ArcGISRuntimeSDK items](https://www.arcgis.com/home/search.html?q=owner%3AArcGISRuntimeSDK&restrict=false&start=1&sortOrder=desc&sortField=modified) account
    * [ArcGIS Code Sharing](http://codesharing.arcgis.com/)
* [More: Qt @ ArcGIS Search](https://esri-es.github.io/arcgis-search/?search=Qt+site%3Agithub.com&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page)


### Tools

[ArcGIS Runtime SDK for Qt Toolkit](https://github.com/Esri/arcgis-runtime-toolkit-qt)

## Awesome projects & cool demos

[ArcGIS Runtime SDK for Qt Demo at 2018 DevSummit Plenary](https://www.youtube.com/watch?v=G4Qr7_OK5sg&index=25&list=PLaPDDLTCmy4aE-073hhwZQplvJ8MmKZCe)

## Support and Community

If needed, remember you can always check the [Technical Support Website for developer products](https://support.esri.com/en/Products/Developers) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.

**Community channels:**

* GeoNet
    * [Developers](https://community.esri.com/community/developers) > [Native App Developers](https://community.esri.com/community/developers/native-app-developers) > [ArcGIS Runtime SDK for Qt](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-qt)
        * [ArcGIS Runtime SDK for Qt answered questions](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-qt/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* [StackExchange](https://gis.stackexchange.com/search?q=Qt)
* Sometimes is worth to combine GeoNet with the Github issues of an specific repo

If you have an idea you can also share it on [ArcGIS Ideas -> ArcGIS Runtime](https://community.esri.com/community/arcgis-ideas/content?filterID=contentstatus%5Bpublished%5D~category%5Barcgis-runtime%5D&query=qt)

### People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=Qt):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=Qt)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

* [News tagged as "Qt" at blogs.esri.com](https://blogs.esri.com/esri/arcgis/tag/Qt/)
* ["Qt" at esri.com search engine](https://www.esri.com/search?filter=Blogs&q=Qt&search=Search)
* [Blog Posts about "Qt" inside Places at GeoNet](https://community.esri.com/content?query=Qt&filterID=all~objecttype~objecttype%5Bblogpost%5D)
* Twitter accounts:
    * [@ArcGISRuntime](https://twitter.com/arcgisruntime)
    * [@EsriGeoDev](https://twitter.com/EsriGeoDev)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["Qt"](https://esri-es.github.io/arcgis-search/?search=Qt&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

## Awesome lists for Qt
You will find a lot of interesting resources to learn an improve your skills
with Qt:
* [Curated list of awesome lists](https://github.com/sindresorhus/awesome)
