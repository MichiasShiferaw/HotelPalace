require("dotenv").config();

const express = require("express");
const router = express.Router();
const db = require("../db/index");

// All
router.get("/location", async (req, res) => {
  try {
    const { location } = req.query;
    const results = await db.query(
      "SELECT * FROM hotel where hotel_name || city || ' '|| province || country ILIKE $1",
      [`%${location}%`]
    );
    console.log(results.rows);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        location: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get One

// Get a Customer
router.get("city/:city", async (req, res) => {
  try {
    const results = await db.query(
      "SELECT hotel_name FROM hotel where city = $1",
      [req.params.city]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        location: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});


// Get All Rooms
router.get("/rooms", async (req, res) => {
  try {
    const results = await db.query(
      "SELECT * FROM searching",
    );
    res.status(200).json({
      status: "success",
      data: {
        room: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});


// Create

// Update

// Delete

module.exports = router;
