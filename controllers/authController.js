const express = require("express");
const auth = express.Router();
const { userLogin } = require("../middleware/userLogin.js");

// Validate sign-in
auth.post("/signin", userLogin, async (req, res) => {
  res.status(200).json({
    message: "SignIn",
    content: req.body,
    JWT: req.token,
    refresh: req.refreshToken,
  });
});

module.exports = auth;
