# Super up

---

> ⚠️ **IMPORTANT NOTICE & DISCLAIMER**
>
> This software template is strictly intended for lawful and appropriate use only. The following terms apply to all
> purchasers and users:
>
> 1. **Prohibited Content**: This template does not support, endorse, or permit the use of video calling features or any
     other functionality for adult, nude, explicit, or otherwise inappropriate content.
>
> 2. **No Liability**: The developer assumes no responsibility or liability for any misuse of this software. Users who
     deploy this template for prohibited purposes do so entirely at their own risk and bear full legal responsibility
     for their actions.
>
> 3. **Support Restrictions**: Technical support, code assistance, bug fixes, and implementation guidance will be
     permanently revoked and denied to any user found to be utilizing this template for adult or explicit content
     purposes.
>
> 4. **Compliance Requirement**: By purchasing or using this template, you agree to comply with all applicable laws,
     platform policies (including Apple App Store and Google Play Store guidelines), and community standards.
>
> **Violation of these terms will result in immediate termination of support services without refund.**

---

- Welcome to **Super Up**, the most complete chat app in Flutter!
- Super Up: Cupertino‑styled full WhatsApp clone. Socket.io + MongoDB + Flutter.
- In this app we will see the following features
- First, you can check out our online documentation

- Note: Apple may reject duplicate templates frequently submitted. Consider adding more features/branding before
  submission. Existing apps can submit as an update.
  ![updates](https://github.com/user-attachments/assets/3be6793c-05f0-4c7a-9ed9-c403a88b7e1e)

[![docs](https://github.com/hatemragab/v_chat_sdk/assets/37384769/d60ae209-ec42-4e47-ad12-44b901daf883)](https://super-up.github.io/super_up_docs/docs/intro)
[![contact](https://github.com/hatemragab/v_chat_sdk/assets/37384769/0e94b63c-125f-44c4-8088-71ecfd182fbf)](https://super-up.github.io/super_up_docs/docs/support)
![fram_1](https://github.com/user-attachments/assets/4c085512-06ed-447e-9248-a9eeebe5401b)
![fram_2](https://github.com/hatemragab/v_chat_sdk/assets/37384769/40e65ed5-13dd-46a8-a09d-eedf63882d46)

![web](https://github.com/hatemragab/v_chat_sdk/assets/37384769/3aa3cfd3-b877-4ca7-8e3c-6781e3ca5462)
![admin](https://github.com/hatemragab/v_chat_sdk/assets/37384769/67d49a6a-ff03-4099-b7f0-05097bdc1069)
![admin](https://github.com/hatemragab/v_chat_sdk/assets/37384769/243a9312-1370-4428-a8b8-e6412417980a)

- **New in updates 14 Feb 2024**

![updates](https://github.com/hatemragab/v_chat_sdk/assets/37384769/585cd0d2-3041-45b0-aaee-55bb3ae43e5e)

- **New in updates 31 Jun 2025**
  ![updates](https://github.com/user-attachments/assets/22d3891f-3aab-4ce6-b083-6f206579f0c4)

- **New in updates 6 Aug 2025**
  ![Image](https://github.com/user-attachments/assets/d9c7187a-01e1-4e5a-b5da-da1ad406f7b4)
  ![Image](https://github.com/user-attachments/assets/0af89e73-259f-4ffa-8d2d-17c2945b3bcc)

- Try the app now! Available on 5 platforms thanks to Flutter.
- Admin login password is **super-up-strong-password-viewer**
  [![test_1_android](https://github.com/hatemragab/v_chat_sdk/assets/37384769/2e950620-1c10-4253-8944-881bb448d559)](https://play.google.com/store/apps/details?id=com.superup.online)
  [![test_2_ios](https://github.com/hatemragab/v_chat_sdk/assets/37384769/ccbbfeeb-eecd-45b4-bf68-9325af0c50d6)](https://apps.apple.com/us/app/super-up/id6445877902)
  [![test_3_macOs](https://github.com/hatemragab/v_chat_sdk/assets/37384769/77bfa5ae-d52b-4243-88f6-186f06460315)](https://apps.apple.com/us/app/super-up/id6445877902?mt=12)
  [![test_4_web_chat](https://github.com/hatemragab/v_chat_sdk/assets/37384769/c7abc29c-3a34-4181-830c-61a72e6f17fe)](https://web.superupdev.online)
  [![test_5_admin](https://github.com/hatemragab/v_chat_sdk/assets/37384769/97ac93e0-d210-49bd-8930-47b1daa43b2d)](https://admin.superupdev.online/)
  [![test_6_windows](https://github.com/hatemragab/v_chat_sdk/assets/37384769/3719f39a-662d-43f2-abda-003391bbc231)](https://apps.microsoft.com/detail/9PMDVDSG91F1?hl=en-eg)

## Technologies

1. [Flutter](https://flutter.dev) for client side (3.24.x+)
2. Node.js `v17.9.1` or later for backend [NestJS](https://nestjs.com)
3. [socket-io](https://socket.io) for real time management
4. [mongodb](https://www.mongodb.com) for data storage v `v 5.*` or `v 6.*` only
5. Backend tech: Bearer token `JWT`, ORM `mongoose`
6. [agora-io](https://www.agora.io) for video and voice calls
7. All media saved on the server on your vps server
8. Google Maps for share chat location
9. `mailer` for send reset password OTP
10. `firebase-admin` for push notifications
11. `geoip-lite` and `request-ip` for detect user country

## Features (Apps)

- This app is a WhatsApp‑style clone with matching core features
- No Firebase is used only used for push notification, and you can switch to OneSignal
- Docker ready
- Login And register by email and password
- Reset password by send code to user email
- Receive share from other apps (android,ios) works
- Search in chats by usernames
- Filter chats by unread chats
- Create group chats
- Create broadcast chats same as whatsapp
- Unread chat for all chats and for each chat like whatsapp
- [mute un mute notifications],[Delete],[Report] chats
- Call history with call duration
- Reset password OTP by email (configure backend `.env.production`)
- Report users
- Block Users from the app
- All users have not deleted his account and search on them
- Settings tab (light mode,dark mode)
- Settings tab update account name ,Bio,image,password,delete my account
- Star messages
- One Time seen message!
- Manage device page (see all app devices and logout for anyone)
- Support for language 16 already included in the packages
- Admin notification so admin can send notification to all users
- Blocked users page
- In app notification mute for all chats
- Help (contact us) and (privacy policy page)
- Check for update
- User privacy
- Message upload and download progress
- Logout for the app
- Group chat mentions
- Nicknames support
- Voice and video calls using agora.io For Android,Ios only
- Send Text, image, video, voice note, documents, location share
- Full support for offline chat even you send message while the app has a bad network it will resend
- We support 4 type for message status exactly like whatsapp (pending,send,delivered, seen) all states work excellently
- Last seen and group (total online, total members count)
- Good voice player support next play and speed up the voice player and more!
- Ensures all functions work on various platforms, including Android, iOS, web, macOS, and Windows.
- Full sync message between all platforms in real time!!
- FCM and OneSignal push notifications supported
- Enables message forwarding to multiple rooms, replying with auto-highlight, sharing messages externally, message info
  tracking, deletion for oneself and all receivers, media sharing from external apps, and more.
- Delete and delete from all functions in message
- From admin panel you can set max limit for group members and broadcast and max forward,share message limit,max media
  Upload size and more
- Messages search
- You can ban users from use the app from an admin panel and more!!
- You can see statistical analysis of messages and rooms and users in an admin panel
- Clean UI/UX app clone from whatsapp for ios
- Download Media for all platforms
- Admob ads (banner) – Control from Admin App
- User Profile View
- See All Joined Users management system for group chats users,admins,superAdmins
- More and more you will discover inside the demo!
- Max file code length is 400 all code is clean code can be edit easily!
- More updates will be available soon

## Features (Admin)

- See all users with time of join and search of them
- See the number of users (deleted, online, etc...)
- See more about all devices that use the app
- Messages and Chat Rooms counter and more
- See all counties that uses your app and its number!
- Ban and delete users from admin panel
- See all information about specific user
- Send notification to all users who use the app!
- Control Your chat app like allow calls or show ads and more!
- Set max limits for group and broadcast sizes
- there are more to discover in the admin app give it try!
- admin app is responsive you can use it even on mobile and generate apk or web for it!
- 16 language support for admin also
- More updates will be available soon

## Why purchase

1. No Firebase high-cost price!
2. Self-deployment server you will have full access to your database!
3. Fast and secure with Node.js
4. Support for Android, iOS, macOS, Windows, and Web included
5. Support an admin panel included in the source code with same price
6. Support up to 16 languages and more in next updates
7. Full customizable
8. Clean code with SOLID principles

## After purchasing (CodeCanyon)

- You will get all files for flutter project `(android,ios,web,macos,windows)`
- You will get the flutter `admin panel` project
- Postman collection for all apis
- Full NestJS backend code
- Full support for future updates
- Free support for bug fixes (paid support also available)
- You can use this project to modify and edit it serve your `Customers` !

## Privacy

- No support for adult content. Support will be revoked if detected.

[![VCHATSDK](https://github.com/hatemragab/v_chat_sdk/assets/37384769/63458339-18a4-4e2a-aa3c-ad527ed48edc)](https://codecanyon.net/item/flutter-chat-app-with-node-js-and-socket-io-mongo-db/reviews/26142700)

[![](https://github.com/hatemragab/v_chat_sdk/assets/37384769/d34777a0-23f7-443c-9f47-285b4280361b)](https://github.com/hatemragab)

[![fram_3](https://github.com/user-attachments/assets/f620288b-2023-4d70-9ddb-8f6044f3743a)](https://super-up.github.io/super_up_docs/docs/support/#lets-launch-your-chat-app-together)

<pre><code>
- Update 15 Oct 2025  V2.2.1 build 71
- support new flutter version at stable, 3.35.6
- support android 16K page size
- introduce message emojis 
- introduce change chat wallpaper
- upgrade all flutter packages
</code></pre>


<pre><code>
- Update 6 Aug 2025  V2.2.0 build 70
- Update all packages for flutter side and nestjs side 
- Support flutter sdk V3.32.8 and above node js v23.11.0
- improve the callkit for ios for receiving calls 
- android add real call notification style like native system and add call timer notifiaction
- add all missing translated (localizations) words 
- Add android foreground service for make call continue while app locked!
- UI improvements => image crop page,theme Dark theme, call item new ui,location message,users screen and search
- errors fixed => start message page, one seen message,image and other media download after you send it fixed now!
- fix play voice for android
- add call log for wide mode like web or tablet
- new big update for media now we have media compress and media trimmer!
- new package for location picker
- timeout for typing indicator
- fix delete story from you 
- add story views option to let you know who see you story
- improve image view page fix zoom and add more options to it
- improve and fix some bugs for group calls like when new one join it send call request all !
- improve the docs for Postman api collection
- fix send notifications from firebase direct
</code></pre>

<pre><code> 
- Update 23 May 2025
- Introduced OTP phone verification with a new `phone_otp_version`: - Login via phone number with SMS sent by Firebase (requires enabling phone auth and billing in Firebase).
- after download the code now you will find `email_version` and `phone_otp_version` choose which version you will go with
- Real-time contacts sync; users can only search and chat with their own contacts for improved privacy.
- Web login via QR code scanning for seamless access. - Full support for Flutter 3.29.3 for maximum compatibility and stability.
- Major Improvements & Features:
- Fixed Firebase admin push notifications if user open the app. 
- Redesigned admin login page UI  . 
- Upgraded all packages and dependencies, resolving deprecated APIs for long-term support and stability. 
- Improved  login and register page UI for better usability and accessibility.
- Added drag-and-drop file upload and keyboard copy-paste support in the web version.
- Enhanced web version speed by upgrading the in-memory database.
- Upgraded OneSignal package to the latest version and fixed all breaking changes.
- Improved text input in chats for a better messaging experience.
- Added support for changing language and theme directly from the registration page.
- Enhanced translation coverage and accuracy throughout the app.
</code></pre>

<pre><code>
- Update 31 Feb 2025  
- Support native calls like whatsapp
- improve call ui and group calls improved
- support delete your story
- upgrade flutter packages to support flutter 3.27.X
- fix some bugs like checking on a message which been deleted
</code></pre>

<pre><code>
- Update 7 Nov 2024  
- Support new gradle update 8.9 
- Support new flutter version 3.24.X
- Upgrade all flutter packages to last version of today
- Fix some bugs
- improve call Ui
- Support group calls
</code></pre>

<pre><code>
- Update 10 June 2024  
- Update all packages
- Support flutter sdk v 3.22 and above
- prepare for the new VOIP call like whatsapp
</code></pre>

<pre><code>
- Update 16 Feb 2024  
- One Time seen message You can enable it from chat settings after that the message will appear once
- Add My Privacy tab in settings 
- Support to hide your account from public 
- Support to hide your last seen
- Add Create stories like whatsapp text,media with caption
- Add progress for download and upload (Mobile)
- Add Storage and Data in Settings which will control how media auto-download works 
- You can see and clear caches 
- Fix Some bugs
- Prepare for Chat requests which will come later
</code></pre>

<pre><code>
- Update 4 December 2023  
- new message ui theme
- link now can be previewed 
- support for last flutter version 3.16
- add support for web and windows notifications 
- fix broadcast and block contacts views 
- fix in web infinite load after update bio
- improve agora calls ui add timer and speaker 
- delete call logs support 
- add more banner and interstitial support 
- add isPeime is user is prime you can update if from admin then the user ads will stop showing for him
- add isVerified if user is verified you can update it from admin then verify badge will appear to him in search 
- improve chats messages search 
</code></pre>
