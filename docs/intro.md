---
sidebar_position: 1
---

# Super up Intro

- Super Up is a full social chat app (WhatsApp‑style Cupertino UI) supporting `Android`, `iOS`, `Windows`, `Web`, and `macOS`.
- The admin panel is included and continues to receive updates.

### Technologies

1. [Flutter](https://flutter.dev) for client side, latest version or `3.32.x`
2. Node.js `v23.x.x` or later on the backend using [NestJS](https://nestjs.com)
3. [socket-io](https://socket.io) for real time management
4. [mongodb](https://www.mongodb.com) for data storage v `v 5.*` or `v 6.*` only
5. Some backend tech Bearer token `JWT`,ORM `mongoose`,
6. [agora-io](https://www.agora.io) for video and voice calls
7. All media saved on your VPS server
8. Google maps for share chat location
9. `mailer` for send reset password OTP
10. `firebase-admin` for push notifications
11. `geoip-lite` and `request-ip` for detect user country
12. All `media` and `data` (messages texts and media) for this project are stored locally in the server

:::tip Firebase
This project not user firebase to save any data it only use the free firebase
FCM for push notifications only! `No for firebase high cost!`
:::

### Requirements

1. Flutter [latest SDK](https://docs.flutter.dev/get-started/install) installed locally
2. Node.js, NestJS, MongoDB installed on your VPS (or use Docker)
3. VPS: at least 2 vCPU, 2 GB RAM, 20+ GB SSD, and >1 TB bandwidth (e.g., [DigitalOcean](https://www.digitalocean.com), [Hostens](https://www.hostens.com/vps-hosting))
4. Domain name it can be from [namecheap](https://www.namecheap.com)
5. [Firebase](https://firebase.google.com/) account for FCM push (optional)
6. [agora-account](https://www.agora.io/en/pricing) if you intent to enable voice and video calls `Optional`
7. [onesignal](https://onesignal.com/) account if you intent to push notifications over onesignal instead of
   firebase `Optional`
8. [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) used for search
   and let users able to send locations in chat `Optional`
9. [google-ads-banner](https://admob.google.com/home) keys get banner id for `ios` and `android` if you want
   to enable it `Optional`
10. For iOS builds, an Apple Developer [account](https://developer.apple.com) ($99/year)

### Try the app now

[![test_1_android](https://github.com/hatemragab/v_chat_sdk/assets/37384769/2e950620-1c10-4253-8944-881bb448d559)](https://play.google.com/store/apps/details?id=com.superup.online)
[![test_2_ios](https://github.com/hatemragab/v_chat_sdk/assets/37384769/ccbbfeeb-eecd-45b4-bf68-9325af0c50d6)](https://apps.apple.com/us/app/super-up/id6445877902)
[![test_3_macOs](https://github.com/hatemragab/v_chat_sdk/assets/37384769/77bfa5ae-d52b-4243-88f6-186f06460315)](https://apps.apple.com/us/app/super-up/id6445877902?mt=12)
[![test_4_web_chat](https://github.com/hatemragab/v_chat_sdk/assets/37384769/c7abc29c-3a34-4181-830c-61a72e6f17fe)](https://web.superupdev.online)
[![test_5_admin](https://github.com/hatemragab/v_chat_sdk/assets/37384769/97ac93e0-d210-49bd-8930-47b1daa43b2d)](https://admin.superupdev.online/)
[![test_6_windows](https://github.com/hatemragab/v_chat_sdk/assets/37384769/3719f39a-662d-43f2-abda-003391bbc231)](https://apps.microsoft.com/detail/9PMDVDSG91F1?hl=en-eg)

### After purchasing (CodeCanyon)

- You will get all Flutter projects (`Android`, `iOS`, `Web`, `macOS`, `Windows`)
- You will get the Flutter `admin panel` project
- Postman collection for all apis
- Full NestJS backend source code
- Full support for future updates
- Free support for bug fixes only (there is paid support)
- You can use this project to modify and serve your `Customer`!

:::tip V-Chat SDK
This project use [v-chat-sdk](https://github.com/hatemragab/v_chat_sdk) under the hood to serve the chat part
This will not require you to purchase the [v-chat-sdk](https://v-chat-sdk.github.io/vchat-v2-docs/docs/intro) it already
impeded inside the source code
if you are looking to implement a chat system into your exists or new flutter app then
you should
purchase [v-chat-sdk](https://codecanyon.net/item/flutter-chat-app-with-node-js-and-socket-io-mongo-db/26142700)
:::

:::tip Contact me
I offer paid full server-side [setup](./support.md)
:::
