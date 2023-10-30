---
sidebar_position: 2
---

# Flutter

- project structure in split packages
- To run the project first activate `melos`

```
dart pub global activate melos
```

-then run this commend in the root of the project

```
melos bs
```

- this code will run pub get for you in all packages
  ![](../img/flutter_project_strc.png)
- we have the following
- apps (`super_up_admin`) this is the admin panel
- apps (`super_up_app`) this app you should run it
- packages all needed packages the most important packages is the `super_up_core` the `s_constants.dart` in
  the `lib/src`

### Change app name,package,logo

- each app must have `unique` package name so you must change it! to be accepted in the stores
- this step should be done first before connect firebase
- we will use this package [rename](https://pub.dev/packages/rename)
- install by `flutter pub global activate rename`
- to change package name `flutter pub global run rename --bundleId com.vchatsdk.vnotestarter`
  Example => `pub global run rename --bundleId com.XXXXXXX.XXXXXX`
- to rename the app use `flutter pub global run rename --appname "YOUR APP NAME"`
- to update logo just update the `logo.png` in assets folder the logo must be `png`
- then run the code in the super_up_app `flutter pub run flutter_launcher_icons:main`

### Connect firebase
- Recommend to user firebase flutter CLI which its new tool to make the firebase base connect straightforward
- [android](https://firebase.google.com/docs/flutter/setup?platform=android)
- [ios](https://firebase.google.com/docs/flutter/setup?platform=ios)
- You can connect it easily be firebase follow up this [video](https://www.youtube.com/watch?v=G-mbqiE87Lw)
- CLI [tool](https://firebase.google.com/docs/flutter/setup?platform=ios#install-cli-tools)

### SConstants

- This file inside packages in [super_up_core] in `lib/src/s_constants.dart`
- This file contains the configuration of the app

```dart
abstract class SConstants {
  ///your super up base domain url
  ///like this (example.com) not start https// or any sub domains example [superupdev.com]
  static const _productionBaseUrl = "superupdev.online";

  ///your app name
  static const appName = "Superup";

  ///android and ios admob ids [https://developers.google.com/admob/flutter/quick-start] [https://developers.google.com/ad-manager/mobile-ads-sdk/flutter/quick-start]
  static const androidAdUnitId = "ca-app-pub-3940256099942544/6300978111";
  static const iosAdUnitId = "ca-app-pub-3940256099942544/2934735716";

  ///setup video and voice calls [https://agora.io]
  static const agoraAppId = "------------------------";

  ///change this to your google maps api key to enable google maps location picker
  static const googleMapsApiKey = "AIzaSyAP---------------------";

  ///update this url to share the app for others
  static const googlePlayUrl =
      "https://play.google.com/store/apps/details?id=com.app.superup";
  static const appleStoreUrl = "https://testflight.apple.com/join/F4tAbW5J";

  ///get the onesignal id for push notifications [https://onesignal.com]
  static const oneSignalAppId = "********-****-****-****-**************";

  ///don't update
  static String get feedUrl => "https://$_productionBaseUrl/apps/appcast.xml";

  ///don't update
  static String get baseMediaUrl {
    return "https://api.$_productionBaseUrl/";
  }

  ///don't update
  static Uri get sApiBaseUrl {
    return Uri.parse("https://api.$_productionBaseUrl/api/v1");
  }
}
```

### Add more language

- You can add new language by just open the [s_translation] package
- And inside `lib/i18n` create new file its name should follow the
- Standard of `intl_short language code.arb`.arb
- Inside this file copy the `intl_en.arb` and translate only the values and dont touch the key of the map
- Then, while you run the app, the new language will be added, and it will appears in the selections

### Ads

- get the ids from these urls get banner id for ios and android
- android and ios admob
  ids [quick-start](https://developers.google.com/admob/flutter/quick-start)  [mobile-ads-sdk](https://developers.google.com/ad-manager/mobile-ads-sdk/flutter/quick-start)
- dont forget to update the android `android/app/src/main/AndroidManifest.xml`

- `APPLICATION_ID` not unit id be `careful`

```xml

<meta-data
        android:name="com.google.android.gms.ads.APPLICATION_ID"
        android:value="ca-app-pub-YOUR KEY HERE!"/>
```

- put your android appId for ads here `android:value=`
- for Ios update the `ios/Runner/Info.plist`
- ```
  <key>GADApplicationIdentifier</key>
  <string>ca-app-pub-YOUR KEY HERE!</string>
  ```

### Agora.io

- Create agora app and enable it copy the `appId` and enable
- Setup video and voice calls [agora](https://agora.io)
  `Static const agoraAppId = "------------------------";`
  ![](../img/agora.png)
- enable the `Secondary Certificate`

### Google api key

- Get google api [key](https://developers.google.com/admob/flutter/quick-start) and enable all options like `search`
  and `GEO` locations for android and ios
- Don't forget to update the android `android/app/src/main/AndroidManifest.xml`

```xml

<meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR API_KEY HERE!"/>
```

- and for ios
- `ios/Runner/AppDelegate.swift`
- GMSServices.provideAPIKey(`YOUR API_KEY HERE!`)

### Notifications  iOS (APNS)

- Login to your Apple Developer Account,(if you don’t have, you need to create one to be able to test, publish ios app).

- Navigate to `Certificates, Identifiers & Profiles > Keys >` Add New from the left menu.

![](../img/xcode1.png)

- Register a New key.
- Set the key name as “FirebaseAPNS“.
- Tick “Apple Push Notification Services (APNs)”
- Click Continue to register it.
  ![](../img/xcode2.png)
- Once the key is registered follow below steps:
- Copy the Team ID (keep it aside)
- Download the Auth key File (keep it aside)
- Copy the Key ID (keep it aside)
- Click “Done” to complete.
  ![](../img/xcode3.png)
- Open Firebase Dashboard > Project Settings
  ![](../img/xcode4.png)
- Click on “Cloud Messaging” tab. For the iOS app, click “Upload”.
  ![](../img/xcode5.png)
- Click on “Browse” to upload the recently downloaded Auth key file.
- Paste the Key ID
- Paste the Team ID
- Click upload to register it.
  ![](../img/xcode6.png)
- All done now with ios `notifications`

### how to update theme

- For `dark` theme use it already inside the `main.dart` just update it  `dont delete it!`

#### First message page

``` 
darkTheme: ThemeData(
          extensions: [
            VMessageTheme.dark().copyWith(
            ///see other options!
              scaffoldDecoration:  BoxDecoration(
                color: Colors.green
              ),
              receiverTextStyle: TextStyle(),
              receiverBubbleColor: Colors.green
            ),
          ],
        ),
```

- for `light` theme use

```
   theme: ThemeData(
            extensions: [
                 VMessageTheme.dark().copyWith(
                   ///see other options!
              scaffoldDecoration:  BoxDecoration(
                color: Colors.green
              ),
              receiverTextStyle: TextStyle(),
              receiverBubbleColor: Colors.green
            ),
            ],
          ),
```

#### second Chats Room page

- for `dark` theme use

``` 
darkTheme: ThemeData(
          extensions: [
            VRoomTheme.light().copyWith(
              ///see other options!
                scaffoldDecoration: VRoomTheme.light()
                    .scaffoldDecoration
                    .copyWith(color: lightColorScheme.background),
              ),
          ],
        ),
```

- for `light` theme use

```
   theme: ThemeData(
            extensions: [
            VRoomTheme.light().copyWith(
              ///see other options!
                scaffoldDecoration: VRoomTheme.light()
                    .scaffoldDecoration
                    .copyWith(color: lightColorScheme.background),
              ),
            ],
          ),
```

### one signal

- Get the onesignal id for push notifications [https://onesignal.com] see flutter docs
- then in `apps/super_up_app/lib/v_chat_v2/v_chat_config.dart` enable OneSignal push by add this `constructor`
- dont forget to update the app id in `SConstants.oneSignalAppId`

``` 
      vPush: VPush(
        enableVForegroundNotification: true,
        vPushConfig: const VLocalNotificationPushConfig(),
        ///if you support fcm push notifications
        fcmProvider: VChatFcmProver(),
        ///if you support OneSignal push notifications **THIS**
        oneSignalProvider: VChatOneSignalProver(
          appId: SConstants.oneSignalAppId,
        ),
      ),
```

### publish

- open terminal inside the `super_up_app` folder

1. for android, you can run `flutter build apk --split-per-abi` for
   store [publish](https://docs.flutter.dev/deployment/android)
2. for web, you can run `flutter build web --web-renderer html`
3. for ios, you can run [ios](https://docs.flutter.dev/deployment/ios)

:::danger
Doesn't update any package version unless you know what to do
:::

