> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Big data

Big data is data sets that are so voluminous and complex that traditional data-processing application software are inadequate to deal with them. Big data challenges include capturing data, data storage, data analysis, search, sharing, transfer, visualization, querying, updating, information privacy and data source. | *Source:  [wikipedia](https://en.wikipedia.org/wiki/Big_data)*.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Technology](#technology)
  - [Esri products](#esri-products)
  - [Other tools an projects](#other-tools-an-projects)
- [Training](#training)
  - [Documentation](#documentation)
  - [Videos](#videos)
  - [Slides](#slides)
- [Awesome projects and cool demos](#awesome-projects-and-cool-demos)
- [Support and Community](#support-and-community)
  - [People you should know](#people-you-should-know)
- [News](#news)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)
  - [Other related list of resources](#other-related-list-of-resources)
- [Partners and startups](#partners-and-startups)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

[Big data](https://www.esri.com/en-us/arcgis/big-data/overview) use to be related IoT in the platform, but that's not always the case, that's why we have created a separated page for [ArcGIS and IoT](../../../emerging-technologies/iot-rt/README.md)

Some times it is also related with the management of **vast amounts of images**.

## Technology

Tools and products to work with big datasets.

### Esri products

There are a set of technologies in the ArcGIS platform you might want to know if you are interested in this topic:

* [GeoEvent](../../../arcgis/products/arcgis-enterprise/arcgis-server/geoevent-server/README.md): enables you to work with Real-Time Mapping and Analytics, it connects with: mongdb, hadoop, rabbitmq, activemq, etc.
* [GeoAnalytics](../../../arcgis/products/arcgis-enterprise/arcgis-server/geoanalytics-server/README.md): [perform big data analysis](https://enterprise.arcgis.com/en/portal/latest/use/perform-big-data-analysis.htm)
* [Spatiotemporal Big Data Store](../../../arcgis/products/arcgis-enterprise/data-store/spatiotemporal-big-data-store/README.md): the spatiotemporal big data store enables archival of high volume observation data, sustains high velocity write throughput, and can run across multiple machines (nodes).
* [ArcGIS API for Python](https://developers.arcgis.com/python/guide/working-with-big-data/): the arcgis.geoanalytics module provides submodules, data types, classes and functions to process your big data using an ArcGIS GeoAnalytics Server

### Other tools an projects

* [GIS Tools for Hadoop](http://esri.github.io/gis-tools-for-hadoop/)
* [Spark projects from Mansour Raad](https://github.com/mraad?utf8=%E2%9C%93&tab=repositories&q=spark&type=&language=)
    * [spark-pip](https://github.com/mraad/spark-pip): Spark job to perform massive Point in Polygon (PiP) operations
    * [spark-gdb](https://github.com/mraad/spark-gdb): A library for parsing and querying an Esri File Geodatabase with Apache Spark.
    * [Spark SQL DBF Library](https://github.com/mraad/spark-dbf): Spark SQL DBF Library
    * [SparkProject](https://github.com/mraad/SparkProject): Using Apache Spark in an ArcMap Toolbox
    * [dbscan-spark](https://github.com/mraad/dbscan-spark): DBSCAN implementation using Apache Spark
    * [hdfs-geohex](https://github.com/mraad/hdfs-geohex): (Web)Mapping Elephants with Sparks
    * [Spark, Cassandra, Tessellation and ArcGIS](Spark, Cassandra, Tessellation and ArcGIS](https://github.com/mraad/hex-trips)
    * ...

## Training

* [Get started with big data file shares in GeoAnalytics Server](http://enterprise.arcgis.com/en/server/latest/get-started/windows/what-is-a-big-data-file-share.htm) (ArcGIS Enterprise)
* [GIS Tools for Hadoop for Beginners](https://github.com/Esri/gis-tools-for-hadoop/wiki/GIS-Tools-for-Hadoop-for-Beginners)
* [New Spatial Aggregation Tutorial for GIS Tools for Hadoop](https://www.esri.com/arcgis-blog/products/product/data-management/new-spatial-aggregation-tutorial-for-gis-tools-for-hadoop/)
* [GeoEvent Server input connectors](http://enterprise.arcgis.com/en/geoevent/latest/process-event-data/input-connectors.htm) (Kakfa, RabbitMQ, ActiveMQ, ...)

### Documentation

* [Discover Greater Value from Your Big Data](https://www.esri.com/en-us/arcgis/big-data/overview)
* [Spatiotemporal Big Data Store](https://www.esri.com/training/catalog/599c71907ff0c21b68d07c2d/spatiotemporal-big-data-store/)

### Videos

We have created a [PRODUCT Youtube playlist](https://www.youtube.com/channel/UCtOKtU_kXqz5ZlJ_-OJc_dw/playlists?disable_polymer=1) that we think it might be worth to you to save ([how to save a Youtube Playlist](../../../assets/SavePlaylist.gif)).

On [*video.esri.com*](https://www.esri.com/videos/search?q=PRODUCT#?sortby=recent) and [Esri Events](https://www.youtube.com/channel/UC_yE3TatdZKAXvt_TzGJ6mw/search?query=PRODUCT) you will find many technical talks. Or check [Esri Geodev](https://www.youtube.com/channel/UCgCXcfk5uEraWkpE9wlRwgw) channel for short videos.

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2018|[Real-Time and Big Data GIS: Best Practices](https://www.youtube.com/watch?v=JO2V4JAJ2PI)|57min 31secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Real-Time Data and Big Data GIS at a Massive Scale](https://www.youtube.com/watch?v=uqRV-VUNI0U)|58min 19secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Big Data: Using ArcGIS with Apache Hadoop](https://www.youtube.com/watch?v=lWM_GzxvJkY)|24min 37secs
|[DevSummit](http://www.esri.com/events/devsummit) 2017|[Visualizing Big Data with the ArcGIS API for JavaScript and WebGL](https://www.youtube.com/watch?v=MqM4wzimSjs)|46min 25secs
|[FedGIS](http://www.esri.com/events/federal) 2013| [Big Data in ArcGIS](https://www.youtube.com/watch?v=4SnZTLtw1h4)|5min 17secs

> You might also find interesting videos at [Esri Industries](https://www.youtube.com/channel/UCZTiOg3n0pqUDSatq7mS2PA/search?query="PRODUCT"), [ArcGIS](https://www.youtube.com/channel/UCgGDPs8cte-VLJbgpaK4GPw/search?query="PRODUCT"), [EsriTV](https://www.youtube.com/user/esritv/search?query="PRODUCT"), [Esri R&D Center](https://www.youtube.com/user/esripdx/search?query="PRODUCT") [etc](https://esri-es.github.io/awesome-arcgis/esri/#youtube-channels)

### Slides

More slides in [*proceedings.esri.com*](https://www.google.es/search?q=site%3Aproceedings.esri.com+big+data) or check on [GeoNet](https://community.esri.com/content?query=big+data&filterID=all~objecttype~objecttype%5Bdocument%5D).

## Awesome projects and cool demos

* [Big data > Use cases](https://www.esri.com/en-us/arcgis/big-data/use-cases)

## Support and Community

If needed, remember you can always check the [Technical Support Website for developer products](https://support.esri.com/en/Products/Developers) and the [Technical Support Blog at GeoNet](https://community.esri.com/groups/technical-support/blog/tags#/) to find additional resources.


**Community channels:**

* [Big Data GeoNet Group](https://geonet.esri.com/groups/big-data)
    * [Answered questions](https://community.esri.com/groups/big-data/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D)
* [GIS Tools for Hadoop issues](https://github.com/Esri/gis-tools-for-hadoop/issues)

Is there any category on [ArcGIS Ideas on GeoNet](https://community.esri.com/community/arcgis-ideas) for this topic?

```
Vote/share the ideas about Big Data @ [ArcGIS Ideas on GeoNet](https://community.esri.com/search.jspa?q=Big Data&place=%2Fplaces%2F478947&depth=ALL)
```

### People you should know

Please find the [ArcGIS Experts on this topic using this tool](https://esri-es.github.io/arcgis-experts/?topic=Big Data):

[![ArcGIS Experts Tool Screenshot](https://github.com/esri-es/arcgis-experts/blob/master/assets/imgs/arcgis-experts-tool.png?raw=true)](https://esri-es.github.io/arcgis-experts/?topic=Big Data)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

You can also explore the experts in the [Awesome ArcGIS organization in ArcGIS Online](https://awesome-arcgis.maps.arcgis.com/home/group.html?id=f3807dde35134fb5b5f0cdc9b1b506f0&start=1&view=list#content).

## News

* [An Introduction to Big Data](https://www.esri.com/arcgis-blog/products/product/data-management/an-introduction-to-big-data/) (by Esri)
* [Big Data at esri.com search engine](https://www.esri.com/en-us/search#/?q=big+data&v=0&tab=Explore&page=1)
* [Blog Posts about Big Data inside Places at GeoNet](https://community.esri.com/content?query=big+data&filterID=all~objecttype~objecttype%5Bblogpost%5D)

## Additional resources

Probably not all the resources are in this list, please use the [ArcGIS Search](https://esri-es.github.io/arcgis-search/) tool looking for: ["big data"](https://esri-es.github.io/arcgis-search/?search="big data"&utm_campaign=awesome-list&utm_source=awesome-list&utm_medium=page).

### Localized resources

* [Cómo adoptar una estrategia de éxito en Big Data y Artificial Intelligence con AWS - CEsri17](https://www.youtube.com/watch?v=DiQWviULaXg&feature=youtu.be)

### Other related list of resources

* Performance:
    * [ArcGIS performance](../../../../arcgis/best-practices/performance/README.md)
    * Learn more about how the ArcGIS API for Javascript is using WebGL, the GPU, WebAssembly, HTTP2, Protocol Buffers (pbfs), a client side geometry engine, etc. to deliver a high performance experience | [JSAPI performance](../../../../arcgis/developers/profiles/front-end/best-practices/performance/README.md)
    * [ArcGIS and High Performance Computing (HPC)](https://community.esri.com/community/education/blog/2017/09/13/arcgis-and-high-performance-computing-hpc)
* Other trends:
    * [Artificial intelligence](../../../emerging-technologies/artificial-intelligence/README.md)

## Partners and startups

Organizations and the type of relation with this product:

|Company|Relation type|Country|
|---|---|---|
|[Safegraph](../../../partners/program-members/safegraph/README.md)|Startup|United states

*Is there any partner or startup you can had with expertise with this product?, learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions)*

## Contributions

Feel free to improve/extend this resource page using [this template](https://github.com/hhkaos/awesome-arcgis/blob/master/templates/PRODUCT_PAGE_TEMPLATE.md) ([Contribution Guide](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md)).
