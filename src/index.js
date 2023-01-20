const express = require("express");
const { Client } = require("pg");

// TODO -> test adding cors
const app = express();
const port = 3000;

const pgClient = new Client();

app.get("/users", async (req, res) => {
  await pgClient.connect();

  const res = await pgClient.query("SELECT * FROM users");
  await pgClient.end();

  res.send(res);
});

app.get("/josn-test", async (req, res) => {
  res.send({ test: "test" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
