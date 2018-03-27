> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# iOS Developers

ArcGIS Runtime SDK for iOS integrates a wide range of mapping and GIS capabilities online or offline, including editing, analysis, geocoding, routing, management of web maps, data visualization, mobile map packages, and vector tiled layers.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Documentation](#documentation)
  - [Tutorials](#tutorials)
  - [Videos](#videos)
  - [Slides](#slides)
- [Download the Runtime SDK for iOS](#download-the-runtime-sdk-for-ios)
- [Coding](#coding)
  - [Code](#code)
  - [Tools](#tools)
- [Awesome projects & cool demos](#awesome-projects--cool-demos)
- [Community and support](#community-and-support)
  - [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)
- [Awesome lists for iOS](#awesome-lists-for-ios)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Introduction

The [ArcGIS Runtime SDK for iOS Samples](https://itunes.apple.com/us/app/arcgis-runtime-sdk-for-ios/id1180714771?mt=8) is the technology you may want to use if you want to build your iOS application in Swift or Objective-C. If you are interested on building iOS applications but not necessarily using this language you could also use:

* [ArcGIS Runtime SDK for .NET + Xamarin](../xamarin/README.md), using C# with Xamarin you can build application which runs on Android, iOS and Windows Phones.
* [ArcGIS Runtime SDK for Qt](../qt/README.md): using C++ & QML you can also build application for Android and iOS.

As last resource, you may even consider to make an application or prototype as fast as possible (without writing any code), in this case you should also consider using some of [our app builders, like AppStudio or Survey123](../../../arcgis/products/README.md#app-builders).

And remember, before reinventing the wheel [check the existing Esri mobile apps](../../../arcgis/mobile-apps/README.md) and consider if it make sense for you to integrate with any of the existings before doing an strong investment.

## Training

* [Android Trainings at esri.com/training](https://www.esri.com/training/Bookmark/PKESDGM7A)

### Documentation

* [ArcGIS Runtime SDK for iOS Official Documentation](https://developers.arcgis.com/ios/)
    * [iOS Guide](https://developers.arcgis.com/ios/latest/swift/guide/introduction.htm)
    * [iOS API Reference](https://developers.arcgis.com/ios/latest/api-reference/)

Important concepts:

* Mobile map package - [Swift](https://developers.arcgis.com/ios/latest/swift/guide/create-an-offline-map.htm) & [Objective-C](https://developers.arcgis.com/ios/latest/objective-c/guide/create-an-offline-map.htm): is a file object (.mmpk) created in ArcGIS Pro. It is a transport mechanism for maps, their layers, data, networks, and locators. A mobile map package can be sideloaded onto a device by email, or by platform-specific transfer mechanism, or it can be downloaded from a portal to the device. It available for applications developed using ArcGIS Runtime SDK starting with version 100.0.

### Tutorials

Less than 20 minutes tutorials: [iOS DevLabs](https://developers.arcgis.com/labs/browse/?topic=any&product=iOS)

### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=ios#?sortby=recent) you will find and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=ios) you will find many technical talks.


|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Runtime SDK for iOS and macOS: Building Apps](https://www.youtube.com/watch?v=RQf1fi4mP7g)| 1h 3min 44secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Turbocharge Feature Display On iOS With Popups](https://www.youtube.com/watch?v=aAuqPlSay6c)|  28min 52secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Make Your iOS Apps Come Alive With Map Animations](https://www.youtube.com/watch?v=Do24okMDs7E)|  23min 29secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Building iOS and Mac Apps with the ArcGIS Runtime](https://www.esri.com/videos/watch?videoid=5063&channelid=LegacyVideo&isLegacy=true&title=building-ios-and-mac-apps-with-the-arcgis-runtime)| 1h 0min 26secs|

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw), [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+TOPIC) or check on [geonet](https://community.esri.com/content?query=TOPIC&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Download the Runtime SDK for iOS

You can [download it using CocoaPods](https://developers.arcgis.com/macos/latest/swift/guide/install-and-setup.htm#ESRI_SECTION1_9448ADD25F414BA3BA0319E77C1E8FF8) or from your [Download section](https://developers.arcgis.com/downloads/) using you [free ArcGIS Developer account](https://developers.arcgis.com/sign-up).

## Coding

### Code

* Developer site:
    * [Documentation sample code](https://developers.arcgis.com/ios/latest/swift/sample-code/sample-code.htm)
    * Example apps:
        * [Maps App for iOS](https://developers.arcgis.com/example-apps/maps-app-ios/)
        * [Offline Mapbook for iOS](https://developers.arcgis.com/example-apps/mapbook-ios/)
* Github
    * [developer-support/runtime-ios](https://github.com/Esri/developer-support/tree/master/runtime-ios)
    * [iOS repos on Esri's Github](https://github.com/search?q=org%3AEsri+ios)
        * [Swift samples demonstrating various capabilities of ArcGIS Runtime SDK for iOS](https://github.com/Esri/arcgis-runtime-samples-ios)
* ArcGIS Online:
    * [ArcGISRuntimeSDK items](https://www.arcgis.com/home/search.html?q=owner%3AArcGISRuntimeSDK&restrict=false&start=1&sortOrder=desc&sortField=modified) account
    * [ArcGIS Code Sharing](http://codesharing.arcgis.com/)

* [More: iOS @ ArcGIS Search](https://esri-es.github.io/arcgis-search/?search=iOS+site%3Agithub.com&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page)

> You can also search at any other [Esri's Github accounts](https://hhkaos.github.io/awesome-arcgis/esri/#github-accounts).

### Tools

*None yet*

## Awesome projects & cool demos

[ArcGIS Runtime SDK for iOS Demo at 2017 DevSummit Plenary](https://youtu.be/i8FgR_3zumQ?t=25m21s)

## Community and support

If needed, remember you can always check the [Technical Support Website for developer products](https://support.esri.com/en/Products/Developers) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.

**Community channels:**

* GeoNet
    * [Developers](https://community.esri.com/community/developers) > [Native App Developers](https://community.esri.com/community/developers/native-app-developers) > [ArcGIS Runtime SDK for iOS](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-ios)
        * [ArcGIS Runtime SDK for Android answered questions](https://community.esri.com/community/developers/native-app-developers/arcgis-runtime-sdk-for-ios/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* [Stackoverflow questions: [ios] and [arcgis] or [ios] and [esri]](https://stackoverflow.com/search?q=%5Bios%5D+and+%5Barcgis%5D+or+%5Bios%5D+and+%5Besri%5D+)
* [Stackexchange](https://gis.stackexchange.com/search?q=ios)
* Sometimes is worth to combine GeoNet with the Github issues of an specific repo

If you have an idea you can also share it on [ArcGIS Ideas -> ArcGIS Runtime](https://community.esri.com/community/arcgis-ideas/content?filterID=contentstatus%5Bpublished%5D~category%5Barcgis-runtime%5D&query=ios)

### People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=iOS):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=iOS)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

* [News tagged as "iOS" at blogs.esri.com](https://blogs.esri.com/esri/arcgis/tag/ios/)
    * [iOS Samples for ArcGIS Runtime now available on the App Store](https://blogs.esri.com/esri/arcgis/2017/01/23/arcgis-runtime-sdk-for-ios-samples-now-available-on-the-app-store/)
* ["iOS" at esri.com search engine](https://www.esri.com/search?filter=Blogs&q=ios&search=Search)
* [Blog Posts about "iOS" inside Places at GeoNet](https://community.esri.com/content?query=iOS&filterID=all~objecttype~objecttype%5Bblogpost%5D)
* Twitter accounts:
    * [@ArcGISRuntime](https://twitter.com/arcgisruntime)
    * [@EsriGeoDev](https://twitter.com/EsriGeoDev)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["iOS"](https://esri-es.github.io/arcgis-search/?search="iOS"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

## Awesome lists for iOS
You will find a lot of interesting resources to learn an improve your skills
with iOS:
* [Curated list of awesome lists](https://github.com/sindresorhus/awesome)
