> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Credits

Service credits are the currency used across ArcGIS and are consumed for specific transactions and types of storage such as storing features, performing analytics, and using premium content.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [FAQ](#faq)
  - [General](#general)
    - [What does NOT consume credits?](#what-does-not-consume-credits)
    - [What consume credits?](#what-consume-credits)
    - [How are credits discounted?](#how-are-credits-discounted)
    - [How can I avoid to get my account blocked](#how-can-i-avoid-to-get-my-account-blocked)
  - [ArcGIS Online Deployment Plan](#arcgis-online-deployment-plan)
    - [Any plan](#any-plan)
      - [What is a deployment plan and do I have to pay when I go to production?](#what-is-a-deployment-plan-and-do-i-have-to-pay-when-i-go-to-production)
      - [Do I have to choose a deployment plan to sign up?](#do-i-have-to-choose-a-deployment-plan-to-sign-up)
      - [How do I know when my credits will be refilled?](#how-do-i-know-when-my-credits-will-be-refilled)
      - [How many MB will take to convert a dataset (CSV, GeoJSON, etc) to a hosted feature service?](#how-many-mb-will-take-to-convert-a-dataset-csv-geojson-etc-to-a-hosted-feature-service)
      - [How hosted featured services are charged?](#how-hosted-featured-services-are-charged)
    - [Free plan (50/monthly credits)](#free-plan-50monthly-credits)
      - [What can I do with 50 credits per month?](#what-can-i-do-with-50-credits-per-month)
      - [What can I do if my account get blocked](#what-can-i-do-if-my-account-get-blocked)
    - [Monthly paid plans (200 or more monthly credits)](#monthly-paid-plans-200-or-more-monthly-credits)
      - [What if I go over my Deployment Plan limit?](#what-if-i-go-over-my-deployment-plan-limit)
      - [Can I downgrade my ArcGIS Online Deployment plan to the free plan?](#can-i-downgrade-my-arcgis-online-deployment-plan-to-the-free-plan)
  - [Organization accounts](#organization-accounts)
      - [How should I manage my credits](#how-should-i-manage-my-credits)
      - [What if I go over my Deployment Plan limit](#what-if-i-go-over-my-deployment-plan-limit)
  - [More questions (GeoNet)](#more-questions-geonet)
- [Vouchers](#vouchers)
- [How to](#how-to)
  - [Check your credits remaining credits](#check-your-credits-remaining-credits)
  - [Check the detailed credit consumption](#check-the-detailed-credit-consumption)
  - [Check your credit renewal date](#check-your-credit-renewal-date)
  - [Redeem a voucher](#redeem-a-voucher)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

To [understand the credit system](https://doc.arcgis.com/en/arcgis-online/reference/credits.htm) you first need to understand the different [account types available in ArcGIS Online](../../../account-types/README.md).

## FAQ

### General

#### What does NOT consume credits?

Many of what you do with ArcGIS Online does not require service credits including accessing or editing data stored in your layers, using [basemaps and imagery](../../../content/data-providers/README.md) layers, exporting your data, etc.

> Using Esri basemaps in your apps does not consume credits but you are limited to using 1 million [map transactions](http://doc.arcgis.com/en/arcgis-online/reference/transaction-limits.htm) per month. Using geosearch in your apps to find a single address does not consume credits but you are limited to 1 million geosearches per month.

#### What consume credits?

You can use service credits in exchange for storage, analytics, demographics and lifestyle maps. Use [this chart](https://developers.arcgis.com/pricing/credits/) or visit the [documentation](http://links.esri.com/agol-help/credits) page for more information.

> **Note**: there are some credit-consuming operations that can also be performed using free services, such as the [sampleserver6.arcgisonline.com geometry REST service](https://developers.arcgis.com/rest/services-reference/geometry-service.htm) or the geometry engine of some APIs/SDKs (JS [geometryEngine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html) & [projectionEngine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-projection.html)).

#### How are credits discounted?

Credits are discounted periodically (not in real time). (*Pending more details*)

#### How can I avoid to get my account blocked

Currently there is no foolproof way to prevent your account from being blocked, but there is an [alert mechanism](https://developers.arcgis.com/account/usage-alerts/) that allows you to set up notifications when you exceed a credit limit (75%, 90%, 100%).

But the most important thing to keep your account from being blocked is:
* Check the number of credits an analysis will take.
    * Almost every interface using any of the [ready to use ArcGIS Online REST APIs](../rest-apis/ready-to-use-services/README.md) have a credit calculator you can check before executing it.
    * There is also a REST API that can be used programmatically to calculate credit consumption ([learn more](../rest-apis/ready-to-use-services/README.md)).
* Check the number of credits you have left, but remember that they are not updated in real time.
* Be careful when using the services that consume credits.

### ArcGIS Online Deployment Plan

#### Any plan

##### What is a deployment plan and do I have to pay when I go to production?

Not necessarily. A deployment plan licenses the use of ArcGIS Online. If your app uses ArcGIS Online, but doesn’t use more than 50 Credits, and doesn’t generate any revenue you may deploy your apps without a paid deployment plan.

##### Do I have to choose a deployment plan to sign up?

No. When you sign up for the ArcGIS Developer Program 50 credits per month are included to develop your applications. You can choose your plan when you go into production or if you need more then 50 credits to develop your application.

##### How do I know when my credits will be refilled?

You can check the `Renewal date` at [arcgis.com/home/organization.html](https://www.arcgis.com/home/organization.html)

##### How many MB will take to convert a dataset (CSV, GeoJSON, etc) to a hosted feature service?

*PENDING*

##### How hosted featured services are charged?

*PENDING*: They are charged periodically (every X/hours/...)

> Note even if you account get blocked, the credits related to featured services will be charged (*double check needed*)

#### Free plan (50/monthly credits)

This is the plan included in the Essentials plan for free.

##### What can I do with 50 credits per month?

You can use your credits on any of our hosted services. If you spent all your credits on any one of the hosted services, you'd be able to:

* Generate 50,000 map tiles
* Store 208 MB of features
* Store 41 GB of map tiles
* Geocode 1,250 addresses
* Perform 1,250 simple routes
* Perform 100 optimized routes
* Perform 100 drive time calculations
* Perform 100 closest facility calculations
* Perform 25 delivery optimization routes
* Enrich your data with 5,000 variables
* Check out 4,545 Infographic views
* Draw 50,000 demographic maps
* Generate 5 demographic reports
* Perform spatial analysis on 50,000 features

You're also allowed to view 1,000,000 basemaps per month without consuming any credits.

##### What can I do if my account get blocked

If you are a developer and over exceeded the free 50 monthly credits you can:

* Wait until next month, your account will be refilled ([check renewal date](#renewal-date)) (+50 credits)
* Get a paid [ArcGIS Online Deployment Plan](https://developers.arcgis.com/pricing/credits/)

**Important notes**:

* If you account will not be reset to 50 credits, if you have less than -50 credits your account will be still blocked.

* Check the amount of fixed credits been consumed for the hosted feature services, maybe you should remove some (credits related to featured services will be charged (*double check needed*))

> In some cases it is possible to get a [voucher](#vouchers) through your Esri office locally.

#### Monthly paid plans (200 or more monthly credits)

There are several [monthly paid plans](https://developers.arcgis.com/pricing/credits/): $20/$90/$200/$500/$1000/$2000/$4000 and larger plans available for [developer accounts]((../../../account-types/README.md).

Remember these plans only allow one [level 2 name user](../../../account-types/name-users/README.md). If you need more users you should buy an [organization account](../../../account-types/README.md).

##### What if I go over my Deployment Plan limit?

You can configure your subscription to allow "overages"

* When your monthly subscription runs out of credits you will be charged a little more per credit than your in-plan fee ($.13/credit vs $.10/credit).
* You will be billed when you've spent $520 worth of credits (4000 credits) or at the next billing period, whichever comes first
* You can upgrade your plan at any time.

You can configure your subscription NOT to allow "overages"

* When your monthly subscription runs out of credits, your account will be suspended. You can still log in, but your applications will not be allowed to access services that consume credits (such as directions, bulk geocoding, geoenrichment or demographic maps).
* At the next billing cycle, you will receive a new batch of monthly credits.

In each of the two scenarios above, you can configure your subscription to notify you at, for example, 75%, 90%, 100% of your credit usage.

However, you can also upgrade your plan at any time to avoid overages.

##### Can I downgrade my ArcGIS Online Deployment plan to the free plan?

Not yet, you would have to create a new developer account an migrate everything from your paid account to the free one.

To be able to migrate your content **you will need to have your account unblocked**, only then you can use one of the following tools:

* [ArcGIS Online Assistant](https://ago-assistant.esri.com/) (manually)
* [ArcGIS API for Python](https://developers.arcgis.com/python/) (programmatically)
* [ArcGIS REST JS](https://esri.github.io/arcgis-rest-js/) (programmatically)
* [ArcGIS Online REST API](https://developers.arcgis.com/rest/users-groups-and-items/working-with-users-groups-and-items.htm) (programmatically)

### Organization accounts

Learn more about [organization accounts](../../../account-types/README.md).

##### How should I manage my credits

Budgets: [Five Strategies and Tools for Managing Credits in ArcGIS Online](https://www.esri.com/arcgis-blog/products/arcgis-online/administration/five-strategies-and-tools-for-managing-credits-in-arcgis-online/)

##### What if I go over my Deployment Plan limit

Additional service credits can be purchased in blocks of 1,000 and are good for 24 months.
[Learn more](http://www.esri.com/software/arcgis/arcgisonline/credits) | [Buy additional credits](https://www.esri.com/en-us/store/arcgis-online)

### More questions (GeoNet)

You can find more [answered questions about credits works](https://community.esri.com/community/gis/web-gis/arcgisonline/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D&query=credits&sortKey=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D~subjectAsc&sortOrder=1) in the [ArcGIS Online Place on GeoNet](https://community.esri.com/community/gis/web-gis/arcgisonline).

## Vouchers

Vouchers are special codes that provide you additional free credits for a limited time period of time and they normally delivered in promotional campaigns, developer workshops, etc.

Learn [how to redeem a voucher](#redeem-a-voucher)

## How to

You can go to your [status usage page](https://www.arcgis.com/home/status/usage.html) and there you will be able to see:

### Check your credits remaining credits

Remaining amount of credits you have:

![Screenshot status page](../../../../assets/checking-credits.png)

### Check the detailed credit consumption

Scrolling down you will notice you can interact with the chart to better understand how you are using your credits:

![Screenshot status page](../../../../assets/checking-credits-detailed.png)

### Check your credit renewal date

You can also check the renewal date:

![Screenshot status page](../../../../assets/checking-renewal-credits-date.png)

### Redeem a voucher

You just need to go to [developers.arcgis.com/redeem-voucher](https://developers.arcgis.com/redeem-voucher/) and introduce the code.

It make take up to 30 minutes for credits to be applied to your account.

Note that vouchers have:

* An activation start and end date
* Redemption end date
* Limited numbers of time that can be used
* Limited credits per voucher

## Additional resources

* [Understand ArcGIS Online credits](https://doc.arcgis.com/en/arcgis-online/reference/credits.htm)
* [Terms of Use - FAQ](https://developers.arcgis.com/terms/faq/):
* [ArcGIS Online FAQ](http://doc.arcgis.com/en/arcgis-online/reference/faq.htm)
* [Premium Feature Data Store](https://www.esri.com/en-us/store/arcgis-online/arcgis-online-premium-data-store): costs are fixed per month as compared to the variable, storage-based costs of a standard feature data store.

### Localized resources

* [APIs - Servicios disponibles en ArcGIS Online (Gratuitos y con créditos)](https://docs.google.com/spreadsheets/d/e/2PACX-1vRkXSlfG2gp8nwnkuAoj_x3s-YgTzakbYJwzfLxE4YlntI9u5QDB31ATS0UlVDWhFTCakXKLgdrWHeb/pubhtml)
