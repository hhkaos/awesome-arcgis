> **Note**: this page is only a draft, but this project is hosted on a [public repository](https://github.com/hhkaos/awesome-arcgis) where anyone can contribute. Learn how to [contribute in less than a minute](https://github.com/hhkaos/awesome-arcgis/blob/master/CONTRIBUTING.md#contributions).

# Credits

Service credits are the currency used across ArcGIS Online to measure the use of some cloud services. They are consumed for specific transactions and types of storage such as storing features, performing analytics, and using premium content.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of contents**

- [Introduction](#introduction)
- [FAQ](#faq)
  - [General](#general)
    - [What does NOT consume credits?](#what-does-not-consume-credits)
    - [What consume credits?](#what-consume-credits)
    - [How often are credits discounted?](#how-often-are-credits-discounted)
    - [How are hosted services credit consumption calculated?](#how-are-hosted-services-credit-consumption-calculated)
    - [How do I know how many MB my data will consume?](#how-do-i-know-how-many-mb-my-data-will-consume)
    - [How can I avoid to get my account blocked](#how-can-i-avoid-to-get-my-account-blocked)
  - [Other important considerations](#other-important-considerations)
    - [Developer plans](#developer-plans)
      - [How do they work](#how-do-they-work)
      - [What is a deployment plan? Do I have to pay when I go to production?](#what-is-a-deployment-plan-do-i-have-to-pay-when-i-go-to-production)
      - [Do I have to choose explicitly a billing option when signing up?](#do-i-have-to-choose-explicitly-a-billing-option-when-signing-up)
      - [How do I know when my credits will be refilled?](#how-do-i-know-when-my-credits-will-be-refilled)
      - [Vouchers](#vouchers)
    - [Free plan (50/monthly credits)](#free-plan-50monthly-credits)
      - [What can I do with 50 credits per month?](#what-can-i-do-with-50-credits-per-month)
      - [What can I do if my account get blocked (restricted state)](#what-can-i-do-if-my-account-get-blocked-restricted-state)
    - [Pay as you go option](#pay-as-you-go-option)
      - [How does it works?](#how-does-it-works)
      - [When you will be charged?](#when-you-will-be-charged)
      - [How long does it take to unlock an account from when I activate it?](#how-long-does-it-take-to-unlock-an-account-from-when-i-activate-it)
    - [Monthly pre-paid option (200 or more monthly credits)](#monthly-pre-paid-option-200-or-more-monthly-credits)
      - [How does it works?](#how-does-it-works-1)
      - [What if I go over my plan limit?](#what-if-i-go-over-my-plan-limit)
      - [Can I downgrade my pre-paid to the free plan?](#can-i-downgrade-my-pre-paid-to-the-free-plan)
  - [Organization accounts](#organization-accounts)
      - [How should I manage my credits](#how-should-i-manage-my-credits)
      - [What if I go over my Deployment Plan limit](#what-if-i-go-over-my-deployment-plan-limit)
  - [More questions (GeoNet)](#more-questions-geonet)
- [How to](#how-to)
  - [Check your credits remaining credits](#check-your-credits-remaining-credits)
  - [Check the detailed credit consumption](#check-the-detailed-credit-consumption)
  - [Check your credit renewal date](#check-your-credit-renewal-date)
- [Additional resources](#additional-resources)
  - [Localized resources](#localized-resources)
    - [Spanish](#spanish)

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

#### How often are credits discounted?

Credits are not discounted in real time. This is the update frequency:

* **Storage**: Every hour
* **Analytics**: Updated approximately every 10 minutes
* **[Premium Content](https://doc.arcgis.com/en/arcgis-online/reference/faq.htm#GUID-7DD6E881-411F-4861-B140-C6E465C1371D)**: updated approximately every 10 minutes (only demographic maps consume credits at this time)

Read the [original explanation @ GeoNet](https://community.esri.com/message/797070-re-how-often-are-the-remaining-credits-in-an-account-updated?commentID=797070&et=watches.email.thread#comment-797070).

#### How are hosted services credit consumption calculated?

As mentioned before, hosted services are charged hourly based.

> **Credit Math Example:** (*Autor: [Kelly Gerrow](https://community.esri.com/thread/209489-arcgis-online-storage-per-day-or-per-month-for-credits#comment-751906)*)
>
> If you have 10 MB of feature storage for an entire month, it will cost 2.4 credits for the entire month.
>
> If you publish and delete feature storage throughout the month, the credit charges reflect these changes due to the size of feature storage scheduled hourly. *This isn't the exact math as I have rounded the numbers and estimated the month, but should provide an idea about how the hourly storage is calculated.*
>
> Example if you had a 10 MB  service and had it hosted in ArcGIS Online for 6 hours, it would be
>
> 2.4 credits per month ÷ 744 hours (month of March) = 0.00322 (credits per hour)
>
> 0.00322 credits * 6 = total of 0.019 credits for storage for the six hours.

#### How do I know how many MB my data will consume?

How many MB will take to convert a dataset (CSV, GeoJSON, etc) to a hosted feature service?

> The data storage size is dependent on the actual data, field number and stored geometry in the dataset. Estimations are often inaccurate as all datasets vary. If looking to estimate for budgeting, the most accurate way to determine the size is to upload the data and view the size. Data that is larger than desired can be easily deleted. As mentioned above, short term storage of feature datasets is generally quite low.

Read the [original explanation @ GeoNet](https://community.esri.com/thread/209489-arcgis-online-storage-per-day-or-per-month-for-credits#comment-796896)

> **Warning**: even if you account get blocked, the credits related to featured services will be still charged

#### How can I avoid to get my account blocked

The most important thing to keep your account from being blocked is:

* Check the amounts of credits you are using in feature storage frequently
* Check the number of credits an analysis will take.
    * Every interface using any of the [ready to use ArcGIS Online REST APIs](../rest-apis/location-based-services/README.md) have a credit calculator you can check before executing it.
    * There is also a REST API that can be used programmatically to calculate credit consumption ([learn more](../rest-apis/location-based-services/README.md)).
* Check the number of credits you have left frequently, but remember that they are not updated in real time ([more info](#how-often-are-credits-discounted)).

In short, be careful when using the features that consume credits: analysis services, premium content and storage.

> **Note:** Premium content like infographics and some Living Atlas Layers such as tapestry segmentation are charged based on the number of transactions of each item. 1,000 map requests (pan, zoom, and identify) costs 10 credits ($1). Find more at: [Understanding credits consumption by capability](https://doc.arcgis.com/en/arcgis-online/reference/credits.htm#ESRI_SECTION1_709121D2C7694DCAB9B8592F36F7A5BA).

### Other important considerations

#### Developer plans

##### How do they work

If you signup for free and create a [developer account](../../../account-types/README.md):

* You will be enrolled to the [ArcGIS Developer Subscription Essentials Plan](../../../developers/developer-plan/README.md)
* You will be provided with one [creator user type](../../../account-types/name-users/README.md) to be able to use all the non-premium apps provided with ArcGIS Online (web, mobile, desktop), the libraries, SDKs and all cloud services (except the Premium Data Store and ArcGIS for IoT).
* Your account will be configured with the free plan (50 monthly credits) by default

> Note: if you need more users you should buy an [organization account](../../../account-types/README.md).

##### What is a deployment plan? Do I have to pay when I go to production?

Not necessarily, if your app:

* Uses ArcGIS Online
* But doesn’t consume more than 50 credits per month
* And doesn’t generate any revenue

You can deploy it for free.

> Examples that would incur no costs:
- A public site to help find public churches
- Local government developing a web application to display POIs
- A retail company building a landing page to show store locations
- If that last app also enable to find directions to the stores it will only pay if they exceed the 50 free credits per month


##### Do I have to choose explicitly a billing option when signing up?

No. When you sign up for the ArcGIS Developer Program 50 credits per month are included to develop your applications.

You can choose another option afterwards when going into production, or anytime if you need more then 50 credits per month.

##### How do I know when my credits will be refilled?

You can check the:
* `Renewal date` in your [Organization Overview page](https://www.arcgis.com/home/organization.html#overview)
* `Credits refresh on` in your [Developer Dashboard](https://developers.arcgis.com/dashboard).
* `subscriptionInfo.expDate` at the [Portal Self REST endpoint](https://developers.arcgis.com/rest/users-groups-and-items/portal-self.htm) (require a valid token).

##### Vouchers

Vouchers are special codes that provide you additional free credits for a limited time period of time and they normally delivered in promotional campaigns, developer workshops, etc.

To redeem a voucher you just need to go to [developers.arcgis.com/redeem-voucher](https://developers.arcgis.com/redeem-voucher/) and introduce the code.

It make take up to 30 minutes for credits to be applied to your account.

#### Free plan (50/monthly credits)

This is the plan included in the Essentials plan for free.

##### What can I do with 50 credits per month?

You can use your credits on any of our hosted services. If you spent all your credits on any one of the hosted services, you'd be able to:

* Generate 50,000 map tiles
* Store 208 MB of features
* Store 41 GB of map tiles
* Geocode and store 1,250 addresses
* Perform 10,000 routes
* Perform 100 advanced routes
* Perform 100 drive time calculations
* Perform 100 closest facility calculations
* Perform 25 delivery optimization routes
* Enrich your data with 5,000 variables
* Check out 4,545 Infographic views
* Draw 50,000 demographic maps
* Generate 5 demographic reports
* Perform spatial analysis on 50,000 features

You're also allowed 1,000,000 basemap transactions and 1,000,000 geocode (not stored) transactions per month without consuming any credits.

> Info extracted from [ArcGIS for Developers: Terms of Use - FAQ](https://developers.arcgis.com/terms/faq/).

##### What can I do if my account get blocked (restricted state)

If you are a developer and over exceeded the free 50 monthly credits you can:

* Wait until next month, your account will be refilled ([check renewal date](#renewal-date)) (+50 credits)
* Activate the Pay as you go plan using a credit card
* Get a pre-paid monthly plan (contact your local distributor)

**Important notes**:

* Your account will not be reset to 50 credits, if you have less than -50 credits your account will be still blocked.

* Check the amount of fixed credits been consumed for the hosted feature services, maybe you should remove some (credits related to featured services will be charged even if your account is blocked)

#### Pay as you go option

##### How does it works?

* You can activate it anytime
* You'll still have 50 free credits per month
* Once the 50 credits have been consumed, your account remains at 0.1 credits and for each credit consumed you will be charged 10 cents at the end of the month.

##### When you will be charged?

At account renewal date.

##### How long does it take to unlock an account from when I activate it?

It usually takes between 10 and 30 minutes, but if after 24h it has not been unlocked contact your local distributor.

#### Monthly pre-paid option (200 or more monthly credits)

##### How does it works?

* There are several monthly pre-paid plans ( $20 / $90 / $200 / $500 / ... ) and larger plans available for [developer accounts]((../../../account-types/README.md).
* Each plan will provide you with a fixed number of credits that will be added at the end of the month to you account every month (non-accumulative)
* To hire one of them contact your local distributor

Remember these plans only allow one [creator user type](../../../account-types/name-users/README.md). If you need more users you should buy an [organization account](../../../account-types/README.md).

##### What if I go over my plan limit?

You can configure your subscription to allow "overages":

* When your monthly subscription runs out of credits you will be charged a little more per credit than your in-plan fee ($.13/credit vs $.10/credit).
* You will be billed at the next billing period or when you've spent $520 worth of credits (4000 credits), whichever comes first.

You can configure your subscription NOT to allow "overages"

* When your monthly subscription runs out of credits, your account will be suspended. You can still log in, but your applications will not be allowed to access services that consume credits (such as feature layers, directions, bulk geocoding, geoenrichment or demographic maps).
* At the next billing cycle, you will receive a new batch of monthly credits.

In each of the two scenarios above, you can configure your subscription to notify you at, for example, 75%, 90%, 100% of your credit usage.

However, you can also upgrade your plan at any time to avoid overages.

##### Can I downgrade my pre-paid to the free plan?

Yes the monthly plan can go to free, all you need to do is cancel it, and it will then change to Essentials (free) plan the next month.

> **Note**: if you need to migrate your content you will need to have your account unblocked, only then you can use one of the following tools:
> * [ArcGIS Online Assistant](https://ago-assistant.esri.com/) (manually)
* [ArcGIS API for Python](https://developers.arcgis.com/python/) (programmatically)
* [ArcGIS REST JS](https://esri.github.io/arcgis-rest-js/) (programmatically)
* [ArcGIS Online REST API](https://developers.arcgis.com/rest/users-groups-and-items/working-with-users-groups-and-items.htm) (programmatically)

### Organization accounts

Organization accounts works like a pre-paid yearly developer accounts but in this case the ArcGIS Online organization provided support multiple users, role management, credit allocation, etc.

Learn more about [organization accounts](../../../account-types/README.md).

##### How should I manage my credits

Budgets: [Five Strategies and Tools for Managing Credits in ArcGIS Online](https://www.esri.com/arcgis-blog/products/arcgis-online/administration/five-strategies-and-tools-for-managing-credits-in-arcgis-online/)

##### What if I go over my Deployment Plan limit

Additional service credits can be purchased in blocks of 1,000 and are good for 24 months.
[Learn more](http://www.esri.com/software/arcgis/arcgisonline/credits) | [Buy additional credits](https://www.esri.com/en-us/store/arcgis-online)

### More questions (GeoNet)

You can find more [answered questions about credits works](https://community.esri.com/community/gis/web-gis/arcgisonline/content?filterID=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D&query=credits&sortKey=contentstatus%5Bpublished%5D~objecttype~thread%5Bquestions%5D~thread%5Banswered%5D~subjectAsc&sortOrder=1) in the [ArcGIS Online Place on GeoNet](https://community.esri.com/community/gis/web-gis/arcgisonline).

## How to

You can go to your [status usage page](https://www.arcgis.com/home/status/usage.html) and there you will be able to see:

### Check your credits remaining credits

Remaining amount of credits you have:

![Screenshot status page](../../../../assets/checking-credits.png)

### Check the detailed credit consumption

Scrolling down you will notice you can interact with the chart to better understand how you are using your credits:

![Screenshot status page](../../../../assets/checking-credits-detailed.png)

Additional resources:

* [Understanding Feature Storage Reports](https://www.esri.com/arcgis-blog/products/arcgis-online/administration/understanding-feature-storage-reports-december-2016/?rmedium=redirect&rsource=/esri/arcgis/2016/12/15/71673)
* [Monitor member activity](http://learn.arcgis.com/en/projects/set-up-an-arcgis-organization/lessons/monitor-member-activity.htm)
* [View credit status](https://doc.arcgis.com/en/arcgis-online/administer/view-status.htm) ([Organization > Status > Credits Credit](http://www.arcgis.com/home/organization.html#status))

### Check your credit renewal date

You can also check the renewal date:

![Screenshot status page](../../../../assets/checking-renewal-credits-date.png)

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
* Slides deck: [ArcGIS Online - Service Credits Explained](https://slides.com/hhkaos/arcgis-online-credits/live#/)

### Localized resources

#### Spanish

* Preguntas frecuentes: ¿Cómo funcionan los créditos de ArcGIS Online?: [Vídeo](https://www.arcgis.com/apps/MapJournal/index.html?appid=3875c10877da43aaa215d0b216cb2137&section=8) & [Diapositivas](https://slides.com/hhkaos/arcgis-online-credits/live#/)
* [Cómo configurar el método de pago "pay as you go"](https://www.youtube.com/watch?v=BdEHw9_I740)
* [APIs - Servicios disponibles en ArcGIS Online (Gratuitos y con créditos)](https://docs.google.com/spreadsheets/d/e/2PACX-1vRkXSlfG2gp8nwnkuAoj_x3s-YgTzakbYJwzfLxE4YlntI9u5QDB31ATS0UlVDWhFTCakXKLgdrWHeb/pubhtml)
