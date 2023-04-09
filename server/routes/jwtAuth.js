const express = require("express");
const router = express.Router();

const pool = require("../db/index");
const validInfo = require("../middleware/validInfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

//register
router.post('/api/v1/register', validInfo, async (req, res) => {
  const { customer_SSN, name, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM customer WHERE customer_SSN = $1", [
      customer_SSN,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }


    let newUser = await pool.query(
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

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});



//login
router.post("/api/v1/login", validInfo, async (req, res) => {
  const { customer_ssn, password } = req.body;
  console.log(req.body);

  try {
    const user = await pool.query(
      "SELECT * FROM customer WHERE customer_ssn = $1",
      [customer_ssn]
    );

    console.log(user.rows);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = true;
    //(password==user.rows);
    console.log(validPassword)
    // await bcrypt.compare(
    //   password,
    //   user.rows[0].user_password
    // );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/api/v1/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
