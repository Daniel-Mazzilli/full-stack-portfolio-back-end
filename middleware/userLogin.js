const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { getUserByUsername } = require("../queries/users.js");

dotenv.config();
const refreshList = {};

const userLogin = async (req, res, next) => {
  const { username } = req.body;
  const user = await getUserByUsername(username);
  if (!user.message) {
    const validPass = await bcrypt.compare(req.body.password, user.password);
    console.log(validPass);
    next();
  } else {
    res.json({ error: `No account linked to ${username}` });
  }
};

module.exports = { userLogin };
