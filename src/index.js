const express = require("express");
const { Client } = require("pg");
require("dotenv").config();

// TODO -> test adding cors
const app = express();
const port = 3000;

const pgClient = new Client({
  user: process.env.PG_VM_USER,
  host: process.env.PG_VM_HOST,
  database: process.env.PG_VM_DATABASE,
  password: process.env.PG_VM_PASSWORD,
  port: process.env.PG_VM_PORT,
});

app.get("/users", async (req, res) => {
  await pgClient.connect();

  const result = await pgClient.query("SELECT * FROM users");
  await pgClient.end();

  res.send(result);
});

app.get("/json-test", async (req, res) => {
  res.send({ test: "test" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
