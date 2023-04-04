require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db/index.js");

const app = express();

app.use(cors());

app.use(express.json());

///////////////////////////////////////////////////////////////////////////

// Get all Customer
app.get("/api/v1/view-customer", async (req, res) => {
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
app.get("/api/v1/view-customer/:customer_ssn", async (req, res) => {
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
app.post("/api/v1/view-customer", async (req, res) => {
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
app.put("/api/v1/view-customer/:customer_ssn", async (req, res) => {
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
        req.params.customer_ssn
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
app.delete("/api/v1/view-customer/:customer_ssn", async (req, res) => {
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





///////////////////////////////////////////////////////////////////////////

// Get all Booking
app.get("/api/v1/booking", async (req, res) => {
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
app.get("/api/v1/booking/:booking_id", async (req, res) => {
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
app.post("/api/v1/booking", async (req, res) => {
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
        req.body.last_updated
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
app.put("/api/v1/booking/:booking_id", async (req, res) => {
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
app.delete("/api/v1/booking/:booking_id", async (req, res) => {
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




// // TEMPLATE FOR OTHER CRUDS

// app.get("/api/v1/{val}",async (req,res)=>{
//     try{
//         const results = await db.query(
//             "select * from {adsasdasdx}"
//         )
//         console.log(results);
//         res.status(200).json({
//             status:"success",
//             results: results.rows.length,
//             data:{
//                 val: results.rows
//             }
//     });

//     } catch (err){
//         console.log(err);

//     }

// });

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server is up! Listening to ${port}`);
});
