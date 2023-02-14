const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (error) {
    return error;
  }
};

const getUser = async (username) => {
  try {
    const oneUser = await db.one(
      "SELECT * FROM users WHERE username=$1",
      username
    );
    return oneUser;
  } catch (error) {
    return error;
  }
};

const getIdByUsername = async (username) => {
  try {
    const userId = await db.one(
      "SELECT id FROM users WHERE username=$1",
      username
    );
    return userId;
  } catch (error) {
    return error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const oneUser = await db.one(
      "SELECT * FROM users WHERE username=$1",
      username
    );
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
  getIdByUsername,
  getUserByUsername,
  createUser,
};
