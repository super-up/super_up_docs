---
sidebar_position: 4
---

# Community FAQ

### How Users Register

- Users can register only by their `Email` and `password`
- Data collected from user while register is `Device Data` User location from his ip
- `Email` `Password` `Name` is required while user registers `bio`,`image` is Optional
- Users can Reset their password by sending Email OTP
- Data collected from user while register is `Device Data` User location from his ip
- `Email` `Password` `Name` is required while user registers `bio`,`image` is Optional
- Users can Reset their password by sending Email OTP

### Ios Run Bug
If you face this 
```error building IOS. What should I do if I have the following problem? [Failed to install the app on the device.Domain: The parent bundle has the same identifier]```
- this comes from the ShareExtension in xcode select it under the target and Runner update the ShareExtension bundle id it should be the same as your bundle id and attach to it .ShareExtension and it will works
- For more info, check out this [page](https://github.com/ShoutSocial/share_handler)
  ![image](https://github.com/hatemragab/v_chat_sdk/assets/37384769/c5e3b179-1b5f-4ee1-bd57-d8a1d431ec95)

### New features

- I have built this app to be suitable for most of all users as I can
- So sure there are some features you will need it for your business this
- See more details about your custom features

### Phone Login

- As this is whatsapp clone but i use the Email and password for login because
- I see this will be `suitable` for all users since I dont need to depends on firebase for `Auth`!

 

### Why not to use webRTC for calls

- I have already tried to add webRTC and already works, but I found the following
- it needs a very expensive VPS server and needs to make it scalable and distribute it as CDN for each country
- To get the most good video and voice quality, and it needs a lot of configurations since there
- Are pre-configured service like agora.io with a good price, and it has 1K minutes free for each month
- And it is more stable and scalable with a high quality, So I switch to it!



### Admin panel

- Admin panel in the first version it need more work in next updates sure i will add more user management stay tuned!

### Desktop Voice recorder

- Since there is no flutter package support Desktop voice reorder i have disabled it for now next updates i will make it
  works

### Bug while releasing android (Your project requires a newer version of kotlin)
- `Fixed in last release`
- This bug isn't related to the kotlin (^_^)
- You need to configure the android for release generate
- In the android folder create `key.properties` and fill it out with the data of your `jks` key
- Create your `jks`

```
storePassword=your storePassword
keyPassword=your keyPassword
keyAlias=your keyAlias
storeFile=/Users/hatemragap/super-up-keystore.jks
```

- if you dont use the `jks` and not publish to google play you can simply do the following
- open `android/app/build.gradle`
- Replace the  [following](https://docs.flutter.dev/deployment/android#create-an-upload-keystore)

```
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
```

to Delete the `signingConfigs{}`

```
  buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig signingConfigs.debug
        }
    }
```