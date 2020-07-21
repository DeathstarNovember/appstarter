import express from "express";
import cors from "cors";
import postgraphile from "postgraphile";
import { PoolConfig } from "pg";

const app = express();
app.use(cors());
const port = 5432;

const pgConfig: PoolConfig = {
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT) || port,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
};

const postgraphileOptions = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
};

app.use(postgraphile(pgConfig, "public", postgraphileOptions));

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
