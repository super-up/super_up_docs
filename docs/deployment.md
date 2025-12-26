---
sidebar_position: 4
---

# Deployment (VPS)

This is a complete, production-focused deployment guide for your own VPS. Includes both non-Docker and Docker Compose paths, Nginx reverse proxy, WebSocket config, and free SSL.

## Plan your domains

- api subdomain (backend REST + WebSockets): `api.example.com`
- web app (Flutter web build): `web.example.com`
- admin dashboard (React SPA): `dashboard.example.com` or `admin.example.com`

Point DNS A records of these subdomains to your VPS public IP.

## Non‑Docker deployment (Ubuntu 22.04/24.04)

### 1) System packages

```bash
sudo apt update && sudo apt -y upgrade
sudo apt -y install nginx ufw git curl build-essential
```

### 2) Install MongoDB 6.0

```bash
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME)/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt -y install mongodb-org
sudo systemctl enable --now mongod
```

Create users:

```bash
mongosh <<'EOF'
use admin
db.createUser({user: "root", pwd: "CHANGE-ME-STRONG", roles: ["root"]})
use super_up
db.createUser({user: "appuser", pwd: "CHANGE-ME-STRONG", roles: [{role: "readWrite", db: "super_up"}]})
EOF
```

### 3) Install Node.js (recommended latest LTS/Current) + PM2

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.nvm/nvm.sh
nvm install 23
node -v
npm i -g pm2@latest
```

### 4) Backend setup (NestJS API)

Assume your backend lives at `/var/www/super-up/backend`.

```bash
sudo mkdir -p /var/www/super-up/backend
sudo chown -R $USER:$USER /var/www/super-up
cd /var/www/super-up/backend
```

Create `.env.production` (adjust to your values):

```env
DB_URL=mongodb://appuser:CHANGE-ME-STRONG@127.0.0.1:27017/super_up?authSource=super_up
JWT_SECRET=CHANGE-ME-STRONG
issuer=you@example.com
audience=you@example.com
NODE_ENV=production
EDIT_MODE=false
ignoreEnvFile=false
PORT=3000
ControlPanelAdminPassword=CHANGE-ME-ADMIN
ControlPanelAdminPasswordViewer=CHANGE-ME-VIEWER
isOneSignalEnabled=false
isFirebaseFcmEnabled=false
EMAIL_HOST=
EMAIL_USER=
EMAIL_PASSWORD=
AGORA_APP_ID=
AGORA_APP_CERTIFICATE=
```

Install, build, and run with PM2 cluster mode:

```bash
npm ci
npm run build

# Minimal PM2 ecosystem file (create ecosystem.config.js)
cat > ecosystem.config.js <<'JS'
module.exports = {
  apps: [
    {
      name: 'super-up-api',
      script: 'dist/main.js',
      cwd: '/var/www/super-up/backend',
      instances: 'max',
      exec_mode: 'cluster',
      env_production: { NODE_ENV: 'production', PORT: 3000 }
    }
  ]
}
JS

pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup systemd -u $USER --hp $HOME
```

### 5) Nginx reverse proxy (with WebSocket support)

API `api.example.com` → Node.js at `127.0.0.1:3000`:

```nginx
server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Flutter web (SPA) `web.example.com` serving built files at `/var/www/super-up/web`:

```nginx
server {
  listen 80;
  server_name web.example.com;
  root /var/www/super-up/web;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```

