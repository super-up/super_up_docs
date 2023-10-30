---
sidebar_position: 3
---

# Backend

### Requirements

1. Install Node.js (version `v16.x` or to `19.x`) and npm. Check the Node.js version using `node -v`.
2. Install only if you not `docker user` cross-env `npm i -g cross-env` for managing production or development
   environments and pm2 for manage production deploy by `npm i -g pm2`
   CLI (`npm install -g @nestjs/cli`).

3. Install [MongoDB](https://www.mongodb.com/try/download/community-kubernetes-operator) (minimum `v4.4`,
   recommended `v6`).

### .env file

```
DB_URL="YOUR_MONGO_URL"
JWT_SECRET="STRONG_PASSWORD"

issuer="your gmail"
audience="your gmail"

NODE_ENV="production" # dont update it
EDIT_MODE ="false" # set to false
ignoreEnvFile="false"  # set to true if you will inject the env values from system os
PORT=80 //exposed port
ControlPanelAdminPassword= "super-up-strong-password" # put strong password for admin apis

isOneSignalEnabled ="false" # set to true if you can provide oneSignalAppId and oneSignalApiKey to enable push by onesignal
isFirebaseFcmEnabled ="false" # set to true if you provide the firebase admin.json file
oneSignalAppId="xxxxxxxxx-xxxxx-xxxxx-xxxx-xxxxxxxxx"
oneSignalApiKey="xxxxxxxxx"

# SET THE Email data to let use use forget password OTP
EMAIL_HOST="EMAIL HOST FROM THE PROVIDER COMPANY"
EMAIL_USER="YOUR EMAIL USER"
EMAIL_PASSWORD="EMAIL USER PASSWORD"

# SET AGORA API KEYS
AGORA_APP_ID=""
# Get this from agora app console `Primary Certificate` value
AGORA_APP_CERTIFICATE=""
```

### privacy-policy

- You can update your privacy privacy page in the source code inside
- `http://localhost:3000/privacy-policy.html` this will be the `privacy-policy` of your app
- You can edit it inside `public/privacy-policy.html`
- You can edit the home inside `public/home.html` you can access it `http://localhost:3000`

### firebase admin file

1. Make sure the firebase account is the same as the one used in flutter app.
2. To ensure chat notifications work properly, follow [this video](https://www.youtube.com/watch?v=cXOzbKDXTh0) to
   obtain the `firebase.adminsdk.json` file.
3. Replace the existing `firebase.adminsdk.json` file with your new one.
4. open your account in `firebase` then enable the `Cloud Messaging API (Legacy)` from
![](../img/firebase1.png)
![](../img/firebase2.png)

### Obtaining OneSignal Keys

1. Create a Firebase account and follow [this video](https://www.youtube.com/watch?v=FOkgfsTwvC4) to obtain OneSignal
   keys.
2. Update the following fields with your OneSignal keys:

   ```
   oneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
   oneSignalApiKey="xxxxxxxxxxxx"
   ```

### Running the Code (Without Docker)

1. Open a terminal in the `backend` root folder.
2. Run `npm i` or `npm i --force` if issues occur.
3. Generate a `dist` folder `npm run build`.
4. Run `npm run start:prod`. for live console logs if you run in production mode. in your vps server then you should
   run `pm2 start ecosystem.config.js --only normal --env production`. to see logs run `pm2 logs`
5. If you see `app run in production,` your code is production-ready.
6. Access the development server at `localhost:80` and production server at port `80`. Update the port
   in `.env.production` if necessary.
7. Update the `PORT` in the `.env` file if using Docker, and ensure you update the environment variable in the OS (env).

### Deploy web

1. run the flutter code to build the web version inside the `super_up_app` folder
2. run this code `flutter build web --web-renderer html`
3. now you can find the html folder inside the build folder you need to upload it to your server
4. your server can your vps server you can use nginx to deploy your web code and admin code

### Running the Code (With Docker)

1. Install [Docker](https://www.docker.com) and Docker Compose.
2. update `.env.production` this keys from `mongodb://127.0.0.1:27017/v_chat_sdk_v2`
   to `mongodb://v_mongodb:27017/v_chat_sdk_v2`
3. Run the `Dockerfile` if Docker is already installed on your system. Note that this only sets up v_chat_sdk and
   doesn't include MongoDB or Redis. You need to manage these separately OR.
4. Use a `compose file` witch manage all dependency together.
5. Run `docker-compose up` to start the containers and view logs, or run `docker-compose up -d` to run in the
   background.

### Common Errors

1. If you encounter the error `ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist`, it means NestJS
   cannot read your `.env.production` file.

    - To fix this, ensure you have injected the environment variable or that `.env.production` exists in the root of the
      project. It may be ignored by .git.

2. If you see the
   error `The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services`
   ,it means you have enabled FCM but have not [configured](https://www.youtube.com/watch?v=cXOzbKDXTh0) it.

:::tip Contact me
Iam offer paid full server side setup
Support email`hatemragapdev@gmail.com`
Or on Skype at `live:.cid.607250433850e3a6`
:::