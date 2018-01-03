> Please [feel free to help us](#contributions) to improve this page.

# ArcGIS Pro
[ArcGIS Pro](http://pro.arcgis.com/en/pro-app/) is a Desktop tool that allows you
to create, manage, and share geographic maps, data, and analytical models.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Documentation](#documentation)
  - [Videos](#videos)
- [Code](#code)
- [Download the SDK](#download-the-sdk)
- [Community](#community)
- [People you should know](#people-you-should-know)
- [News](#news)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
You can extend ArcGIS Pro with ArcGIS Pro SDK for .NET and leverage [geoprocessing tools](http://pro.arcgis.com/en/pro-app/help/analysis/geoprocessing/basics/what-is-geoprocessing-.htm).
ArcGIS Pro SDK for .NET is based on the add-in and configurations extensibility
pattern. Leverage modern .NET features and patterns such as Task Asynchronous
Programming (TAP), LINQ, WPF Binding, and MVVM to write integrated 2D/3D add-ins
using Pro’s new APIs.

## Training

### Documentation

* .NET developers:
  * [ArcGIS Pro API reference](https://pro.arcgis.com/en/pro-app/sdk/api-reference/)
  * [SDK Documentation Wiki](https://github.com/esri/arcgis-pro-sdk/wiki)
* Python developers:
  * [Automate powerful geoprocessing tasks with ArcPy](http://pro.arcgis.com/en/pro-app/arcpy/get-started/what-is-arcpy-.htm)
  * [A quick tour of creating tools with Python](https://pro.arcgis.com/en/pro-app/arcpy/geoprocessing_and_python/a-quick-tour-of-creating-tools-in-python.htm)
  * [ArcGIS Pro ArcPy Reference](http://pro.arcgis.com/en/pro-app/arcpy/main/arcgis-pro-arcpy-reference.htm)
* Other interesting documentation:
  * [Using ArcGIS Pro to Create a Hexbin Grid and Reshape Polygon Data](http://ryanruthart.com/using-arcgis-pro-to-create-a-hexbin-grid-and-reshape-polygon-data/)

### Videos
On **video.esri.com** there are [more than 234 videos related to ArcGIS Pro](http://www.esri.com/videos/search?q=%22arcgis%20pro%22#?sortby=relevance&channels=esri,Events,ArcGIS,Industries,ArcGIS,esri). You can also find it slides at [**proceedings.esri.com**](https://www.google.es/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=arcgis+pro+site:proceedings.esri.com).

|Event|Title|Length|
|---|---|---|
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
|[User Conference](http://www.esri.com/events/user-conference) 2015|[Introduction to Tasks in ArcGIS Pro](http://www.esri.com/videos/watch?videoid=4719&channelid=LegacyVideo&isLegacy=true&title=introduction-to-tasks-in-arcgis-pro)| 57min 11secs


## Code

* [Community samples at arcgis-pro-sdk-community-samples repo](https://github.com/esri/arcgis-pro-sdk-community-samples)
* [More community samples at developer-support repo](https://github.com/Esri/developer-support/tree/master/pro-sdk)
* [More at: codesharing.arcgis.com](http://codesharing.arcgis.com/)
* [Repo: arcgis-pro-sdk-cim-viewer](https://github.com/Esri/arcgis-pro-sdk-cim-viewer)
* [Addin for ArcMap and Pro for convenient coordinate conversion in Desktop.](https://github.com/Esri/coordinate-conversion-addin-dotnet)

## Download the SDK

You need to [sign up](https://developers.arcgis.com/sign-up/) in order to be able
to [download de ArcGIS Pro SDK for .NET](https://developers.arcgis.com/downloads/).

## Community
* [ArcGIS Pro SDK Group on GeoNet](https://geonet.esri.com/groups/arcgis-pro-sdk)
* [Developer spaces, groups, etc on GeoNet](https://geonet.esri.com/community/developers)
* [GIS Developers - Python](https://geonet.esri.com/community/developers/gis-developers/python)

## People you should know
Please find the ArcGIS Experts on this topic here: [https://esri-es.github.io/arcgis-experts/?topic=ArcGIS%20Pro](https://esri-es.github.io/arcgis-experts/?topic=ArcGIS%20Pro)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## News
[Blogs.esri.com tag "ArcGIS Pro SDK"](https://blogs.esri.com/esri/arcgis/tag/arcgis-pro-sdk/)

## Contributions
Please **feel free to help us** to improve this list:

* [Doing a pull request / opening an issue](https://github.com/hhkaos/awesome-arcgis#contributions)
* Or writing a comment:
  * If you find a broken link
  * Or if we are missing a nice resource.
