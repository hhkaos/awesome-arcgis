> **Note**: this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

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

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

There are some performance aspects that have been introduced in the JavaScript API when using de [ArcGIS API for JavaScript](../../technologies/dojo/README.md):

* [GPU](https://www.youtube.com/watch?v=vYbTavNaTkY&list=PLaPDDLTCmy4Y3e8AkFYr9n-njdf2fAbS4&index=11): ArcGIS API for JavaScript is able to render layer data directly on the GPU.
* [Web GL & HTTP2 & Protocol Buffer & CDNs](https://www.youtube.com/watch?v=ysUlcFlxENc&list=PLaPDDLTCmy4Y3e8AkFYr9n-njdf2fAbS4&index=8): high-performance feature layers (supported natively by WebGL)
* [Dot Density Renderer](https://youtu.be/EtatruR-NBY?t=211) (demos: [Dot Density Legend](https://ekenes.github.io/conferences/ds-2019/plenary/dot-density-legend/) & [Houston Housing growth](https://ekenes.github.io/conferences/ds-2019/plenary/dot-density-housing/))
* [Advanced symbology and rendering on the client-side](https://www.youtube.com/watch?v=9po7pEcgoJs&list=PLaPDDLTCmy4Y3e8AkFYr9n-njdf2fAbS4&index=10)
* [The client-side geometry engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html): for testing, measuring, and analyzing the spatial relationship between two or more 2D geometries.
* [Web assembly](https://www.esri.com/arcgis-blog/products/js-api-arcgis/announcements/arcgis-api-for-javascript-versions-4-7-and-3-24-released/): from versions 4.7 and 3.24 the [client-side projection engine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-projection.html) will only load in browsers that support WebAssembly.

In addition to the [performance best practices on the ArcGIS Platform](../../../arcgis/best-practices/performance/README.md) the performance can be improved as explained here.

## Load time

You should know that there are a web application called "[Web Optimizer](https://developers.arcgis.com/javascript/3/jshelp/inside_web_optimizer.html)"
that generates custom builds of the ArcGIS API for JavaScript. The advantage of
using a custom build is that your application downloads and parses only the
required JavaScript resources which will make your application load faster.

* [arcgis-js-api](https://github.com/Esri/arcgis-js-api): Bower friendly, minified version of the ArcGIS API for JavaScript

* [NPM and ArcGIS API for JavaScript 4.3](https://community.esri.com/community/developers/web-developers/arcgis-api-for-javascript/blog/2017/04/13/npm-and-arcgis-api-for-javascript-43)

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

* [Visualize large feature datasets in 3D with ArcGIS API for JavaScript](https://www.esri.com/arcgis-blog/products/js-api-arcgis/3d-gis/visualize-large-feature-datasets-in-3d-with-arcgis-api-for-javascript/)

Drawing more than 1000 interactive entities.

### Using feature services
If you are trying... [explanation in spanish](https://github.com/esri-es/JavascriptAPI/blob/gh-pages/problems/morethan1000entities/README.md)

## People you should know
Please find the ArcGIS Experts (story tellers and developers) on this topic here: [https://esri-es.github.io/arcgis-experts/?topic=Performance](https://esri-es.github.io/arcgis-experts/?topic=Performance)

They don't work on the support team and some may even not work at Esri,
but they are opening some projects and sharing insights related to this
technology so we recommend you to follow them.
