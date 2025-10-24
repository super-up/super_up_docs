---
sidebar_position: 4
---

# Deployment (VPS)

This is a complete, production-focused deployment guide for your own VPS. Includes both non-Docker and Docker Compose paths, Nginx reverse proxy, WebSocket config, and free SSL.

## Plan your domains

- api subdomain (backend REST + WebSockets): `api.example.com`
- web app (Flutter web build): `web.example.com`
- admin panel (Flutter web build): `admin.example.com`

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

Admin panel `admin.example.com` serving `/var/www/super-up/admin` similarly.

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
sudo certbot --nginx -d api.example.com -d web.example.com -d admin.example.com --redirect -m you@example.com --agree-tos -n
```

### 7) Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
```

### 8) Deploy Flutter web + Admin builds

- Build web inside your Flutter apps:

```bash
cd super_up_app
flutter build web --release --web-renderer html
sudo rsync -a build/web/ /var/www/super-up/web/

cd ../super_up_admin
flutter build web --release --web-renderer html
sudo rsync -a build/web/ /var/www/super-up/admin/
```

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
