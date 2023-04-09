require("dotenv").config();

const express = require("express");
const router = express.Router();
const db = require("../db/index");


// Get all Booking
router.get("/api/v1/booking", async (req, res) => {
  try {
    const results = await db.query("select * from booking_info");
    // console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        booking: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get a Booking
router.get("/api/v1/booking/:booking_id", async (req, res) => {
  try {
    const results = await db.query(
      "select * from booking_info where booking_id = $1",
      [req.params.booking_id]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a Booking
router.post("/api/v1/booking", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO booking_info (booking_id, hotel_id, customer_SSN, status, room_no, emp_SSN, arrival_time, departure_time, created_at, last_updated) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10) returning *",
      [
        req.body.booking_id,
        req.body.hotel_id,
        req.body.customer_SSN,
        req.body.status,
        req.body.room_no,
        req.body.emp_SSN,
        req.body.arrival_time,
        req.body.departure_time,
        req.body.created_at,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update a Booking
router.put("/api/v1/booking/:booking_id", async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  try {
    const results = await db.query(
      "UPDATE booking_info SET status=$1, room_no=$2, arrival_time=$3, departure_time=$4, last_updated=#5 where booking_id = $6 returning *",
      [
        req.body.status,
        req.body.room_no,
        req.body.arrival_time,
        req.body.departure_time,
        req.body.last_updated,
        req.params.booking_id,
      ]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete a Booking
router.delete("/api/v1/booking/:booking_id", async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  try {
    const results = await db.query(
      "DELETE FROM booking_info where booking_id = $1",
      [req.params.booking_id]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
