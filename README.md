# Threshold Backend

## Table of Contents

- [Threshold Backend](#threshold-backend)
- [Table of Contents](#table-of-contents)
- [MedusaJS](#medusajs)
- [Project Structure](#project-structure)
  - [src/](#src)
    - [admin/](#admin)
    - [api/](#api)
    - [jobs/](#jobs)
    - [loaders/](#loaders)
    - [migrations/](#migrations)
    - [models/](#models)
    - [repositories/](#repositories)
    - [services/](#services)
    - [subscribers/](#subscribers)
    - [types/](#types)
  - [data/](#data)
  - [.github/](#github)
- [Setup](#setup)
  - [Requirements](#requirements)
  - [Local Setup](#local-setup)
- [Usage](#usage)
  - [Admin UI](#admin-ui)
  - [API](#api)
- [Contributing](#contributing)

## MedusaJS

Medusa is a set of commerce tools and modules that can be used to build unique commerce experiences.

Medusa provides the essential building blocks that developers can put together to create a powerful commerce store. Developers have full control over their tech stack and the logic behind the commerce features.

## Project Structure

This project is structured as follows:

- `src/`: Contains the source code of the project.
  - `admin/`: Admin UI, including widgets, views, components
  - `api/`: API split into `admin` and `store`
  - `jobs/`: Scheduling jobs
  - `loaders/`: A loader is a script that runs when the Medusa backend starts. 
  - `migrations/`: Database migrations
  - `models/`: New entity database models or extending database models
  - `repositories/`: Repositories provide generic helper methods for your models/entities.
  - `services/`: Represent bundled helper methods that you want to use across your commerce application
  - `subscribers/`: Register handlers for an events and allows you to perform an action when that event occurs
  - `types/`: Typescript types for database entities.
- `data/`: Contains seed data for the database.
- `.github/`: Contains GitHub configuration files like workflows and dependabot configuration.

## Setup

### Requirements

[Node.JS 18.x.x or higher](https://nodejs.org/en/download)
npm, yarn, or pnpm
[PostgreSQL](https://www.postgresql.org)
[Redis](https://redis.io)
[Algolia](https://www.algolia.com)
[Stripe](https://stripe.com)
[Segment](https://segment.com)

`.env` setup

- JWT_SECRET
  - Secret for JWT encoding/decoding
    - default: `supersecret`
- COOKIE_SECRET
  - Secret for Cookie validation
    - default: `supersecret`
- DATABASE_TYPE
  - Type of database (only supports `postgres` for now)
    - default: `postgres`
- DATABASE_URL
  - PostgreSQL Database URL
    - defaults: `postgresql://postgres:postgres@localhost/medusa`
- MEDUSA_ADMIN_ONBOARDING_TYPE
  - Stack your admin frontend application runs on. Ours is `nextjs`
    - default: `nextjs`
- STORE_CORS
  - CORS regex patterns for Storefront API
    - default: `http://localhost:8000,http://localhost:7001,http://localhost:3000,http:\/\/localhost:3000`
- ADMIN_CORS
  - CORS regex patters for Admin API
    - default: `http:\/\/localhost:3000,http://localhost:3000,http:\/\/localhost:7001,http://localhost:7001`
- MEDUSA_ADMIN_ONBOARDING_NEXTJS_DIRECTORY
  - Directory of admin onboarding
    - default: `threshold-store-storefront`
- DB_USERNAME
  - Database username
    - default: `postgres`
- DB_PASSWORD
  - Database password
    - default: `postgres`
- DB_HOST
  - Datbase host
    - default: `localhost`
- DB_PORT
  - Database port
    - default: `5432`
- DB_DATABASE
  - Database name
    - default: `medusa`
- REDIS_URL
  - Redis URL
    - default: `redis://localhost:6379`
- STRIPE_API_KEY
  - Stripe API key
    - Contact the project manager to get one
- ALGOLIA_APP_ID
  - Algolia Application ID
    - Contact the project manager to get one
- ALGOLIA_ADMIN_API_KEY
  - Algolia Application Admin API Key
    - Contact the project manager to get one
- SEGMENT_WRITE_KEY
  - Segment write key for analytics
    - Contact the project manager to get one


### Local Setup

Make sure you have a local PostgreSQL and Redis instance and configure your `.env` accordingly.

#### Running for the first time

If it's your first time running the projects, make sure you meet all the requirements.

1. Install dependencies

```sh
npm install
```

2. Run database migrations

```sh
npm run migrate
```

3. Run the project

```sh
npm run dev
```

## Usage

### Admin UI

Admin UI normally runs on `http://localhost:7001`.

The admin UI allows you to manage your storefront, including products, images, orders, customers, shipping, etc.

### API

The API nomally runs on `http://localhost:9000`.

The API allows you to connect your storefront data using REST JSON.

## Contributing

Always submit pull requests to the `development` branch. Make sure to prefix your branches accordingly.

- **Features**

If you're working on a features you should prefix your branch as `features/some-feature`.

- **Fixes**

If you're working on fixes for something, you should prefix your branch `fix/some-fix`

- **Hot-Fixes**

If you're working on a hot fix, you should prefix your branch `hotfix/some-hotfix` and let your product manager or lead engineer about the fix so it can be pushed to development/production right away.
