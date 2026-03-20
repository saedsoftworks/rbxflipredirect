const express = require("express");

const app = express();

// Redirect ALL routes
app.use((req, res) => {
  res.redirect(301, "https://rbxflip.lol");
});

module.exports = app;
