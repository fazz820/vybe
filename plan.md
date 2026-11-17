# VYBE — implementation and design plan

## Product and implementation
Build a standalone MERN-style local social-discovery MVP in `frontend/` and `backend/`. The React/Vite frontend uses React Router, a responsive component system, context-managed JWT sessions, and a fetch API service. The Express REST API provides registration/login/me, profiles, activity discovery/CRUD/participation, notifications, reports and blocks. Mongoose models and MongoDB persistence are used when `MONGO_URI` is configured. To make the local product immediately runnable without invented credentials, the API supports a clearly documented JSON-file demo store with realistic seeded meetups; setup instructions distinguish demo persistence from MongoDB production storage. Passwords are bcrypt-hashed and tokens are JWTs. Server-side authorization, validation, participation limits, notifications and graceful errors apply in both modes.

Core routes/pages: public landing, activity discovery and details; registration/login; protected profile/edit, create activity, joined/created/upcoming/past activity dashboard, and notification inbox. Reusable navigation, activity cards, filters, participant list, empty/loading/error states, and confirmation/interactions are built as shared components. Frontend and backend run as separate local services with Vite proxying `/api` to Express.

Main folders: `frontend/src/components` reusable navigation, cards, filters and UI; `frontend/src/pages` product screens; `frontend/src/context` auth/session state; `frontend/src/services` HTTP requests; `frontend/public` brand assets and route manifest. `backend/config` persistence adapter; `backend/models` Mongoose schemas; `backend/controllers` API actions; `backend/routes` REST routes; `backend/middleware` authentication, validation/error/security middleware; `backend/data` local demo JSON state. The root README documents prerequisites, two-terminal launch, optional MongoDB configuration, demo mode, and limitations.

## Design
Three sampled style directions: **Editorial social-club journal** (0.06); **electric city-night arcade** (0.04); **sunlit coastal field notes** (0.07). Choose editorial social-club journal, warmed with a lively citron highlight.

- **Design Movement:** contemporary independent-city magazine meets friendly members club.
- **Core Principles:** activity-first discovery; clear, human copy; warmth without dating cues; tactile cards and restrained motion.
- **Color Philosophy:** ink/navy ground gives depth; warm ivory feels editorial; acid lime marks action and shared energy; muted lavender supports quieter secondary states.
- **Layout Paradigm:** offset editorial hero; scroll-led asymmetric activity rail; compact filters, persistent simple navigation, single-column mobile adaptations.
- **Signature Elements:** oversized outlined V emblem, pill-shaped lime actions, image-card date chips.
- **Interaction Philosophy:** immediate inline feedback, transparent join capacity, purposeful transitions, never swipe-matching.
- **Animation:** short ease-out entrance and hover elevation; respect reduced motion; subtle button press, no looping distraction.
- **Typography System:** Manrope for high-clarity UI and a rounded modern display face (Outfit) for brand/headlines; strong short headlines, quiet metadata.
- **Brand Essence:** the easiest way to turn shared interests into real plans for people building a social life in their city; curious, upbeat, grounded.
- **Brand Voice:** welcoming, specific, low-pressure. Examples: “Your next good story starts off-screen.” “Pick a plan. Meet your people.”
- **Wordmark & Logo:** custom inline V monogram built from two tapered strokes, paired with spaced uppercase VYBE wordmark.
- **Signature Brand Color:** vivid citron #D7F36A.

## Material constraints
No service credentials are available. MongoDB Atlas, image hosting, email delivery, maps and password reset email must be configured by the operator; no fake keys or working integrations will be claimed. The bundled API demo mode persists to a local JSON file. The hero image is a bundled local asset; non-hero activity images may use public Unsplash image URLs.
