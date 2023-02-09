const express = require("express");
const emails = express.Router();
const { checkEmail } = require("../queries/emails.js");

// Check email
emails.get("/:email", async (req, res) => {
  const { email } = req.params;
  const isUnique = await checkEmail(email);
  res.status(200).json({ value: isUnique });
});

module.exports = emails;