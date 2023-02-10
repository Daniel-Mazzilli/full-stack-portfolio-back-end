const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { checkUsername } = require("../queries/usernames.js");

const userLogin = async (req, res, next) => {
  const { username } = req.body;
  const notInDB = await checkUsername(username);
  if (notInDB === false) {
    next();
  } else {
    res.json({ error: `No account linked to ${username}` });
  }
};

module.exports = { userLogin };