For the admin dashboard (React), see the [Deploy React Admin Dashboard](#deploy-react-admin-dashboard) section.

Enable sites and reload Nginx:

```bash
sudo mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
sudo tee /etc/nginx/sites-available/api.example.com >/dev/null < api.conf
sudo tee /etc/nginx/sites-available/web.example.com >/dev/null < web.conf
sudo ln -s /etc/nginx/sites-available/api.example.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/web.example.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 6) Free SSL (Let’s Encrypt)

```bash
sudo snap install core && sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx -d api.example.com -d web.example.com -d dashboard.example.com --redirect -m you@example.com --agree-tos -n
```

### 7) Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
```

### 8) Deploy Flutter Web App

Build and deploy the Flutter web app:

```bash
cd super_up_app
flutter build web --release --web-renderer html
sudo rsync -a build/web/ /var/www/super-up/web/
```

For the admin dashboard (React), see the [Deploy React Admin Dashboard](#deploy-react-admin-dashboard) section below.

## Docker Compose deployment

Directory layout (example):

```
/opt/super-up/
  backend/            # your NestJS backend project (has Dockerfile)
  docker-compose.yml
  .env
  mongo-init.js
  media/              # persistent uploads/media
```

`.env` (used by compose):

```env
DB_URL=mongodb://appuser:CHANGE-ME-STRONG@mongo:27017/super_up?authSource=admin
JWT_SECRET=CHANGE-ME-STRONG
NODE_ENV=production
PORT=3000
ControlPanelAdminPassword=CHANGE-ME-ADMIN
ControlPanelAdminPasswordViewer=CHANGE-ME-VIEWER
```

`mongo-init.js` (creates app DB user):

```js
db = db.getSiblingDB("super_up");
db.createUser({
  user: "appuser",
  pwd: "CHANGE-ME-STRONG",
  roles: [{ role: "readWrite", db: "super_up" }],
});
```

`docker-compose.yml`:

```yaml
version: "3.9"
services:
  mongo:
    image: mongo:6
    restart: unless-stopped
    volumes:
      - mongo_data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
    ports:
      - "127.0.0.1:27017:27017"

  api:
    build:
      context: ./backend
    environment:
      DB_URL: ${DB_URL}
      JWT_SECRET: ${JWT_SECRET}
      NODE_ENV: ${NODE_ENV}
      PORT: ${PORT}
      ControlPanelAdminPassword: ${ControlPanelAdminPassword}
      ControlPanelAdminPasswordViewer: ${ControlPanelAdminPasswordViewer}
    volumes:
      - ./media:/app/public/uploads
    depends_on:
      - mongo
    restart: unless-stopped
    ports:
      - "127.0.0.1:8080:3000" # expose API on 8080 locally

volumes:
  mongo_data:
```

Up the stack:

```bash
cd /opt/super-up
docker compose up -d --build
docker compose logs -f api | cat
```

Configure Nginx `api.example.com` to reverse proxy to `http://127.0.0.1:8080` with the same WebSocket headers shown earlier. SSL with Certbot is identical to non-Docker.

## Deploy React Admin Dashboard

The admin dashboard is a React + Vite SPA that connects to the backend API. Deploy it to `dashboard.example.com` (or `admin.example.com`).

### 1) Build the Dashboard

```bash
cd super_dashboard

# Install dependencies
pnpm install   # or npm install

# Create production .env
cat > .env.production <<'EOF'
VITE_API_URL=https://api.example.com/api/v1
VITE_MEDIA_URL=https://api.example.com
VITE_WS_URL=https://api.example.com
EOF

# Build for production
pnpm build   # outputs to dist/
```

### 2) Deploy to VPS

```bash
# Copy dist folder to server
rsync -avz dist/ user@your-vps:/var/www/super-up/dashboard/

# Or if building on server
cd /var/www/super-up/dashboard
git pull origin main
pnpm install
pnpm build
cp -r dist/* /var/www/super-up/dashboard-static/
```

### 3) Nginx Configuration

Create `/etc/nginx/sites-available/dashboard.example.com`:

```nginx
server {
    listen 80;
    server_name dashboard.example.com;
    root /var/www/super-up/dashboard;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript application/json;

    # Handle SPA routing - all routes serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets (JS, CSS, images) - 1 year
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache locale JSON files - 1 hour
    location /locales/ {
        expires 1h;
        add_header Cache-Control "public";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/dashboard.example.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 4) SSL Certificate

Add the dashboard domain to your Certbot command:

```bash
sudo certbot --nginx -d dashboard.example.com --redirect -m you@example.com --agree-tos -n
```

Or if you already have other domains:

```bash
sudo certbot --nginx --expand -d api.example.com -d web.example.com -d dashboard.example.com
```

### 5) Docker Deployment (Alternative)

The dashboard includes a Dockerfile for containerized deployment:

```bash
cd super_dashboard

# Build Docker image
docker build -t super-dashboard:latest .

# Run container
docker run -d \
  --name super-dashboard \
  -p 8081:80 \
  --restart unless-stopped \
  super-dashboard:latest
```

Add to your `docker-compose.yml`:

```yaml
services:
  # ... existing api and mongo services ...

  dashboard:
    build:
      context: ./dashboard
    restart: unless-stopped
    ports:
      - "127.0.0.1:8081:80"
```

Then configure Nginx to reverse proxy to `http://127.0.0.1:8081`:

```nginx
server {
    listen 80;
    server_name dashboard.example.com;

    location / {
        proxy_pass http://127.0.0.1:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Dashboard Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API endpoint | `https://api.example.com/api/v1` |
| `VITE_MEDIA_URL` | Media files base URL | `https://api.example.com` |
| `VITE_WS_URL` | WebSocket URL for realtime logs | `https://api.example.com` |

### Dashboard Login Credentials

The dashboard uses admin credentials configured in the backend `.env`:

- **Admin**: `ControlPanelAdminPassword` - full access
- **Viewer**: `ControlPanelAdminPasswordViewer` - read-only access

Default login endpoint: `POST /admin/auth/login`

## SuperUp App Versions

SuperUp is available in two authentication variants:

| Version | Auth Method | Description |
|---------|-------------|-------------|
| **Email Version** | Email + Password | Traditional email-based registration and login |
| **Phone OTP Version** | Phone + Firebase OTP | Phone number authentication via Firebase SMS verification |

### Email Version
- Users register with email and password
- Email verification supported
- Password reset via email
- No Firebase dependency for auth

### Phone OTP Version (Firebase)
- Users register with phone number
- OTP sent via Firebase Authentication SMS
- Requires Firebase project setup with Phone Auth enabled
- Configure in `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)

### Backend Configuration

The backend supports both versions. Configure in `.env`:

```env
# For Phone OTP version - enable Firebase
isFirebaseFcmEnabled=true

# For Email version
isFirebaseFcmEnabled=false
```

### Choosing Your Version

Select the appropriate Flutter app variant when building:

```bash
# Email version
cd apps/super_up_app
flutter build apk --release

# Phone OTP version (Firebase)
cd apps/super_up_app_firebase
flutter build apk --release
```

Ensure your backend `.env` and Flutter `SConstants` match the chosen authentication method.

## Configure Flutter apps for your domain

Inside `SConstants` in Flutter set your production domain; example:

```dart
static const _productionBaseUrl = "example.com"; // not including protocol
// Media and API builders already prefix with https://api.
```

Ensure the backend is reachable at `https://api.example.com` and CORS is allowed if enforced.

## Troubleshooting

- WebSocket 400/upgrade errors: ensure Nginx has `Upgrade`/`Connection upgrade` headers and `proxy_http_version 1.1`.
- 502 Bad Gateway: API not listening, wrong upstream port, or PM2/app crashed. Check `pm2 logs` or `docker compose logs`.
- Firebase/OneSignal push not working: verify keys on backend `.env` and Flutter `SConstants`, and platform-specific setup in Flutter doc.
- Mongo auth failed: double-check `DB_URL`, authSource, and that user exists in the correct DB.
