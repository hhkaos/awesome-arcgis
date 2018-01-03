> Please [feel free to help us](#contributions) to improve this page.

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
  - [Using feature services](#using-feature-services)
- [People you should know](#people-you-should-know)
- [Contributions](#contributions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
In addition to the [performance best practices on the ArcGIS Platform](../../../arcgis/best-practices/performance/README.md)
we want to show you two ways to improve your performance when talking about web
applications: [Load time](#load-time) or [Drawing features](drawing-features).

## Load time

You should know that there are a web application called "[Web Optimizer](https://developers.arcgis.com/javascript/3/jshelp/inside_web_optimizer.html)"
that generates custom builds of the ArcGIS API for JavaScript. The advantage of
using a custom build is that your application downloads and parses only the
required JavaScript resources which will make your application load faster.

* [arcgis-js-api](https://github.com/Esri/arcgis-js-api): Bower friendly, minified version of the ArcGIS API for JavaScript

* [NPM and ArcGIS API for JavaScript 4.3](https://geonet.esri.com/community/developers/web-developers/arcgis-api-for-javascript/blog/2017/04/13/npm-and-arcgis-api-for-javascript-43)

Grunt? Bower?

### Training
#### Videos / Technical talks

* [Using NPM with ArcGIS API for JavaScript](https://www.youtube.com/watch?v=i0MOsQ8rAjg)

* [Optimizing Your JavaScript App for Performance](http://www.esri.com/videos/watch?videoid=5029&channelid=LegacyVideo&isLegacy=true&title=optimizing-your-javascript-app-for-performance)

* [A Few of Our Favorite Things: node (npm, bower, grunt, grunt-esri-slurp), AMD Butler, generator-dojo-widget, grunt-arcgis-press, Travis CI](http://www.esri.com/videos/watch?videoid=4541&channelid=LegacyVideo&isLegacy=true&title=a-few-of-our-favorite-things)

* [Rocking and Tooling Your GeoDev Environment](http://www.esri.com/videos/watch?videoid=4368&channelid=LegacyVideo&isLegacy=true&title=rocking-and-tooling-your-geodev-environment)

#### Code


---

## Drawing features

Drawing more than 1000 interactive entities.

### Using feature services
If you are trying... [explanation in spanish](https://github.com/esri-es/JavascriptAPI/blob/gh-pages/problems/morethan1000entities/README.md)

## People you should know
Please find the ArcGIS Experts (story tellers and developers) on this topic here: [https://esri-es.github.io/arcgis-experts/?topic=Performance](https://esri-es.github.io/arcgis-experts/?topic=Performance)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.

## Contributions
Please **feel free to help us** to improve this list:

* [Doing a pull request / opening an issue](https://github.com/hhkaos/awesome-arcgis#contributions)
* Or writing a comment:
  * If you find a broken link
  * Or if we are missing a nice resource.
