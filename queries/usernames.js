const db = require("../db/dbConfig.js");

const checkUsername = async (username) => {
  try {
    const isUnique = await db.one(
      "SELECT username FROM users WHERE username=$1",
      username
    );
    return false;
  } catch (error) {
    return true;
  }
};

module.exports = {
  checkUsername
};
