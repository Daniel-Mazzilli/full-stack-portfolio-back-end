const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (idValue) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", idValue);
    return oneUser;
  } catch (error) {
    return error;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (full_name, email, username, password, home_country) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        user.full_name,
        user.email,
        user.username,
        user.password,
        user.home_country,
      ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
};
