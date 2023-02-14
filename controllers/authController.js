const express = require("express");
const auth = express.Router();
const { userLogin, tokenRefresh } = require("../middleware/auth.js");

// Validate sign-in
auth.post("/signin", userLogin, async (req, res) => {
  res.status(200).json({
    message: "SignIn",
    content: req.body,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});

auth.post("/refresh", tokenRefresh, async (req, res) => {
  res.json({
    message: "Refresh",
    content: req.content,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});

module.exports = auth;
