require("dotenv").config();

const express = require("express");
const router = express.Router();
const db = require("../db/index");



// Get a Customer by name or customer_ssn
router.get("/my-all/:id", async (req, res) => {
  try {
    const { info } = req.query;
    console.log(info);
    const results = await db.query(
      "select * from booking_info where customer_ssn = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      results:results.rows.length,
      data: {
        booking: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get all Booking
router.get("/all", async (req, res) => {
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
router.post("/create", async (req, res) => {

  try {
    const results = await db.query(
      "INSERT INTO booking_info (hotel_id, customer_ssn, booking_status, room_no, emp_SSN, arrival_time, departure_time, created_at, last_updated) values ($1,$2, $3,$4,$5,$6,$7,$8,$9) returning *",
      [
        req.body.hotel_id,
        req.body.customer_ssn,
        "start",
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
router.delete("/delete/:booking_id", async (req, res) => {
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


// Current Bookings
router.get("/my-all/curr/:id", async (req, res) => {
  try {
    const results = await db.query(
      "select * from booking_info where customer_ssn = $1 AND booking_status='start' ",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/my-all/pass/:id", async (req, res) => {
  try {
    const results = await db.query(
      "select * from booking_info where customer_ssn = $1 AND booking_status!='start' ",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        booking: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;
