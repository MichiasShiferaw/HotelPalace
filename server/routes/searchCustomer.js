require("dotenv").config();

const express = require("express");

const router = express.Router();
const db = require("../db/index");

// Get a Customer by name or customer_ssn
router.get("/api/v1/search-customer", async (req, res) => {
  try {
    const {info} = req.query;
    const results = await db.query(
      "select * from customer where first_name || ' '|| last_name ||customer_ssn ILIKE $1",
      [`%${info}%`]
    );
    res.status(200).json({
      status: "success",
      data: {
        customer: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;