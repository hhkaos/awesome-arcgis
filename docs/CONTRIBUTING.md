# Contributions

You may know [why we started this project](about/README.md) or you might not, but whatever it is, we are very happy you are thinking on contributing.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [How to contribute](#how-to-contribute)
  - [Enhance content](#enhance-content)
    - [Improve an existing resource page](#improve-an-existing-resource-page)
    - [Suggest a new resource page](#suggest-a-new-resource-page)
    - [Start a new resource page](#start-a-new-resource-page)
    - [Check existing links](#check-existing-links)
    - [Close existing issues](#close-existing-issues)
  - [Become a maintainer](#become-a-maintainer)
  - [Improve the web application](#improve-the-web-application)
- [Tutorials](#tutorials)
  - [Commenting on Disqus (< 1 min)](#commenting-on-disqus--1-min)
  - [Opening an issue (< 1 min)](#opening-an-issue--1-min)
  - [Using: Github Online Editor (< 2 min)](#using-github-online-editor--2-min)
  - [Using: Your favorite IDE](#using-your-favorite-ide)
    - [Install and build](#install-and-build)
    - [Configurations](#configurations)
- [Project misuse](#project-misuse)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to contribute

### Enhance content

**Anyone is welcome to contribute** to this repository, not only the [ArcGIS Experts listed here](https://esri-es.github.io/arcgis-experts/), so please feel free to do any contribution.

#### Improve an existing resource page

The awesome list compiles many resource pages but because technology change fast, they could miss many resources and other may be out to date or broken.

You can contribute improving existing resource pages by:

* Reporting broken links or suggest missing resources:
    * [Opening an issue](#opening-an-issue--1-min)
        * [Template to report a broken link](../../issues/new?template=broken-link-report.md)
        * [Template to enhance a resource page](../../issues/new?template=enhance-resource-page.md)
    * [Commenting on Disqus](#commenting-on-disqus--1-min)
* Fixing broken links or add missing resources:
    * [Using the Github Online Editor](#using-github-online-editor--2-min)
    * [Using your favorite IDE locally](#using-your-favorite-ide-locally)

> **Note**: remember you can use [ArcGIS Search Engine](https://esri-es.github.io/arcgis-search/) to help you find great resources and also find inspiration in the [template resource pages](templates/README.md).


#### Suggest a new resource page

Use Github issues to suggest a new resource page, but first check [the existing issues](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22content+needed%22) to verify no one else has already requested it. In case no one else has done it, [open up an issue](#opening-an-issue--1-min).

> [Template to request a new resource page](../../issues/new?template=resource-page-request.md)

#### Start a new resource page

You can start a resource page based on your needs or check [the existing issues](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22content+needed%22) to help someone else.

The first think you will have to do is decide in which folder you would place this resource page, to do that we encourage you to [explore the SUMMARY.md file](./SUMMARY.md).

Afterwards and depending on the resource page you want you start, you might find [these resource templates](./templates/README.md) useful.

In case you don't, start drafting it, think the structure (maybe you can get ideas from the other resource page templates) and start collecting links.

> **Note**: remember  you can use [ArcGIS Search Engine](https://esri-es.github.io/arcgis-search/) to help you find great resources and you can try to reach an [ArcGIS Experts](https://esri-es.github.io/arcgis-experts/) to help you with it.

And finally, if you think the structure you have built could be share by other resource pages, please create a [template](./templates/README.md) or [let us know](../../issues/new)

#### Check existing links

You can help us checking broken links programmatically running this command:

`$ node deploy.js --links`

This will display a link of messages but also it will create a bunch of files (called *ab-results--[PATH TO FILE]*) with a JSON containing detailes information about the state of the links in this repo.

You can place them in the ignored folder `awesomebot-results`.

`$ mkdir awesomebot-results && mv ab-* awesomebot-results`

#### Close existing issues

You can also contribute helping us to close issues find existing issues with [content that have been already requested](../../issues?q=is%3Aissue+is%3Aopen+label%3A%22content+needed%22)

### Become a maintainer

If you are an [ArcGIS Experts](https://esri-es.github.io/arcgis-experts/) and are willing to help us curate and maintain a resource page please let us know writing to raul.jimenez@esri.es.

### Improve the web application

Suggesting ideas or implementing ideas.

* Fixing [existing bugs](../../issues?q=is%3Aissue+is%3Aopen+label%3Abug)
* Sharing ideas/features to the web application [opening an issue](#opening-an-issue--1-min): [Template to request a new feature](../../issues/new?template=feature_request.md)
* Helping us to implement [existing enhancements requested](../../issues?q=is%3Aissue+is%3Aopen+label%3Aweb-enhancement): [using your favorite IDE](#using-your-favorite-ide)

## Tutorials

### Commenting on Disqus (< 1 min)

If you are in the [build version](https://hhkaos.github.io/awesome-arcgis/) made with [Gitbook](https://github.com/GitbookIO/gitbook) and you can report a broken link or suggest a new resource **using Disqus**. You can do it like so:

[![Animation adding a comment on Disqus](../../blob/master/assets/Contribute%20thru%20disquss.gif?raw=true)](https://www.youtube.com/watch?v=1FBYMX_abhk&index=3&list=PLVfQL04Y8hoILL6FDtB-zM_gHgkJur3kX)

### Opening an issue (< 1 min)

> **Note**: This option requires you to have a Github account

How to open a Github issue:

[![Animation opening an issue](../../blob/master/assets/Opening%20an%20issue.gif?raw=true)](https://www.youtube.com/watch?v=HGyQn3hhfIA&index=2&list=PLVfQL04Y8hoILL6FDtB-zM_gHgkJur3kX)

We have built several templates with some guidelines to help anyone to contribute:

* [Template to report a broken link](../../issues/new?template=broken-link-report.md)
* [Template to enhance a resource page](../../issues/new?template=enhance-resource-page.md)
* [Template to request a new resource page](../../issues/new?template=resource-page-request.md)
* [Template to request a new feature](../../issues/new?template=feature_request.md)

### Using: Github Online Editor (< 2 min)

> **Note**: This option requires you to have a Github account

**Edit a resource page from your browser**: [learn how](https://help.github.com/articles/editing-files-in-your-repository/).

Or you can also watch this video to learn **how to create a new page** using the Github Online Editor:

[![Animation showing how to use the Github Online Editor](../../blob/master/assets/Using-%20Github%20Online%20Editor.gif?raw=true)](https://www.youtube.com/watch?v=OndbEzpZ124&t=2s&list=PLVfQL04Y8hoILL6FDtB-zM_gHgkJur3kX&index=1)


### Using: Your favorite IDE

> **Note**: This option requires you to have a Github account

If you are a developer you can [fork this repo](https://help.github.com/articles/fork-a-repo/), make your contributions and do a [pull request](https://help.github.com/articles/about-pull-requests/)

> Optionally you can also [create a new build](#install-and-build).

#### Install and build

First you need to have [npm](https://www.npmjs.com/) installed in your computer. Afterwards, from the root folder run:

```
$ npm install
$ npm run install
```

To start the development environment run:

`$ npm run serve`

> Be patient, it will take some time but whenever it is ready you will see a message saying `Serving book on http://localhost:4000`

And whenever you are ready to create the new deployment run:

`$ npm run build`

> Be patient, this process can take a few minutes

#### Configurations

* **Ignore files and folders on build**: You can extract folders and files from the book adding them to the `ignores` property at [book.json](../../blob/master/book.json#L7)

* **Exclude from awesomebot**: if we want the `deploy.js` script to avoid checking links on any folder or file we can add it to the `excludeFromLinkChecker` array at [deploy.js](../../blob/master/deploy.js#L5)

* **Exclude from doctoc**: every table of contents (TOC) is generated automatically. If you don't want them to have a TOC edit the [deploy.js](../../blob/master/deploy.js#L11) script and add any file to `excludeFileFromDocToc` array, or any folder to the `excludeFoldersFromDocToc` array. 

## Project misuse

Do not use this issues to request help to solve specific problems or doubt with a product/API/SDK.

If you need help to solve specific problems about any technology follow these steps:

1. Search the resource page for this topic inside the awesome list of resources
2. Check resources and if you don't find anything helpful go to the community section
3. Search a solution in theses communities
4. If you do not find the solution, request help in the community and mention any [ArcGIS expert](https://esri-es.github.io/arcgis-experts/) you might have found.
