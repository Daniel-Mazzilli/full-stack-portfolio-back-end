const express = require("express");
const usernames = express.Router();
const { checkUsername } = require("../queries/usernames.js");

// Check username
usernames.get("/:username", async (req, res) => {
  const { username } = req.params;
  const isUnique = await checkUsername(username);
  res.status(200).json({ value: isUnique });
});

module.exports = usernames;
