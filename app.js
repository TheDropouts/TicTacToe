const express = require("express");
const path = require("path");
const app = express();
const api = require("./src/server/api");

app.use(express.static(path.join(__dirname, "dist")));
var i = 100;
app.use("/api", api);

app.get("*", (req, res) => {
  res.send({ error: "No route defined" });
});

module.exports = app;

