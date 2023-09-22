<p align="center">
    <img src="./.r/micro-express-square.png" width="256" height="256">
</p>

<h1 align="center">
    μExpress
</h1>

<p align="center">
    Oppinionated micro Express.js template to build robust REST APIs.
</p>

μExpress is a streamlined Express.js template tailored for crafting robust REST APIs. With a curated set of tools and libraries, it accelerates development while offering flexibility for project-specific adjustments.

## 🌟 Highlights

-   **TypeScript Integration**: Benefit from static type checking and enhanced code intelligence.
-   **Code Quality**: Enforced with ESLint and Prettier.
-   **Express.js**: Utilizing the minimalist and fast Express.js framework.
-   **Rich Logging**: With Winston.
-   **CORS Ready**: Using the CORS middleware.
-   **Request Parsing**: Via Body Parser.
-   **Database & ORM**: TypeORM with Postgres support, containerized with Docker.
-   **Testing**: Dependency injection with Awilix and testing via Jest.

## 📂 Project Structure

```bash
src/
├── api/             # API endpoints, middlewares, and routes.
│   ├── middlewares/
│   └── routes/
├── loaders/         # Global logic: API routes, middlewares, DB, and Awilix container.
├── migrations/      # Database migrations.
├── models/          # TypeORM entities.
├── repositories/    # Data access layers.
├── services/        # Business logic.
├── types/           # TypeScript type definitions.
└── utils/           # Utility functions.
```

## 🚀 Getting Started

#### 1. Clone :

```bash
git clone https://github.com/adevinwild/micro-express.git
```

#### 2. Install Dependencies:

```
npm install
```

#### 3. Database Setup:

> For this demo, we have already one migration file that creates a `dummy` table with an `id` column.

-   Start with Docker :

```bash
docker-compose up --build
```

-   Apply migrations :

```bash
npm run migration:up
```

#### 4. Run Application:

-   Development :

```bash
npm run dev
```

-   Production :

```bash
npm run build && npm start
```

## 🛠️ Scripts Overview

-   `build`: Transpile TypeScript code.
-   `start`: Launch the built application.
-   `dev`: Development server with nodemon.
-   `format`: Beautify code with ESLint & Prettier.
-   `lint`: Check code quality with ESLint.
-   `test`: Execute tests using Jest.

## Happy coding! 🎉
