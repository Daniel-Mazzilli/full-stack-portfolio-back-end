const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { getUserByUsername } = require("../queries/users.js");

dotenv.config();
const refreshList = {};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    req.decoded = jwt.verify(token, process.env.SECRET_TOKEN);
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

const userLogin = async (req, res, next) => {
  const { username } = req.body;
  const user = await getUserByUsername(username);
  if (!user.message) {
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (validPass) {
      //generate access token
      req.token = jwt.sign(
        { user: user.username, email: user.email },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "1h",
        }
      );
      //generate refresh token
      req.refreshToken = jwt.sign(
        { user: user.username, email: user.email },
        process.env.SECRET_RTOKEN,
        {
          expiresIn: "30d",
        }
      );
      req.content = {
        user: user.username,
        email: user.email,
      };
      //add to list
      refreshList[req.refreshToken] = {
        status: "loggedin",
        token: req.token,
        refreshToken: req.refreshToken,
      };
      next();
    } else {
      res.status(400).json({ error: "Invalid password" });
    }
  } else {
    res.status(401).json({ error: `No account linked to ${username}` });
  }
};

module.exports = { verifyToken, userLogin };
