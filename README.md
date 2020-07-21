# Appstarter full-stack app template

## Setup

- Clone repo
- Install dependencies: `yarn install:all`

## Create the DB

This app is set up with postgraphile and by default, the database
is named `backend`.

### To create default db

- To install `postgres` via homebrew: `brew install postgres`
- Create and modify `backend/.env.development`:

```
PGUSER = "postgres"
PGDDATABASE = "backend"
PGPASSWORD = null
PGHOST = "127.0.0.1"
PGPORT = "5432"
PGURL = "postgres:///backend"
```

- Modify `backend/config/config.json` to reflect desired db setup:

```
{
  "development": {
    "username": "postgres",
    "password": null,
    "database": "backend",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

- Update `backend/app.ts` to reflect any environment and config changes. If you change the db name, you'll need to change it in the `setup:db` script in `package.json` to `cd backend && createdb [yourdbname]`.

### Setup the backend

- Run `yarn setup:backend`

### Generate frontend graphql types

- Run `yarn start:backend` and in another terminal run `yarn generate:frontend`

### Seed the db

- Run `yarn setup:backend:seed`

### Start the app

- Run `yarn start`

### Graphql

- Graphiql: http://localhost:5000/graphiql
- API: http://localhost:5000/graphql
