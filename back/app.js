const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const faker = require("faker");

const app = express();
const PORT = process.env.PORT || 4444;

app.use(cors());

app.use(express.json());

app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("His alive");
});

app.post("/login", (req, res) => {
  const { login, password } = req.body;

  console.log({ login, password });

  res.send({
    login,
    userName: faker.name.firstName(),
  });
});

app.post("/registration", (req, res) => {
  const { login, password, email } = req.body;

  console.log({ login, password, email });

  if (email === "de@de.de") {
    res.status(400);
  }

  res.send({
    login,
    userName: faker.name.firstName(),
  });
});

app.post("/logout", (req, res) => {
  const { login, password } = req.body;

  console.log({ login, password });

  res.send({
    login,
    userName: null,
  });
});

app.listen(PORT, () => {
  console.log(`His alive in ${PORT}`);
});
