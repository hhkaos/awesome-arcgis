> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Precision agriculture

**Precision agriculture** (**PA**), **satellite farming** or **site specific crop management** (**SSCM**) is a farming management concept based on observing, measuring and responding to inter and intra-field variability in crops. The goal of precision agriculture research is to define a decision support system (DSS) for whole farm management with the goal of optimizing returns on inputs while preserving resources. | *Source:  [wikipedia](https://en.wikipedia.org/wiki/Precision_agriculture)*.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Training](#training)
  - [Videos](#videos)
  - [Slides](#slides)
- [Awesome projects and cool demos](#awesome-projects-and-cool-demos)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)
    - [Spanish](#spanish)
  - [Other related list of resources](#other-related-list-of-resources)
- [Partners and startups](#partners-and-startups)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Precision agriculture help farmers to monitor the health of individual crops in your field and adapt to differences in soil types, sunlight, and slope.

> Read [this storymap](http://agribusiness.maps.arcgis.com/apps/MapJournal/index.html?appid=7190e2a6ee32455b9014d1164e8065b3%20) to learn more about **precision agriculture**.

There are a set of products in the ArcGIS platform you should know when you are doing precision agriculture:

* [ArcGIS Online](../../../../../arcgis/products/arcgis-online/README.md) (for cloud storage and sharing)
    * [Configurable apps]((../../../../../arcgis/products/configurable-apps/README.md) (data visualization)
    * [Web AppBuilder]((../../../../../arcgis/products/web-appbuilder/README.md) (data visualization)
    * [Operations Dashboard](../../../../../arcgis/products/operations-dashboard) (monitoring)
* [Collector](../../../../../arcgis/products/collector-for-arcgis/README.md), [Survey123](../../../../../arcgis/products/survey123/README.md), [Drone2Map](../../../../../arcgis/products/drone2map/README.md),
and [Workforce for ArcGIS](../../../../../arcgis/products/workforce/README.md) ([field work](https://www.esri.com/software/apps/field)).
* [ArcGIS Desktop](../../../../../arcgis/products/arcgis-desktop/README.md), [GeoAnalytics](../../../../../arcgis/products/extensions/geoanalytics-server/README.md) and  [Insights](../../../../../arcgis/products/insights-for-arcgis/README.md) (analysis).
* [GeoEvent](../../../../../arcgis/products/extensions/geoevent-server/README.md) (real time processing)
* [ArcGIS Image Server](../../../../../arcgis/products/arcgis-enterprise/arcgis-server/image-server)
* [ArcGIS Spatial Analyst](../../../../../arcgis/products/extensions/spatial-analyst/README.md)

> Learn more about how ArcGIS allows you to collect, maintain, and analyze all your agriculture field data in one centralized system. It will help to integrate high-resolution imagery, field observations, and real-time data feeds to understand how to make the most of your limited resources | [Learn more about ArcGIS in Agriculture ](https://www.esri.com/en-us/industries/natural-resources/segments/agriculture).

## Training

If you are interested in precision agriculture you should be familiar with [remote sensing](../../../../business-trends/remote-sensing/README.md) and also learn more about:

* [UAVs (drones)](../../../../emerging-technologies/uavs/README.md): and how to create: orthomosaics, point clouds, ...
* [Imagery](../../../../business-trends/data-management/imagery-data/README.md): how to analyse imagery with ArcGIS to: calculate different [vegetation and soils indices](http://pro.arcgis.com/en/pro-app/help/data/imagery/indices-gallery.htm#GUID-B4D8059E-F0F6-4C52-9938-DFDB5AE30B77) ([NDVI](http://pro.arcgis.com/en/pro-app/help/data/imagery/indices-gallery.htm#ESRI_SECTION2_B849D60B7BEB4306BF2BDF670CC9D093), [SAVI](http://pro.arcgis.com/en/pro-app/help/data/imagery/indices-gallery.htm#ESRI_SECTION2_8864A1B6B68B4EECB6E335AFC86957B4), ...), do [binary thresholding](http://pro.arcgis.com/en/pro-app/help/data/imagery/binary-thresholding-function.htm) segmentations, ...
* [IoT](../iot-rt/README.md) & [Big Data](../big-data/README.md): create real time dashboards, run geostatistic models, ...

### Videos

On [*video.esri.com*](https://www.esri.com/videos/search?q=Precision Agriculture#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=Precision Agriculture) you will find many technical talks.

|Title|Length|Event
|---|---|---|
|[Precision Agriculture with GIS imagery by Beck's Hybrids](https://www.youtube.com/watch?v=_3MyyiuPAqE)|11min 36secs|[UC](http://www.esri.com/about/events/uc) 2015

There is also an [Agriculture Youtube playlist](https://www.youtube.com/playlist?list=PLdVnJnpRENTnsQbCwyzHPxVPPRdLp0VJs) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../assets/SavePlaylist.gif)).

|Title|Length|Year
|---|---|---|
|[Imagery in ArcGIS for Agriculture](https://www.youtube.com/watch?v=Aq3AhObnuuA&index=2&list=PLdVnJnpRENTnsQbCwyzHPxVPPRdLp0VJs&t=4s)|1h 4min 49secs|2018
|[Esri Agriculture User Group Webinar](https://www.youtube.com/watch?v=mj_7bppn4Lw&list=PLdVnJnpRENTnsQbCwyzHPxVPPRdLp0VJs&index=1&t=0s)|53min 40secs|2016

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query="TOPIC"), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query="TOPIC"), [EsriTV](https://www.youtube.com/user/esritv/search?query="TOPIC"), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query="TOPIC") [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+"precision+agriculture") or check on [GeoNet](https://community.esri.com/content?query=precision+agriculture&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Awesome projects and cool demos

* [Esca disease of grapevine](http://teamdev.maps.arcgis.com/apps/MapJournal/index.html?appid=c59ce5e000d94109b4f713157fe1532d) - (storymap by [Team Dev](https://teamdev.maps.arcgis.com/home/index.html) , Esri's Partner)
    * [Vigneto di Bodoglie](http://www.arcgis.com/home/webmap/viewer.html?webmap=7abc9ba4f45445908f0aabca9c138287)
    * [Vigneto di Vigneto di Bodoglie - Azoto](http://www.arcgis.com/home/webmap/viewer.html?webmap=426894ee34a649628b589dea99b47583)
    * [Vigneto di Cecanibbi - mal dell'esca](http://www.arcgis.com/home/webmap/viewer.html?webmap=0fa7b1250943424d9621f878b9db1e17)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["Precision agriculture"](https://esri-es.github.io/arcgis-search/?search="Precision agriculture"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).


### Localized resources

#### Spanish

* [Imágenes Satélite en la agricultura: desafíos y utilidad](https://www.youtube.com/watch?v=q6iRZvDVO30)
* [UAM:Uso de Agricultura de Precisión para identificar desórdenes nutricionales en viñedos - CEsri17](https://www.youtube.com/watch?v=5ugr5rBCZRY)
* [ArcGIS y la agricultura ](https://www.youtube.com/watch?v=uyqC_Al3P5s&feature=youtu.be)
* [La Vendimia (Storymap)](http://www.esri.es/galeria/la-vendimia/)
* [Desarrollo rural con ArcGIS](http://www.esri.es/sector/desarrollo-rural/)
* [Bodegas Torres](http://www.esri.es/caso-de-exito/bodegas-torres-gis/) (caso de éxito): utiliza la Plataforma ArcGIS para tomar mejores decisiones en su negocio y proteger la calidad de la uva.

### Other related list of resources

* [EVNI](https://www.harris.com/solution/envi): image analysis software of choice for image scientists, image analysts, and GIS professionals to extract accurate and meaningful information from all kinds of data
* [Choosing a UAV for Agriculture](https://www.youtube.com/watch?v=rCF6dM7wXFU)
* [How are UAVs Advancing Precision Agriculture](https://www.youtube.com/watch?v=HqF8BtGSY20)

## Partners and startups

Organizations with expertise on this topic and also in the ArcGIS Platform.

|Company|Services|Product|Country|
|---|---|---|---|
|[SRM](http://srmconsulting.es)|Drone flights, orthomosaics creation, ...|[Ipsilum](http://srmconsulting.es/en/que-es-ipsilum/)|Spain
|[Beck's Hybrids](https://www.beckshybrids.com/)|n.a.| [FarmServer](https://www.farmserver.com/)|USA
|[TeamDev](https://www.teamdev.it/)|n.a.|n.a.|Italy
|[Cotesa](https://www.grupotecopy.es/es/nosotros/organizacion/cotesa)|n.a.|n.a.|Spain
