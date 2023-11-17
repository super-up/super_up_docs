"use strict";(self.webpackChunksuper_up_docs=self.webpackChunksuper_up_docs||[]).push([[87],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:2},o="Flutter",r={unversionedId:"flutter",id:"flutter",title:"Flutter",description:"---",source:"@site/docs/flutter.md",sourceDirName:".",slug:"/flutter",permalink:"/super_up_docs/docs/flutter",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Super up Intro",permalink:"/super_up_docs/docs/intro"},next:{title:"Backend (Nodejs)",permalink:"/super_up_docs/docs/backend"}},p={},s=[{value:"Lest explain packages",id:"lest-explain-packages",level:3},{value:"Change app name,package,logo",id:"change-app-namepackagelogo",level:3},{value:"Connect firebase",id:"connect-firebase",level:3},{value:"SConstants",id:"sconstants",level:3},{value:"Add more language",id:"add-more-language",level:3},{value:"Ads",id:"ads",level:3},{value:"Agora.io",id:"agoraio",level:3},{value:"Google api key",id:"google-api-key",level:3},{value:"Notifications iOS (APNS)",id:"notifications-ios-apns",level:3},{value:"how to update theme",id:"how-to-update-theme",level:3},{value:"First message page",id:"first-message-page",level:4},{value:"second Chats Room page",id:"second-chats-room-page",level:4},{value:"one signal",id:"one-signal",level:3},{value:"Admin panel",id:"admin-panel",level:3},{value:"publish",id:"publish",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...l}=e;return(0,i.kt)(u,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flutter"},"Flutter"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"project structure in split packages"),(0,i.kt)("li",{parentName:"ul"},"To run the project first activate ",(0,i.kt)("inlineCode",{parentName:"li"},"melos"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dart pub global activate melos\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Then run this commend in the root of the project")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"melos bs\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"this code will run pub get for you in all packages\n",(0,i.kt)("img",{src:a(3232).Z,width:"647",height:"683"})),(0,i.kt)("li",{parentName:"ul"},"we have the following"),(0,i.kt)("li",{parentName:"ul"},"apps (",(0,i.kt)("inlineCode",{parentName:"li"},"super_up_admin"),") this is the admin panel"),(0,i.kt)("li",{parentName:"ul"},"apps (",(0,i.kt)("inlineCode",{parentName:"li"},"super_up_app"),") this app you should run it"),(0,i.kt)("li",{parentName:"ul"},"packages all needed packages the most important packages is the ",(0,i.kt)("inlineCode",{parentName:"li"},"super_up_core")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"s_constants.dart")," in\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/src"))),(0,i.kt)("h3",{id:"lest-explain-packages"},"Lest explain packages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"s_translate")," contains all arb files for ",(0,i.kt)("inlineCode",{parentName:"p"},"super_up_app"),",",(0,i.kt)("inlineCode",{parentName:"p"},"super_up_admin")," projects")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"super_up_core")," contains all logic for super up app itself like shared http requests,utils,widgets (DONT UPDATE)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v_chat_firebase")," contains the firebase FCM only logic (DONT UPDATE)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v_chat_input_ui")," this contains the ui and logic for the message input (recorder,file selector,location picker)\n",(0,i.kt)("img",{src:a(6889).Z,width:"527",height:"74"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v_chat_media_editor")," this contains the ui of media editor\n",(0,i.kt)("img",{src:a(767).Z,width:"526",height:"1065"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v_chat_message_page")," this contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui & logic")," of message page\n",(0,i.kt)("img",{src:a(5251).Z,width:"530",height:"997"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v_chat_room_page")," this contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui & logic")," of chat page\n",(0,i.kt)("img",{src:a(2180).Z,width:"531",height:"1060"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"v_chat_sdk_core")," contains all logic for v_chat app itself like shared http requests, socket,notifications (DONT\nUPDATE)"))),(0,i.kt)("h3",{id:"change-app-namepackagelogo"},"Change app name,package,logo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"each app must have ",(0,i.kt)("inlineCode",{parentName:"li"},"unique")," package name so you must change it! to be accepted in the stores"),(0,i.kt)("li",{parentName:"ul"},"this step should be done first before connect firebase"),(0,i.kt)("li",{parentName:"ul"},"we will use this package ",(0,i.kt)("a",{parentName:"li",href:"https://pub.dev/packages/rename"},"rename")),(0,i.kt)("li",{parentName:"ul"},"install by ",(0,i.kt)("inlineCode",{parentName:"li"},"flutter pub global activate rename")),(0,i.kt)("li",{parentName:"ul"},"to change package name ",(0,i.kt)("inlineCode",{parentName:"li"},"flutter pub global run rename --bundleId com.vchatsdk.vnotestarter"),"\nExample => ",(0,i.kt)("inlineCode",{parentName:"li"},"pub global run rename --bundleId com.XXXXXXX.XXXXXX")),(0,i.kt)("li",{parentName:"ul"},"to rename the app use ",(0,i.kt)("inlineCode",{parentName:"li"},'flutter pub global run rename --appname "YOUR APP NAME"')),(0,i.kt)("li",{parentName:"ul"},"to update logo just update the ",(0,i.kt)("inlineCode",{parentName:"li"},"logo.png")," in assets folder the logo must be ",(0,i.kt)("inlineCode",{parentName:"li"},".png")),(0,i.kt)("li",{parentName:"ul"},"then run the code in the super_up_app ",(0,i.kt)("inlineCode",{parentName:"li"},"flutter pub run flutter_launcher_icons:main")),(0,i.kt)("li",{parentName:"ul"},"then this command ",(0,i.kt)("inlineCode",{parentName:"li"},"dart run flutter_native_splash:create"))),(0,i.kt)("h3",{id:"connect-firebase"},"Connect firebase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recommend to user firebase flutter CLI which its new tool to make the firebase base connect straightforward"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/flutter/setup?platform=android"},"android")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/flutter/setup?platform=ios"},"ios")),(0,i.kt)("li",{parentName:"ul"},"You can connect it easily be firebase follow up this ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=G-mbqiE87Lw"},"video")),(0,i.kt)("li",{parentName:"ul"},"CLI ",(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/flutter/setup?platform=ios#install-cli-tools"},"tool"))),(0,i.kt)("h3",{id:"sconstants"},"SConstants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This file inside packages in ","[super_up_core]"," in ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/src/s_constants.dart")),(0,i.kt)("li",{parentName:"ul"},"This file contains the configuration of the app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'abstract class SConstants {\n  ///your super up base domain url\n  ///like this (example.com) not start https// or any sub domains example [superupdev.com] or server ip with port like [12.xxx.xxx:80]\n  /// case of you use server ip just put the server ip connected to the port [http://ip:port]\n  static const _productionBaseUrl = "superupdev.online";\n\n  ///your app name\n  static const appName = "Superup";\n\n  ///android and ios admob ids [https://developers.google.com/admob/flutter/quick-start] [https://developers.google.com/ad-manager/mobile-ads-sdk/flutter/quick-start]\n  static const androidAdUnitId = "ca-app-pub-3940256099942544/6300978111";\n  static const iosAdUnitId = "ca-app-pub-3940256099942544/2934735716";\n\n  ///setup video and voice calls [https://agora.io]\n  static const agoraAppId = "------------------------";\n\n  ///change this to your google maps api key to enable google maps location picker\n  static const googleMapsApiKey = "AIzaSyAP---------------------";\n\n  ///update this url to share the app for others\n  static const googlePlayUrl =\n      "https://play.google.com/store/apps/details?id=com.app.superup";\n  static const appleStoreUrl = "https://testflight.apple.com/join/F4tAbW5J";\n\n  ///get the onesignal id for push notifications [https://onesignal.com]\n  static const oneSignalAppId = "********-****-****-****-**************";\n\n  ///don\'t update update only if you use server ip just return your server ip with port [12.xxx.xxx:80/]\n  static String get baseMediaUrl {\n    ///if you dont setup domain yet you can return the server ip like this [return Uri.parse("http://ip:port/");]\n    return "https://api.$_productionBaseUrl/";\n  }\n\n  ///don\'t update update only if you use server ip just return your server ip with port [12.xxx.xxx:80/api/v1]\n  static Uri get sApiBaseUrl {\n    ///if you dont setup domain yet you can return the server ip like this [return Uri.parse("http://ip:port/api/v1");]\n    return Uri.parse("https://api.$_productionBaseUrl/api/v1");\n  }\n}\n')),(0,i.kt)("h3",{id:"add-more-language"},"Add more language"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can add new language by just open the ","[s_translation]"," package"),(0,i.kt)("li",{parentName:"ul"},"And inside ",(0,i.kt)("inlineCode",{parentName:"li"},"lib/i18n")," create new file its name should follow the"),(0,i.kt)("li",{parentName:"ul"},"Standard of ",(0,i.kt)("inlineCode",{parentName:"li"},"intl_short language code.arb"),".arb"),(0,i.kt)("li",{parentName:"ul"},"Inside this file copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"intl_en.arb")," and translate only the values and dont touch the key of the map"),(0,i.kt)("li",{parentName:"ul"},"Then, while you run the app, the new language will be added, and it will appears in the selections")),(0,i.kt)("h3",{id:"ads"},"Ads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"get the ids from these urls get banner id for ios and android")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"android and ios admob\nids ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/admob/flutter/quick-start"},"quick-start"),"  ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/ad-manager/mobile-ads-sdk/flutter/quick-start"},"mobile-ads-sdk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"dont forget to update the android ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATION_ID")," not unit id be ",(0,i.kt)("inlineCode",{parentName:"p"},"careful")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\n<meta-data\n        android:name="com.google.android.gms.ads.APPLICATION_ID"\n        android:value="ca-app-pub-YOUR KEY HERE!"/>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"put your android appId for ads here ",(0,i.kt)("inlineCode",{parentName:"li"},"android:value=")),(0,i.kt)("li",{parentName:"ul"},"for Ios update the ",(0,i.kt)("inlineCode",{parentName:"li"},"ios/Runner/Info.plist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"<key>GADApplicationIdentifier</key>\n<string>ca-app-pub-YOUR KEY HERE!</string>\n")))),(0,i.kt)("h3",{id:"agoraio"},"Agora.io"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create agora app and enable it copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"appId")," and enable"),(0,i.kt)("li",{parentName:"ul"},"Setup video and voice calls ",(0,i.kt)("a",{parentName:"li",href:"https://agora.io"},"agora"),(0,i.kt)("inlineCode",{parentName:"li"},'Static const agoraAppId = "------------------------";'),(0,i.kt)("img",{src:a(6089).Z,width:"773",height:"789"})),(0,i.kt)("li",{parentName:"ul"},"enable the ",(0,i.kt)("inlineCode",{parentName:"li"},"Secondary Certificate"))),(0,i.kt)("h3",{id:"google-api-key"},"Google api key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get google api ",(0,i.kt)("a",{parentName:"li",href:"https://developers.google.com/admob/flutter/quick-start"},"key")," and enable all options like ",(0,i.kt)("inlineCode",{parentName:"li"},"search"),"\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"GEO")," locations for android and ios"),(0,i.kt)("li",{parentName:"ul"},"Don't forget to update the android ",(0,i.kt)("inlineCode",{parentName:"li"},"android/app/src/main/AndroidManifest.xml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\n<meta-data\n        android:name="com.google.android.geo.API_KEY"\n        android:value="YOUR API_KEY HERE!"/>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"and for ios"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ios/Runner/AppDelegate.swift")),(0,i.kt)("li",{parentName:"ul"},"GMSServices.provideAPIKey(",(0,i.kt)("inlineCode",{parentName:"li"},"YOUR API_KEY HERE!"),")")),(0,i.kt)("h3",{id:"notifications-ios-apns"},"Notifications iOS (APNS)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login to your Apple Developer Account,(if you don\u2019t have, you need to create one to be able to test, publish ios app).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles > Keys >")," Add New from the left menu."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8743).Z,width:"908",height:"313"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Register a New key."),(0,i.kt)("li",{parentName:"ul"},"Set the key name as ",(0,i.kt)("inlineCode",{parentName:"li"},"FirebaseAPNS"),"."),(0,i.kt)("li",{parentName:"ul"},"Tick \u201cApple Push Notification Services (APNs)\u201d"),(0,i.kt)("li",{parentName:"ul"},"Click Continue to register it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(1821).Z,width:"910",height:"465"})),(0,i.kt)("li",{parentName:"ul"},"Once the key is registered follow below steps:"),(0,i.kt)("li",{parentName:"ul"},"Copy the Team ID (keep it aside)"),(0,i.kt)("li",{parentName:"ul"},"Download the Auth key File (keep it aside)"),(0,i.kt)("li",{parentName:"ul"},"Copy the Key ID (keep it aside)"),(0,i.kt)("li",{parentName:"ul"},"Click \u201cDone\u201d to complete."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(1815).Z,width:"912",height:"435"})),(0,i.kt)("li",{parentName:"ul"},"Open Firebase Dashboard > Project Settings"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(8436).Z,width:"526",height:"406"})),(0,i.kt)("li",{parentName:"ul"},"Click on \u201cCloud Messaging\u201d tab. For the iOS app, click \u201cUpload\u201d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(5958).Z,width:"925",height:"601"})),(0,i.kt)("li",{parentName:"ul"},"Click on \u201cBrowse\u201d to upload the recently downloaded Auth key file."),(0,i.kt)("li",{parentName:"ul"},"Paste the Key ID"),(0,i.kt)("li",{parentName:"ul"},"Paste the Team ID"),(0,i.kt)("li",{parentName:"ul"},"Click upload to register it.\n",(0,i.kt)("img",{src:a(9447).Z,width:"911",height:"555"})),(0,i.kt)("li",{parentName:"ul"},"All done now with ios ",(0,i.kt)("inlineCode",{parentName:"li"},"notifications"))),(0,i.kt)("h3",{id:"how-to-update-theme"},"how to update theme"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"dark")," theme use it already inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"main.dart")," just update it  ",(0,i.kt)("inlineCode",{parentName:"li"},"dont delete it!")),(0,i.kt)("li",{parentName:"ul"},"Of course you can update the theme direct from the code if you have much experience")),(0,i.kt)("h4",{id:"first-message-page"},"First message page"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"darkTheme: ThemeData(\n          extensions: [\n            VMessageTheme.dark().copyWith(\n            ///see  options!\n            ),\n          ],\n        ),\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"light")," theme use")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   theme: ThemeData(\n            extensions: [\n                 VMessageTheme.dark().copyWith(\n                   ///see options!\n            ),\n            ],\n          ),\n")),(0,i.kt)("h4",{id:"second-chats-room-page"},"second Chats Room page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"dark")," theme use")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"darkTheme: ThemeData(\n          extensions: [\n            VRoomTheme.light().copyWith(\n              ///see  options!\n   \n              ),\n          ],\n        ),\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for ",(0,i.kt)("inlineCode",{parentName:"li"},"light")," theme use")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   theme: ThemeData(\n            extensions: [\n            VRoomTheme.light().copyWith(\n              ///see options!\n     \n              ),\n            ],\n          ),\n")),(0,i.kt)("h3",{id:"one-signal"},"one signal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get the onesignal id for push notifications ","[https://onesignal.com]"," see flutter docs"),(0,i.kt)("li",{parentName:"ul"},"then in ",(0,i.kt)("inlineCode",{parentName:"li"},"apps/super_up_app/lib/v_chat_v2/v_chat_config.dart")," enable OneSignal push by add this ",(0,i.kt)("inlineCode",{parentName:"li"},"constructor")),(0,i.kt)("li",{parentName:"ul"},"don't forget to update the app id in ",(0,i.kt)("inlineCode",{parentName:"li"},"SConstants.oneSignalAppId"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      vPush: VPush(\n        enableVForegroundNotification: true,\n        vPushConfig: const VLocalNotificationPushConfig(),\n        ///if you support fcm push notifications\n        fcmProvider: VChatFcmProver(),\n        ///if you support OneSignal push notifications **THIS**\n        oneSignalProvider: VChatOneSignalProver(\n          appId: SConstants.oneSignalAppId,\n        ),\n      ),\n")),(0,i.kt)("p",null,":::fin\nIf firebase is available into your country its recommended to use it\nfor notifications push which its 100% free service with no limits!\n:::"),(0,i.kt)("h3",{id:"admin-panel"},"Admin panel"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"super up introduce admin panel to control the app"),(0,i.kt)("li",{parentName:"ol"},"there are two types of login admin login and viewer login"),(0,i.kt)("li",{parentName:"ol"},"you will have two passwords for the admin one for admin another for viewer"),(0,i.kt)("li",{parentName:"ol"},"admin can do anything viewer can only see the data he cant edit it"),(0,i.kt)("li",{parentName:"ol"},"you can set the password for admin and viewer from the ",(0,i.kt)("inlineCode",{parentName:"li"},".env.production")," file in the backend files this file is\nhidden\n",(0,i.kt)("inlineCode",{parentName:"li"},'#Admin panel passwords be carfaul\nControlPanelAdminPassword= "xxxxxxxxxxxxx" # put strong password for admin who can edit and update any thing in the app\nControlPanelAdminPasswordViewer= "xxxxxxxxxx-xxxx" # put strong password for admin that can only read(see ,users data,chats data etc...) he cannot update any thing')),(0,i.kt)("li",{parentName:"ol"},"You can change it any tine you want to re deploy your app!")),(0,i.kt)("h3",{id:"publish"},"publish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"open terminal inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"super_up_app")," folder")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"for android, you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"flutter build apk --split-per-abi")," for\nstore ",(0,i.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/deployment/android"},"publish")),(0,i.kt)("li",{parentName:"ol"},"for web, you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"flutter build web --web-renderer html")," see backend section for how to upload"),(0,i.kt)("li",{parentName:"ol"},"for ios, you can run ",(0,i.kt)("a",{parentName:"li",href:"https://docs.flutter.dev/deployment/ios"},"ios"))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Doesn't update any package version unless you know what to do")))}m.isMDXComponent=!0},6089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/agora-c2b2cbb8f389dd14457f4ea8724fc022.png"},3232:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/flutter_project_strc-0c4df074146eb0cfaffaf108320e301b.png"},2180:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pk_chats-fb55830296ec2750b7234be36ca604d9.png"},767:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pk_media_editor-14e102927b3953e1f1a005e42f81446a.png"},5251:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pk_message-64b799547e2de8bbbd63cb5ccf7cbcd2.png"},6889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pk_text_field-8882bfd10875981efdcaa6e3ead9d9cd.png"},8743:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcode1-9969eddc9f1ceaf17ed418a66a404d50.png"},1821:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcode2-0423ee49c4968fade991f06ad0d1308f.png"},1815:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcode3-42f569236b056bad1c2646e9492e976a.png"},8436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcode4-036d089db934a041ea0bb32f7f3cffcf.png"},5958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcode5-b7ec7e371d4027d1ac47312ed6db7f1e.png"},9447:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xcode6-0f8b5e0c3967bb75e17357b622bd6310.png"}}]);