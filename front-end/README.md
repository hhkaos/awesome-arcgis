> **Note**: this page is only a draft, please [feel free to help us](https://github.com/hhkaos/awesome-arcgis#contributions) to finish this page for the awesome list of resources for ArcGIS Developers.

# Front-end developers
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction to ArcGIS API](#introduction-to-arcgis-api)
- [Getting started](#getting-started)
- [Tools](#tools)
- [Cost](#cost)
  - [To start developing](#to-start-developing)
  - [To deploy your app](#to-deploy-your-app)
- [Web mapping history](#web-mapping-history)
- [Awesome list of front-end resources](#awesome-list-of-front-end-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction to ArcGIS API
[ArcGIS Javascript API](dojo) is built in top of [Dojo Toolkit](https://dojotoolkit.org/) because it was the first technology allowing to load dependencies in an asynchronous way (using [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition)) as many other modern libraries are doing today ([JSConfUS 2013: Dojo already did that](https://www.youtube.com/watch?v=BY0-AI1Sxy0)).

Besides that, you can develop your web applications combining ArcGIS JS API with many other technologies.

Learn how to combine the ArcGIS JS API with:
* [AngularJS](angular)
* [Backbone](backbone)
* [Calcite](calcite)
* [Cedar](cedar)
* [Dojo](dojo)
* [Ember](ember)
* [jQuery](jquery)
* [Knockout](knockout)
* [Leaflet](leaflet)
* [Open layers](open-layers)
* [Phonegap](phonegap)
* [Polymer](polymer)
* [React](react)
* [Sencha](sencha)
* [VueJS](vuejs)

## Getting started
There are several talks that may help you understand which framework/library you should use:

|Event|Title|Length|
|---|---|---|
|[DevSummit](http://www.esri.com/events/devsummit) 2016|[Using Frameworks with the ArcGIS API for JavaScript](http://www.esri.com/videos/watch?videoid=4301&channelid=LegacyVideo&isLegacy=true&title=arcgis-online:-configuring-and-extending-web-application-templates)|1h 00min 06secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2015|[Choosing the Best JavaScript Framework for You](http://www.esri.com/videos/watch?videoid=4494&channelid=LegacyVideo&isLegacy=true&title=choosing-the-best-javascript-framework-for-you)|54min 47secs|
|[DevSummit](http://www.esri.com/events/devsummit) 2014|[Working with Frameworks & ArcGIS API](http://www.esri.com/videos/watch?videoid=3334&channelid=LegacyVideo&isLegacy=true&title=working-with-javascript-app-frameworks-&-arcgis-api-for-javascript)|54min 23secs|


## Tools
* Webpack | [Using the ArcGIS API for JavaScript in Applications built with webpack
](http://tomwayson.com/2016/11/27/using-the-arcgis-api-for-javascript-in-applications-built-with-webpack/)

* [esri-webpack-babel](https://github.com/tomwayson/esri-webpack-babel): A bare bones example showing how to use the ArcGIS API for JavaScript in an application built with webpack and Babel to compile ES2015 modules.

* [esri-rollup-example](https://github.com/tomwayson/esri-rollup-example): Example application using Rollup to bundle local ES2015 modules that use CDN hosted modules from the ArcGIS API for JavaScript

* [SystemJS Module Loader](https://github.com/systemjs/systemjs) -> only for angular?

* typescript - [TypeScript in visual studio](http://odoe.net/blog/typescript-visual-studio-code/)

* Grunt

* BabelJS

* [Resources for the ArcGIS API for JavaScript](https://github.com/odoe/esrijs-resources)

## Cost
### To start developing
There is no technical restrictions that avoid you to start building web applications without signing up, but in order to be able to take the advantage of using custom vector maps, store geolocated data, use webmaps, use the [smart-mapping](arcgis/smart-mapping) tools, use some ready to use services, etc we recommend you to sign up for an account.

### To deploy your app
If you are going to use ArcGIS Online: basemaps, draw graphics, use web maps, ... you can deploy your app for free, but if you are going to store data, perform analysis, ¿use services which consume credits?, etc ... you will need a
paid plan at the time of deploying you app. (view deployment plan details)

If you already have ArcGIS Enterprise or you are building an app for a company
which already have it ....

## Web mapping history
[![Web Mapping History](https://docs.google.com/drawings/d/1scUDSXWfFT-4dQXpxveOJSdcQrU_pg0UjUmTeudHU6A/pub?w=1043&h=515)
](https://docs.google.com/drawings/d/1scUDSXWfFT-4dQXpxveOJSdcQrU_pg0UjUmTeudHU6A/edit?usp=sharing)

## Awesome list of front-end resources

* [sindresorhus/awesome](https://github.com/sindresorhus/awesome#front-end-development)
