require("dotenv").config();

const express = require("express");

const router = express.Router();
const db = require("../db/index");


// Get all Customers
router.get("/api/v1/view-customer", async (req, res) => {
  console.log("Hi");
  try {
    const results = await db.query("select * from customer");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        customer: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get a Customer
router.get("/api/v1/view-customer/:customer_ssn", async (req, res) => {
  // const hi = req.body;
  console.log("Michias")
  console.log(req.body);

  try {
    const results = await db.query(
      "select * from customer where customer_ssn = $1",
      [req.params.customer_ssn]
    );
    res.status(200).json({
      status: "success",
      data: {
        customer: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});





// Create a Customer
router.post("/api/v1/view-customer", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO customer (customer_ssn, first_name, middle_name, last_name, email, street_name, street_number, city, province, postal_code, country, joining_date, phone_number, password, last_updated) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *",
      [
        req.body.customer_ssn,
        req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.email,
        req.body.street_name,
        req.body.street_number,
        req.body.city,
        req.body.province,
        req.body.postal_code,
        req.body.country,
        req.body.joining_date,
        req.body.phone_number,
        req.body.password,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        customer: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Update a Customer
router.put("/api/v1/view-customer/:customer_ssn", async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  try {
    const results = await db.query(
      "UPDATE customer SET email=$1, street_name=$2, street_number=$3, city=$4, province=$5, postal_code=$6, country=$7, phone_number=$8, password=$9, last_updated=$10 where customer_ssn = $11 returning *",
      [
        req.body.email,
        req.body.street_name,
        req.body.street_number,
        req.body.city,
        req.body.province,
        req.body.postal_code,
        req.body.country,
        req.body.phone_number,
        req.body.password,
        req.body.last_updated,
        req.params.customer_ssn,
      ]
    );
    res.status(200).json({
      status: "success",
      data: {
        customer: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Delete a customer
router.delete("/api/v1/view-customer/:customer_ssn", async (req, res) => {
  try {
    const results = await db.query(
      "DELETE FROM customer where customer_ssn = $1",
      [req.params.customer_ssn]
    );
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;