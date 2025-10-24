---
sidebar_position: 3
---

# Backend (Nodejs)

---

### Requirements

1. Experience with Ubuntu server deployment is recommended (or contact [me](mailto:hatemragapdev@gmail.com)).
2. Install Node.js (current recommended: `v23.x`) and npm. Check with `node -v`.
3. If not using Docker: install `pm2` (`npm i -g pm2`) and `@nestjs/cli` (`npm i -g @nestjs/cli`).

4. Install [MongoDB](https://www.mongodb.com/try/download/community) (minimum `v5`, recommended `v6`).

### .env file

```
# Mongo connection (local, Docker, or remote)
DB_URL="mongodb://127.0.0.1:27017/super_up"

# Security (do not change after launch)
JWT_SECRET="CHANGE-ME-STRONG"
issuer="you@example.com"
audience="you@example.com"

# Runtime
NODE_ENV="production"
EDIT_MODE="false"
ignoreEnvFile="false"  # set true if injecting via OS env
PORT=3000

# Admin panel passwords
ControlPanelAdminPassword="CHANGE-ME-ADMIN"
ControlPanelAdminPasswordViewer="CHANGE-ME-VIEWER"

# Push providers
isOneSignalEnabled="false"
isFirebaseFcmEnabled="false"
oneSignalAppId=""
oneSignalApiKey=""

# Email (OTP)
EMAIL_HOST=""
EMAIL_USER=""
EMAIL_PASSWORD=""

# Agora (calls)
AGORA_APP_ID=""
AGORA_APP_CERTIFICATE=""
```

### Privacy policy

- Update the privacy policy HTML at `public/privacy-policy.html` (served at `/privacy-policy.html`).
- Update the landing HTML at `public/home.html` (served at `/`).

### Firebase admin file

1. Make sure the Firebase project matches the Flutter app configuration.
2. To ensure chat notifications work properly, follow [this video](https://www.youtube.com/watch?v=cXOzbKDXTh0) to
   obtain the `firebase.adminsdk.json` file.
3. Replace the existing `firebase.adminsdk.json` in backend with your new one.

### Setting up Agora (calls)

This guide will walk you through setting up Agora for your application, retrieving the necessary keys, and ensuring proper configuration to enable live calls.

---

- Step 1: Create and Configure Your Agora Project

1. **Log in to the Agora Console**

   - Navigate to the [Agora Console](https://console.agora.io/).
   - Log in or create a new account if you don’t have one.

2. **Create a New Project**

   - Go to the **Projects** section.
   - Click **Create** to add a new project.
   - Provide a name for your project and ensure you select the **Live** mode to enable live broadcasting features.

3. **Enable Primary Certificate**
   - After creating your project, go to the **Project Management** page.
   - Locate your project and click on **Edit**.
   - Ensure that the **Primary Certificate** is enabled. This is essential for secure communication and authentication.

---

- Step 2: Retrieve Your Agora Keys

1. **Locate Your Project Keys**

   - In the Agora Console, navigate to the **Project Details** section of your newly created project.

2. **Get the `AGORA_APP_ID`**

   - Copy the `App ID` value. This is your unique project identifier.

3. **Get the `AGORA_APP_CERTIFICATE`**
   - Scroll down to find the **Primary Certificate** section.
   - Copy the value under **Primary Certificate**. This will be used for token generation and secure authentication.

**Important Note:**
Ensure you handle the `Primary Certificate` securely and never expose it publicly to prevent unauthorized access to your application.

---

- Step 3: Update Your `.env` File

1. Open the `.env` file in your project’s root directory.

2. Add or update the following keys with the values you retrieved from the Agora Console:

   ```env
   AGORA_APP_ID=your_agora_app_id_here
   AGORA_APP_CERTIFICATE=your_agora_certificate_here
   ```

3. Ensure the values match exactly with those from the Agora Console. Any mismatch will prevent calls from working correctly.

---

- Step 4: Ensure Consistency in Your Flutter App
  If you are using Flutter for the frontend,
  inside the flutter `s_constants` file the value of `agoraAppId`

### Obtaining OneSignal keys

1. Create a Firebase account and follow [this video](https://www.youtube.com/watch?v=FOkgfsTwvC4) to obtain OneSignal
   keys.
2. Update the following fields with your OneSignal keys:

   ```
   oneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
   oneSignalApiKey="xxxxxxxxxxxx"
   ```

### Running the code (without Docker)

- You should be familiar with ubuntu server setup

1. Install Ubuntu Server 22.04+ or 24.04
2. Open a terminal in the `backend` root folder.
3. Run `npm ci` (or `npm i --force` if needed).
4. Generate a `dist` folder `npm run build`.
5. Run `npm run start:prod` to verify logs locally.
6. For background serving in production, use PM2:
   `pm2 start ecosystem.config.js --only normal --env production` and view logs via `pm2 logs`.
7. If you see `app run in production,` your code is production-ready.
8. Expose port via Nginx reverse proxy. See [Deployment](./deployment.md) for Nginx config with WebSocket support.
9. If using Docker, ensure `PORT` and env are injected properly.
10. For Nginx, include WebSocket headers in your server block:

```
 proxy_set_header Upgrade $http_upgrade;
 proxy_set_header Connection "upgrade";
 proxy_http_version 1.1;
 proxy_set_header Host $host;
 proxy_set_header X-Real-IP $remote_addr;
 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
 proxy_set_header X-Forwarded-Proto $scheme;
```

### Deploy web

1. run the flutter code to build the web version inside the `super_up_app` folder
2. run this code `flutter build web --web-renderer html`
3. now you can find the html folder inside the build folder you need to upload it to your server
4. Host the output on your VPS via Nginx. See [Deployment](./deployment.md).

### Deploy admin

1. run the flutter code to build the web version inside the `super_up_admin` folder
2. run this code `flutter build web --web-renderer html`
3. now you can find the html folder inside the build folder you need to upload it to your server
4. Host the output on your VPS via Nginx. See [Deployment](./deployment.md).

### Running the code (with Docker)

1. Install [Docker](https://www.docker.com) and Docker Compose.
2. Update `.env.production` `DB_URL` to `mongodb://myuser_xxx:mypassword_xxx@mongo:27017/super_up?authSource=admin` for compose.
3. Build the backend Dockerfile. Note: it only builds the backend service; MongoDB runs as a separate container, managed by compose.
   doesn't include MongoDB or Redis. You need to manage these separately OR.
4. Use a `compose file` witch manage all dependency together.
5. Run `docker-compose up` to start the containers and view logs, or run `docker-compose up -d` to run in the
   background.

### Running the code (with PM2)

- [pm2](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page) is a popular framework for run the nodejs applications in background with high performance
- You need first to install it by `npm install pm2@latest -g`
- You run the app is already ready to run with pm2 by run `npm run pm2`
- To see the logs in real time you can run `pm2 logs`

### AuthKey.p8

- This key is required to make calls for ios VOIP ring you need to get it from [apple](./flutter.md#notifications-ios-apns-and-voip)

### Common errors

1. If you encounter the error `ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist`, it means NestJS
   cannot read your `.env.production` file.

   - To fix this, ensure you have injected the environment variable or that `.env.production` exists in the root of the
     project. It may be ignored by .git.

2. Error `The default Firebase app does not exist...`: you enabled FCM but did not configure admin or Flutter side properly. Follow the linked video.

:::tip Contact me
I offer paid full server-side setup. See [Plans](support.md)
:::
