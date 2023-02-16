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

const updateUser = async (user, idValue) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET full_name=$1, email=$2, username=$3, password=$4, home_country=$5 WHERE id=$6 RETURNING *",
      [
        user.full_name,
        user.email,
        user.username,
        user.password,
        user.home_country,
        idValue,
      ]
    );
    return updateUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (idValue) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      idValue
    );
    return deletedUser;
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
  updateUser,
  deleteUser,
};
