const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Good Job port number is ${PORT}`);
}

function handelHome(req, res) {
  res.send("Hello World");
}

function handleProfile(req, respond) {
  respond.send("You are on my profile");
}

app.get("/", handelHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);
