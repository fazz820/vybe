# VYBE — find your people

A responsive social-discovery MVP for meeting through real-world activities. It includes a React/Vite client, Express REST API, bcrypt/JWT authentication, MongoDB/Mongoose schemas, organizer-authorized activity CRUD, joining/leaving, notifications, and basic report/block safety tools.

## Run locally on Windows

Requirements: Node.js 20+ and npm. From a PowerShell terminal, open two terminals.

**Terminal 1 — backend:**

```powershell
cd "C:\Users\Administrator\OneDrive\Desktop\Django_project\vybe\backend"
npm.cmd ci
$env:JWT_SECRET = "replace-this-with-a-long-random-development-secret"
npm.cmd run dev
```

**Terminal 2 — frontend:**

```powershell
cd "C:\Users\Administrator\OneDrive\Desktop\Django_project\vybe\frontend"
npm.cmd ci
npm.cmd run dev
```

Open <http://127.0.0.1:5173>. Vite proxies `/api` requests to the API at `http://127.0.0.1:4000`. The backend prints its persistence mode at startup. To stop either service, press `Ctrl+C` in its terminal.

## Demo mode

When `MONGO_URI` is unset, the API seeds sample activities on first run and saves changes in `backend/data/vybe.json`. This file is intentionally ignored by Git. Demo account: **demo@vybe.local** / **DemoPass123!**. Alternatively, register a new account and create or join plans. JSON mode is for local demonstration, not concurrent production traffic.

## Use MongoDB

Install or provision your own MongoDB, copy `backend/.env.example` to `backend/.env`, and configure a private `MONGO_URI` and long, random `JWT_SECRET`. Never commit the `.env` file or share credentials. With MongoDB configured, Mongoose persists users, activities, notifications, reports and blocks. A newly configured database starts empty; register a user and create activities. `backend/models/index.js` declares the schemas. No database URI or service secrets are bundled.

## Main routes and features

Public: `/`, `/explore`, `/activities/:id`, `/profile/:id`, `/login`, `/register`. Signed-in: `/profile`, `/create`, `/my-activities`, `/notifications`. Backend endpoints are grouped under `/api`: auth register/login/me; user get/profile update; activity list/detail/create/update/cancel/join/leave; notification list/read; report creation and block creation. Passwords are hashed, tokens are validated, organizer edits/cancellation are authorized, category/date/location/search filters run server-side, and capacity and duplicate participation are checked before joining.

## Known service-dependent limits

Password reset currently displays a setup notice because no email service is configured. Password recovery emails, hosted image upload, maps/geocoding, social login and push notifications are not integrated. Activity images accept URLs; the included hero image is local. Reports are stored for basic moderation review, but no administrator dashboard or trust-and-safety staffing is provisioned. Public third-party Unsplash images and Google Fonts require an internet connection. Configure a production MongoDB, secret, mail, image, logging, moderation and privacy policies before public launch.
