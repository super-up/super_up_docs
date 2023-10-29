---
sidebar_position: 1
---

# Super up Intro

- Super up is a full social chat app clone from whatsapp `cupertino` ui
  support (`Android`, `ios`,`windows`, `web`,`macOS`)
- Current the `admin panel under build` you will receive it as updates for free in this project but you can install the
  current version of it

### technologies

1. [Flutter](https://flutter.dev) for clint side last version or `v 3.13.7`
2. Nodejs `v17.9.1` or later in the backend side  [Nestjs](https://nestjs.com)
3. [socket-io](https://socket.io) for real time management
4. [mongodb](https://www.mongodb.com) for data storage v `v 5.*` or `v 6.*` only
5. some backend tech Bearer token `JWT`,ORM `mongoose`,
6. [agora-io](https://www.agora.io) for video and voice calls
7. All media saved on the server on your vps server
8. `mailer` for send reset password OTP
9. `firebase-admin` for push notifications
10. `geoip-lite` and `request-ip` for detect user country

:::tip Firebase
This project not user firebase to save any data it only use the free firebase
FCM for push notifications only! `No for firebase high cost!`
:::

### requirements

1. flutter [last-sdk](https://docs.flutter.dev/get-started/install) installed in your local machine
2. nodejs , nestjs , mongodb installed in your vps server
3. vps server should be at lest 2 cpu and 2GB ram and enough ssd storage at lest 20 GB you can check out this companies
   [digitalocean](https://www.digitalocean.com) ,[hostens](https://www.hostens.com/vps-hosting) make sure you have
   bandwidth more than *1TB*
4. Domain name it can be from [namecheap](https://www.namecheap.com)
5. [firebase](https://firebase.google.com/) account for handle push notifications `Optional`
6. [agora-account](https://www.agora.io/en/pricing) if you intent to enable voice and video calls `Optional`
7. [onesignal](https://onesignal.com/) account if you intent to push notifications over onesignal instead of
   firebase `Optional`
8. [google-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key) this key used for search
   and let users able to send locations in chat `Optional`
9. [google-ads-banner](https://admob.google.com/home/get-started) keys get banner id for `ios` and `android` if you want
   to enable it `Optional`
10. For run ios you need paid apple developer [account](https://developer.apple.com) (99$) per year

:::tip VCHAT SDK
This project use [v-chat-sdk](https://github.com/hatemragab/v_chat_sdk) under the hood to serve the chat part
This will not require you to purchase the [v-chat-sdk](https://v-chat-sdk.github.io/vchat-v2-docs/docs/intro) it already
impeded inside the source code
if you are looking to implement a chat system into your exists or new flutter app then
you should
purchase [v-chat-sdk](https://codecanyon.net/item/flutter-chat-app-with-node-js-and-socket-io-mongo-db/26142700)
:::

:::tip Contact me
Iam offer paid full server side setup
Support email`hatemragapdev@gmail.com`
Or on Skype at `live:.cid.607250433850e3a6`
:::