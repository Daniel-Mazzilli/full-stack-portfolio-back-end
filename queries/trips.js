const db = require("../db/dbConfig");

const getAllTrips = async (userID) => {
  try {
    const allTrips = await db.any(
      "SELECT * FROM trips WHERE user_id=$1",
      userID
    );
    return allTrips;
  } catch (error) {
    return error;
  }
};

const getTrip = async (id, userID) => {
  try {
    const trip = await db.one(
      "SELECT * FROM trips WHERE id=$1 AND user_id=$2",
      [id, userID]
    );
    return trip;
  } catch (error) {
    return error;
  }
};

const createTrip = async (trip, userID) => {
  try {
    const newTrip = await db.one(
      "INSERT INTO trips (name, country, future_trip, image, description, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        trip.name,
        trip.country,
        trip.future_trip,
        trip.image,
        trip.description,
        userID,
      ]
    );
    return newTrip;
  } catch (error) {
    return error;
  }
};

const deleteTrip = async (id, userID) => {
  try {
    const deletedTrip = await db.one(
      "DELETE FROM trips WHERE id=$1 AND user_id=$2 RETURNING *",
      [id, userID]
    );
    return deletedTrip;
  } catch (error) {
    return error;
  }
};

const updateTrip = async (id, userID, trip) => {
  try {
    const updatedTrip = await db.one(
      "UPDATE trips SET name=$1, country=$2, future_trip=$3, image=$4, description=$5 WHERE id=$6 AND user_id=$7 RETURNING *",
      [
        trip.name,
        trip.country,
        trip.future_trip,
        trip.image,
        trip.description,
        id,
        userID,
      ]
    );
    return updatedTrip;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
};
