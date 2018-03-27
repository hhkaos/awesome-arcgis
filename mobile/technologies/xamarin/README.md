> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Xamarin developers

If you are willing to write mobile applications using .NET you are in the right place, the ArcGIS Runtime SDK for .NET contains APIs Xamarin.Android, Xamarin.iOS, and Xamarin.Forms that enable you to build mobile native mapping apps.

It integrates a range of mapping and GIS capabilities online or offline, including 2D and 3D data visualization, web and mobile maps, editing, geocoding, routing, and spatial analysis. Use this site to access installation details, documentation, and sample code.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Documentation](#documentation)
  - [Tutorials](#tutorials)
  - [Videos](#videos)
  - [Slides](#slides)
- [Download the Runtime SDK for Xamarin](#download-the-runtime-sdk-for-xamarin)
- [Coding](#coding)
  - [Code](#code)
  - [Tools](#tools)
- [Awesome projects & cool demos](#awesome-projects--cool-demos)
- [Community and support](#community-and-support)
  - [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)
- [Awesome lists for Xamarin](#awesome-lists-for-xamarin)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

The [ArcGIS Runtime SDK for .NET](https://developers.arcgis.com/net/latest/) is the technology you may want to use if you want to build your Android and iOS applications in .NET.

You can also use the [ArcGIS Runtime SDK for Qt](../qt/README.md) to build cross mobile applications (Android & iOS) using C++ & QML.

As last resource, you may even consider to make an application or prototype as fast as possible (without writing any code), in this case you should also consider using some of [our app builders, like AppStudio or Survey123](../../../arcgis/products/README.md#app-builders).

And remember, before reinventing the wheel [check the existing Esri mobile apps](../../../arcgis/mobile-apps/README.md) and consider if it make sense for you to integrate with any of the existings before doing an strong investment.

## Training

### Documentation

* [ArcGIS Runtime SDK for .NET Official Documentation](https://developers.arcgis.com/net/latest/)
* [Official training](www.esri.com/training/Bookmark/PKEDPSDGS)

ArcGIS Runtime SDK for .NET provides a common API surface across all supported. This allows you to reuse code and to leverage design patterns such as Model View ViewModel (MVVM). Xamarin Forms provides an excellent framework for cross-platform code sharing, and each API reference includes classes specific to Xamarin Forms. There are some differences between APIs, primarily the inheritance hierarchy for objects built for different platforms.


|API|Guide|API Reference|
|---|---|---|
|Windows Presentation Framework|[WPF Guide](https://developers.arcgis.com/net/latest/wpf/guide/guide-home.htm)|[WPF reference](https://developers.arcgis.com/net/latest/wpf/api-reference/)
|Universal Windows Platform|[UWP Guide](https://developers.arcgis.com/net/latest/uwp/guide/guide-home.htm)|[UWP reference](https://developers.arcgis.com/net/latest/uwp/api-reference/)
|Xamarin Android|[Android Guide](https://developers.arcgis.com/net/latest/android/guide/guide-home.htm)|[Android reference](https://developers.arcgis.com/net/latest/android/api-reference/)
|Xamarin iOS|[iOS Guide](https://developers.arcgis.com/net/latest/ios/guide/guide-home.htm)|[iOS reference](https://developers.arcgis.com/net/latest/ios/api-reference/)
|Forms|[Forms guide](https://developers.arcgis.com/net/latest/forms/guide/guide-home.htm)| ---


Important concepts:

* Mobile map package - [Android](https://developers.arcgis.com/net/latest/android/guide/display-a-map.htm#ESRI_SECTION2_4CCB74E11EE04611849F3C0F41D9381C), [iOS](https://developers.arcgis.com/net/latest/ios/guide/display-a-map.htm#ESRI_SECTION2_4CCB74E11EE04611849F3C0F41D9381C) & [Forms](https://developers.arcgis.com/net/latest/forms/guide/display-a-map.htm#ESRI_SECTION2_4CCB74E11EE04611849F3C0F41D9381C): is a file object (.mmpk) created in ArcGIS Pro. It is a transport mechanism for maps, their layers, data, networks, and locators. A mobile map package can be sideloaded onto a device by email, or by platform-specific transfer mechanism, or it can be downloaded from a portal to the device. It available for applications developed using ArcGIS Runtime SDK starting with version 100.0.

### Tutorials

Less than 20 minutes tutorials: [.NET DevLabs](https://developers.arcgis.com/laxbs/browse/?topic=any&product=NET)

### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=xamarin#?sortby=recent) you will find and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=xamarin) you will find many technical talks.


|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime: Building Cross-platform Apps](https://www.youtube.com/watch?v=XLT1PjZgbAQ)|  59min 08secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Building Xamarin Apps with ArcGIS Runtime SDK for .NET](https://www.youtube.com/watch?v=TyLZ4iYoQNo)| 1h 7min 52secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Where's my Meeting? Indoor Routing and Tracking with Xamarin iOS](https://www.youtube.com/watch?v=ZLN8spxSVDg)|26min 1secs
|[UC](http://www.esri.com/events/uc) 2016|[ArcGIS Runtime SDK for Xamarin: An Introduction](https://www.youtube.com/watch?v=IDPnUZgAK5w)|1h 13min 43secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Getting Started with ArcGIS Runtime SDK for Xamarin](https://www.esri.com/videos/watch?videoid=5054&channelid=LegacyVideo&isLegacy=true&title=getting-started-with-arcgis-runtime-sdk-for-xamarin)|1h 4min 57secs
|n.a. 2015|[New CrossPlatform App (ArcGIS Runtime, C#, Xamarin, MVVM)](https://www.esri.com/videos/watch?videoid=4534&channelid=LegacyVideo&isLegacy=true&title=new-crossplatform-app-\(arcgis-runtime,-c#,-xamarin,-mvvm\))|25min 38secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[Preview of ArcGIS Runtime and Xamarin](https://www.esri.com/videos/watch?videoid=4466&channelid=LegacyVideo&isLegacy=true&title=preview-of-arcgis-runtime-and-xamarin)|53min 3secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Runtime for Xamarin](https://www.esri.com/videos/watch?videoid=4226&channelid=LegacyVideo&isLegacy=true&title=arcgis-runtime-for-xamarin)|6min 40secs

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw), [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+xamarin) or check on [geonet](https://community.esri.com/content?query=xamarin&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Download the Runtime SDK for Xamarin

You can [download it using NuGet](https://developers.arcgis.com/net/latest/wpf/guide/install-the-sdk.htm#ESRI_SECTION1_BA40EF70B43B4F789B33C2CAA2053873) or from your [Download section](https://developers.arcgis.com/downloads/) using you [free ArcGIS Developer account](https://developers.arcgis.com/sign-up).

## Coding

### Code

* Developer site:
    * [Documentation code samples code](https://developers.arcgis.com/net/latest/wpf/sample-code/sample-code.htm)
    * Example app: [Indoor Routing Xamarin](https://developers.arcgis.com/example-apps/indoor-routing-xamarin/)
* Github:
    * [developer-support/runtime-net](https://github.com/Esri/developer-support/tree/master/runtime-net)
    * [Xamarin repos on Esri's Github](https://github.com/search?utf8=%E2%9C%93&q=org%3AEsri+xamarin&type=)
        * [Swift samples demonstrating various capabilities of ArcGIS Runtime SDK for iOS](https://github.com/Esri/arcgis-runtime-samples-ios)
* ArcGIS Online:
    * [ArcGISRuntimeSDK items](https://www.arcgis.com/home/search.html?q=owner%3AArcGISRuntimeSDK&restrict=false&start=1&sortOrder=desc&sortField=modified)
    * [ArcGIS Code Sharing](http://codesharing.arcgis.com/)
* [More at Xamarin @ ArcGIS Search](https://esri-es.github.io/arcgis-search/?search=xamarin+site%3Agithub.com%20-arcobjects&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page)

> You can also search at any other [Esri's Github accounts](https://hhkaos.github.io/awesome-arcgis/esri/#github-accounts).

### Tools

*None yet*

## Awesome projects & cool demos

DevSummit Plennary Demos:
* [Xamarin indoors - 2017](https://youtu.be/u17Nt-4d_04?t=1m44s)
* [.Net & Xamarin indoors - 2017 Plenary](https://youtu.be/i8FgR_3zumQ?t=35m3s)

## Community and support

If needed, remember you can always check the [Technical Support Website for developer products](https://support.esri.com/en/Products/Developers) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.

**Community channels:**

* GeoNet
    * [Developers](https://community.esri.com/community/developers) > [Native App Developers](https://community.esri.com/community/developers/native-app-developers) > [ArcGIS Runtime SDK for .NET](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-net)
        * [ArcGIS Runtime SDK for .NET answered questions](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-net/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* [Stackoverflow questions: [xamarin] and [arcgis] or [xamarin] and [esri]](https://stackoverflow.com/search?q=%5Bxamarin%5D+and+%5Barcgis%5D+or+%5Bxamarin%5D+and+%5Besri%5D+)
* [Stackexchange](https://gis.stackexchange.com/search?q=xamarin)
* Sometimes is worth to combine GeoNet with the Github issues of an specific repo

If you have an idea you can also share it on [ArcGIS Ideas -> ArcGIS Runtime](https://community.esri.com/community/arcgis-ideas/content?filterID=contentstatus%5Bpublished%5D~category%5Barcgis-runtime%5D&query=xamarin)

### People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=Xamarin):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=Xamarin)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

* [News tagged as "Xamarin" at blogs.esri.com](https://blogs.esri.com/esri/arcgis/tag/xamarin/)
* ["Xamarin" at esri.com search engine](https://www.esri.com/search?filter=Blogs&q=xamarin&search=Search)
* [Blog Posts about "Xamarin" inside Places at GeoNet](https://community.esri.com/content?query=xamarin&filterID=all~objecttype~objecttype%5Bblogpost%5D)
* Twitter accounts:
    * [@ArcGISRuntime](https://twitter.com/arcgisruntime)
    * [@EsriGeoDev](https://twitter.com/EsriGeoDev)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["Xamarin"](https://esri-es.github.io/arcgis-search/?search=xamarin&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

## Awesome lists for Xamarin

You will find a lot of interesting resources to learn an improve your skills
with Xamarin:
* [MarcBruins/awesome-xamarin](https://github.com/MarcBruins/awesome-xamarin): A curated list of awesome Xamarin iOS/Android and Xamarin Forms bindings, ports, frameworks and much more!
* [benoitjadinon/awesome-xamarin](https://github.com/benoitjadinon/awesome-xamarin): A collection of interesting libraries/tools for Xamarin mobile projects
* [jsuarezruiz/xamarin-forms-goodlooking-UI](https://github.com/jsuarezruiz/xamarin-forms-goodlooking-UI): Xamarin.Forms goodlooking UI samples
