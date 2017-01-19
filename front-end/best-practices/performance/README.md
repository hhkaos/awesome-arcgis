> **Note**: this page is only a draft, please [feel free to help us](https://github.com/hhkaos/awesome-arcgis#contributions) to finish this page for the awesome list of resources for ArcGIS Developers.

# Performance in web applications
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [Load time](#load-time)
  - [Training](#training)
    - [Videos / Technical talks](#videos--technical-talks)
    - [Code](#code)
- [Drawing features](#drawing-features)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
In addition to the [performance best practices on the ArcGIS Platform](../../../arcgis/best-practices/performance)
we want to show you two ways to improve your performance when talking about web
applications: [Load time](#load-time) or [Drawing features](drawing-features).

## Load time

You should know that there are a web application called "[Web Optimizer](https://developers.arcgis.com/javascript/3/jshelp/inside_web_optimizer.html)"
that generates custom builds of the ArcGIS API for JavaScript. The advantage of
using a custom build is that your application downloads and parses only the
required JavaScript resources which will make your application load faster.

* [arcgis-js-api](https://github.com/Esri/arcgis-js-api): Bower friendly, minified version of the ArcGIS API for JavaScript

Grunt? Bower?

### Training
#### Videos / Technical talks
* [Optimizing Your JavaScript App for Performance](http://www.esri.com/videos/watch?videoid=5029&channelid=LegacyVideo&isLegacy=true&title=optimizing-your-javascript-app-for-performance)

* [A Few of Our Favorite Things](http://www.esri.com/videos/watch?videoid=4541&channelid=LegacyVideo&isLegacy=true&title=a-few-of-our-favorite-things)

* [Rocking and Tooling Your GeoDev Environment](http://www.esri.com/videos/watch?videoid=4368&channelid=LegacyVideo&isLegacy=true&title=rocking-and-tooling-your-geodev-environment)

#### Code


---

## Drawing features

Drawing more than 1000 interactive entities.

###Using feature services
If you are trying... [explanation in spanish](https://github.com/esri-es/JavascriptAPI/blob/gh-pages/problems/morethan1000entities/README.md)

##People you should know
|Name|Linkedin|Github|Twitter|ArcGIS Online|Geonet|
|---|---|---|---|---|---|---|
