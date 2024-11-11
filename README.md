# PS Pocket - Backend

This repository is a study focused on creating and setting up a server using Node.js with Fastify, TypeScript, Drizzle ORM, and other modern tools. The project aims to explore and understand server configuration, ORM (Object-Relational Mapping) usage, database management, and development best practices with TypeScript and data validation.

## Features

- **HTTP Server**: Sets up an HTTP server with Fastify to handle requests and responses quickly and efficiently.
- **Data Validation**: Uses the Zod library for type and data validation.
- **Database**: Configured with Drizzle ORM and PostgreSQL for database interactions.
- **Utility Scripts**: Includes development and seeding scripts to facilitate initial setup.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/benasdeveloper/ps-pocket-be-2411.git
```

2.	Install dependencies:

```bash
npm install
```

3.	Set up environment variables by creating a .env file with the necessary credentials to connect to the database.

## Scripts

•	dev: Starts the server in development mode with tsx, loading environment variables from the .env file.

```bash
npm run dev
```

•	seed: Runs the seeding script to populate the database with initial data.

```bash
npm run seed
```

# Tools Used

## Main Dependencies

- **Fastify:** A fast and lightweight web framework for Node.js, used here to manage HTTP routes and responses efficiently.
- **Zod:** A data validation and type library used alongside TypeScript to ensure the accuracy of data input and output.
- **Drizzle ORM:** A modern ORM that simplifies interaction with the PostgreSQL database, using a TypeScript-friendly approach.
- **Postgres:** A PostgreSQL client that facilitates communication between the Node.js application and the PostgreSQL database.

## Development Dependencies

- **TypeScript:** Allows for typed JavaScript, providing better code safety and predictability.
- **tsx:** Used to compile and run TypeScript files directly, streamlining development.
- **Biome:** A code analysis and formatting tool to maintain code consistency and improve overall quality.

```plaintext
.migrations/                 # Folder for database migration files
.vscode/                     # VS Code workspace settings
node_modules/                # Node.js dependencies
src/                         # Source files
├── db/                      # Database-related files
│   ├── index.ts             # Database initialization or connection file
│   ├── schema.ts            # Database schema definitions
│   └── seed.ts              # Database seeding script
├── functions/               # Functions for specific features
│   ├── create-goals.ts      # Function to create goals
│   └── get-week-pending-goals.ts  # Function to get pending goals for the week
└── http/                    # HTTP server files
    ├── server.ts            # Main server setup file
    └── env.ts               # Environment variable configuration
.env                         # Environment variables file
.gitignore                   # Git ignore file
biome.json                   # Biome configuration
docker-compose.yml           # Docker Compose configuration
drizzle.config.ts            # Drizzle ORM configuration
package-lock.json            # Package lock file for dependencies
package.json                 # Project metadata and dependencies
readme.md                    # Project README file
tsconfig.json                # TypeScript configuration file
