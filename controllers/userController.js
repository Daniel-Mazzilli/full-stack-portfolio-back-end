const express = require("express");
const users = express.Router();
const { getUser, createUser } = require("../queries/users.js");

// Show
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (!user.message) {
    res.status(200).json(user);
  } else {
    res.redirect("/not-found");
  }
});

// Create
users.post("/", async (req, res) => {
  const newUser = await createUser(req.body);
  if (!newUser.message) {
    res.status(200).json(newUser);
  } else {
    res.status(500).json({ error: newUser.message });
  }
});

module.exports = users;
