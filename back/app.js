const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const faker = require("faker");
const httpNew = require("http");
const ioNew = require("socket.io");

const app = express();
const PORT = process.env.PORT || 4444;

const http = httpNew.createServer(app);

//create init socket value
const io = ioNew(http, {
  transports: ["websocket", "polling"],
});

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

// default socket connection
const users = {};
io.on("connection", (client) => {
  client.on("username", (username) => {
    console.log("connect");
    const user = {
      name: username,
      id: client.id,
    };
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", (message) => {
    console.log(message);
    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id],
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});

http.listen(PORT, () => {
  console.log(`His alive in ${PORT}`);
});
