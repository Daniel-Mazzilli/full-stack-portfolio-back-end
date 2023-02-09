const express = require("express");
const users = express.Router();
const { getAllUsers, getUser, createUser } = require("../queries/users.js");
const { hashPass } = require("../validations.js")
const usernameController = require("./usernameController.js");
const emailController = require("./emailController.js");

users.use("/usernames", usernameController);
users.use("/emails", emailController);

// Index
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers.length) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

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
users.post("/", hashPass, async (req, res) => {
  const newUser = await createUser(req.body);
  if (!newUser.message) {
    res.status(200).json(newUser);
  } else {
    res.status(500).json({ error: newUser.message });
  }
});

module.exports = users;
