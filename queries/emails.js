const db = require("../db/dbConfig.js");

const checkEmail = async (email) => {
  try {
    const isUnique = await db.one(
      "SELECT email FROM users WHERE email=$1",
      email
    );
    return false;
  } catch (error) {
    return true;
  }
};

module.exports = {
  checkEmail,
};
