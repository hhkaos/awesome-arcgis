> **Note**: this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# ArcGIS Pro

[ArcGIS Pro](http://pro.arcgis.com/en/pro-app/) is a Desktop tool that allows you to create, manage, and share geographic maps, data, and analytical models.

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
- [Code](#code)
- [Awesome projects](#awesome-projects)
- [Support and Community](#support-and-community)
- [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)
    - [Spanish](#spanish)
  - [Other related list of resources](#other-related-list-of-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

You can extend ArcGIS Pro with ArcGIS Pro SDK for .NET and leverage [geoprocessing tools](http://pro.arcgis.com/en/pro-app/help/analysis/geoprocessing/basics/what-is-geoprocessing-.htm).
ArcGIS Pro SDK for .NET is based on the add-in and configurations extensibility
pattern. Leverage modern .NET features and patterns such as Task Asynchronous
Programming (TAP), LINQ, WPF Binding, and MVVM to write integrated 2D/3D add-ins
using Pro’s new APIs.

## Training

### Documentation

* [ArcGIS Pro Official User Documentation](http://pro.arcgis.com/en/pro-app/)

* [ArcGIS Pro for Developers Training resources](www.esri.com/training/Bookmark/F3KJ7DXDA)

* iGeometry from [Hussein Nasser](https://www.linkedin.com/in/hnaser/)
    * [Getting Started with ArcGIS Pro 2.x - Youtube playlist](https://www.youtube.com/playlist?list=PLQnljOFTspQVJVUe9tdnwByPl8CkzOSi6)
    * [Podcast](https://open.spotify.com/show/55pPBm0l75K28dIqoHIQIc)

* .NET developers:
  * [ArcGIS Pro SDK for Microsoft .NET](https://pro.arcgis.com/en/pro-app/sdk/)
  * [ArcGIS Pro API reference](https://pro.arcgis.com/en/pro-app/sdk/api-reference/)
  * [SDK Documentation Wiki](https://github.com/esri/arcgis-pro-sdk/wiki)

* Python developers:
  * [ArcGIS Pro Python Reference](https://pro.arcgis.com/en/pro-app/arcpy/main/arcgis-pro-arcpy-reference.htm) (ArcPy)
  * [Automate powerful geoprocessing tasks with ArcPy](http://pro.arcgis.com/en/pro-app/arcpy/get-started/what-is-arcpy-.htm)
  * [A quick tour of creating tools with Python](https://pro.arcgis.com/en/pro-app/arcpy/geoprocessing_and_python/a-quick-tour-of-creating-tools-in-python.htm)

### Tutorials

* For GIS Users: [ArcGIS Pro guided lessons based on real-world problems (learn.arcgis.com)](https://learn.arcgis.com/en/)
* For Developers: [ArcGIS Pro SDK 15 minutes tutorials (DevLabs)](https://developers.arcgis.com/labs/browse/?topic=any&product=Pro-SDK)
 [learn.arcgis.com](https://learn.arcgis.com/en/)

### Videos

We have created an [ArcGIS Pro SDK Youtube playlist](https://www.youtube.com/playlist?list=PLahIW2YFPQd4kQNyzn8yobM3DTUSdZcEN) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../../assets/SavePlaylist.gif)).

On [*video.esri.com*](http://www.esri.com/videos/search?q=%22arcgis%20pro%22#?channels=esri,Events,ArcGIS,Industries,ArcGIS,esri&sortby=recent) and [Esri Events](hhttps://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=%22ArcGIS+Pro%22) you will find many technical talks.

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2018|[ArcGIS Pro & Utility Networks](https://www.youtube.com/watch?v=uC1Yt3-qcY8)|5min 57secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Pro SDK for .NET: UI Design for Accessibility and High DPI](https://www.youtube.com/watch?v=AgzPAsPFiBA&list=PLaPDDLTCmy4Z844nQ0aFdRCTICoNDPf7E&index=52)|53min 48secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Pro SDK for .NET: UI Design and MVVM](https://www.youtube.com/watch?v=5PgaeZycWXc&list=PLaPDDLTCmy4Z844nQ0aFdRCTICoNDPf7E&index=53)|1h 1min 18secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Python: Map Automation in ArcGIS Pro](https://www.youtube.com/watch?v=evRKO70L_g8&list=PLaPDDLTCmy4Z844nQ0aFdRCTICoNDPf7E&index=88)|49min 43secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[ArcGIS Pro SDK for .NET: Map Authoring and Exploration](https://www.youtube.com/watch?v=mgIqopFMcBI&list=PLaPDDLTCmy4Z844nQ0aFdRCTICoNDPf7E&index=92)|59min 8secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[ArcGIS Pro SDK for .NET: Programming Patterns](http://www.esri.com/videos/watch?videoid=5035&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro-sdk-for-.net:-programming-patterns)|58min 51secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[ArcGIS Pro SDK for .NET: UI Design and MVVM](http://www.esri.com/videos/watch?videoid=5037&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro-sdk-for-.net:-ui-design-and-mvvm)|1h 01min 56secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[ArcGIS Pro SDK for .NET: Editing and GDB Integration](http://www.esri.com/videos/watch?videoid=5038&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro-sdk-for-.net:-editing-and-gdb-integration)|42min 04secs
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[ArcGIS Pro SDK for .NET: Integration with ArcGIS Online](http://www.esri.com/videos/watch?videoid=5036&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro-sdk-for-.net:-integration-with-arcgis-online)|1h 04min 16secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Pro: Map Automation with Python](http://www.esri.com/videos/watch?videoid=4454&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro:-map-automation-with-python)|1h 01min 09secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Pro SDK for .NET: Introduction, Samples, and How to Contribute](http://www.esri.com/videos/watch?videoid=4289&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro-sdk-for-.net:-introduction,-samples,-and-how-to-contribute)|47min 22secs
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[ArcGIS Pro SDK for .NET: Advanced Programming, Tool Concepts, Map Visualizations, Editing](http://www.esri.com/videos/watch?videoid=4295&channelid=LegacyVideo&isLegacy=true&title=arcgis-pro-sdk-for-.net:-advanced-programming,-tool-concepts,-map-visualizations,-editing)| 1h 03min 19secs
|[User Conference](http://www.esri.com/about/events/uc) 2015|[Introduction to Tasks in ArcGIS Pro](http://www.esri.com/videos/watch?videoid=4719&channelid=LegacyVideo&isLegacy=true&title=introduction-to-tasks-in-arcgis-pro)| 57min 11secs

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw), [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+"ArcGIS Pro") or check on [geonet](https://community.esri.com/content?query="ArcGIS Pro"&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Get the tool

You can get an [ArcGIS Online Organization Account](../../../account-types/README.md) (21-Day trial) to test ArcGIS Pro, and you can get a [Builder Plan](https://developers.arcgis.com/pricing/) if for development purposes. After that you will be able to [download the ArcGIS Pro SDK from my.esri.com](http://links.esri.com/pro/download/current).

If you are part of the [Esri Startup Program](../../../../esri/partners/programs/startup-program/README.md) you will also get access to it.

## Code

Github:
  * [arcgis-pro-sdk-community-samples](https://github.com/esri/arcgis-pro-sdk-community-samples)
  * [developer-support/pro-sdk/FolderConnectionManager](https://github.com/Esri/developer-support/tree/master/pro-sdk/FolderConnectionManager), [Github repositories](https://hhkaos.github.io/awesome-arcgis/esri/#github-accounts)
  * [arcgis-pro-sdk-cim-viewer](https://github.com/Esri/arcgis-pro-sdk-cim-viewer)
  * [Addin for ArcMap and Pro for convenient coordinate conversion in Desktop.](https://github.com/Esri/coordinate-conversion-addin-dotnet)

ArcGIS Online:
  * [More at: codesharing.arcgis.com](http://codesharing.arcgis.com/)
  * [ArcGISRuntimeSDK](https://www.arcgis.com/home/search.html?q=owner%3AArcGISRuntimeSDK&restrict=false&start=1&sortOrder=desc&sortField=modified) account

[More at ArcGIS Search](https://esri-es.github.io/arcgis-search/?search="ArcGIS Pro"+site%3Agithub.com&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page)

## Awesome projects

[ArcGIS Pro SDK Configurations Demo DevSummit 2017](https://youtu.be/u17Nt-4d_04?t=6m34s)

## Support and Community

If needed, remember you can always check the [Technical Support Website for developer products](https://support.esri.com/en/Products/Developers) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.


**Community channels:**

* [ArcGIS Pro SDK Group on GeoNet](https://community.esri.com/groups/arcgis-pro-sdk) & [Answered questions](https://community.esri.com/groups/arcgis-pro-sdk/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* [GIS Developers - Python](https://community.esri.com/community/developers/gis-developers/python) & [Answered questions](https://community.esri.com/community/developers/gis-developers/python/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* [StackExchange](https://gis.stackexchange.com/questions/tagged/arcgis-pro)
* Sometimes is worth to combine GeoNet with the Github issues of an specific repo

If you have any idea to enhance ArcGIS Pro you can share it on ArcGIS Ideas on GeoNet: [Runtime ideas](https://community.esri.com/community/arcgis-ideas/content?filterID=contentstatus%5Bpublished%5D~category%5Barcgis-runtime%5D) and [ArcGIS Desktop ideas](https://community.esri.com/community/arcgis-ideas/content?filterID=contentstatus%5Bpublished%5D~category%5Barcgis-desktop%5D).

## People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=ArcGIS%20Pro%20SDK):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=ArcGIS%20Pro%20SDK)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News

* [ArcGIS Pro SDK Sessions Available from Dev Summit 2018](https://www.esri.com/arcgis-blog/products/arcgis-pro-net/announcements/arcgis-pro-sdk-sessions-available-from-dev-summit-2018/)

Find more news at:

* [Blogs.esri.com tag "ArcGIS Pro SDK"](https://blogs.esri.com/esri/arcgis/tag/arcgis-pro-sdk/)
* [ArcGIS Pro Twitter account](https://twitter.com/arcgispro)
* ["ArcGIS Pro SDK" at esri.com search engine](https://www.esri.com/search?filter=Blogs&q=ArcGIS Pro SDK&search=Search)
* [Blog Posts about "ArcGIS Pro SDK" inside Places at GeoNet](https://community.esri.com/content?query=ArcGIS Pro SDK&filterID=all~objecttype~objecttype%5Bblogpost%5D)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["ArcGIS Pro SDK"](https://esri-es.github.io/arcgis-search/?amp%3Butm_source=opensearch&search=%22ArcGIS+Pro+SDK%22).

### Localized resources

#### Spanish

* [Página de producto de ArcGIS Pro](http://www.esri.es/producto/arcgis-pro/)
* [Licenciamiento para developers](https://github.com/esri-es/licenciamiento-developers)


### Other related list of resources

* [Using ArcGIS Pro to Create a Hexbin Grid and Reshape Polygon Data](http://ryanruthart.com/using-arcgis-pro-to-create-a-hexbin-grid-and-reshape-polygon-data/)
