# Lost & Ground Co. — Backend

Backend for the Lost & Ground Co. website, developed by **Happy Beans Dev** for the CM3130 Team Project at Robert Gordon University.

## About the Project

Lost & Ground Co. is a UK sustainable skincare brand that transforms recycled coffee grounds into skincare and grooming products.

The website will communicate the brand's story, sustainability values and product information.

## Technology Stack

- Strapi 5 — Headless CMS and REST API
- Node.js and TypeScript — Backend development
- SQLite — Initial local development database
- PostgreSQL (Supabase) — Planned production database
- Render — Planned backend hosting

## Main Features

- Brand storytelling and sustainability content
- Product and category management
- REST API for the Vue.js frontend
- Content editing through Strapi Admin Panel
- API permissions and access control

## Local Development

Install dependencies:

`npm install`

Start the development server:

`npm run develop`

Strapi Admin Panel: http://localhost:1337/admin

## Frontend

The Vue.js frontend is developed separately:

https://github.com/happy-beans-dev/lost-and-ground-frontend

Only the production build (`dist/`) will be deployed to static hosting.

## Development Workflow

1. Create a feature branch.
2. Commit and push changes.
3. Open a Pull Request.
4. Review changes before merging into `main`.

## Security

Never commit passwords, API tokens, database credentials or `.env` files.

## Project Status

Sprint 1 — In development.