const express = require("express");
const trips = express.Router({ mergeParams: true });
const {
  getAllTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
} = require("../queries/trips.js");
const { getIdByUsername } = require("../queries/users.js");
const { verifyToken } = require("../middleware/auth.js");

trips.use(verifyToken);

// Index
trips.get("/", async (req, res) => {
  const { username } = req.params;
  const userId = await getIdByUsername(username);
  try {
    const allTrips = await getAllTrips(userId.id);
    res.status(200).json(allTrips);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Show
trips.get("/:id", async (req, res) => {
  const { username } = req.params;
  const userId = await getIdByUsername(username);
  const { id } = req.params;
  const trip = await getTrip(id, userId.id);
  if (!trip.message) {
    res.status(200).json(trip);
  } else {
    res.status(404).redirect("/not-found");
  }
});

// Create
trips.post("/", async (req, res) => {
  try {
    const { username } = req.params;
    const userId = await getIdByUsername(username);
    const trip = await createTrip(req.body, userId.id);
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Delete
trips.delete("/:id", async (req, res) => {
  try {
    const { username } = req.params;
    const userId = await getIdByUsername(username);
    const { id } = req.params;
    const deletedTrip = await deleteTrip(id, userId.id);
    res.status(200).json(deletedTrip);
  } catch (error) {
    res.status(400).json({ error: "id not found" });
  }
});

// Update
trips.put("/:id", async (req, res) => {
  try {
    const { username } = req.params;
    const userId = await getIdByUsername(username);
    const { id } = req.params;
    const updatedTrip = await updateTrip(id, userId.id, req.body);
    res.status(200).json(updatedTrip);
  } catch (error) {
    res.status(404).json({ error: "id not found" });
  }
});

module.exports = trips;
