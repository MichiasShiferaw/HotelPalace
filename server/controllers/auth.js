const db = require("../db/index");
const { sign } = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
  try {
    const response = await db.query("select * from customer");
    res.status(200).json({
      status: "success",
      data: {
        customer: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
    console.log(req.body);
  try {
    const response = await db.query(
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
      message: "The registration was successful",
      data: {
        customer: response.rows[0],
      },
    });
    // console.log(response.rows);
  } catch (err) {
    // console.log(err.message);

    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user;
  //   console.log(user);

  let payload = {
    ssn: user.customer_ssn,
    first_name: user.first_name,
  };

  try {
    const token = await sign(payload, "csi2132project"); //SECRET token

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    console.log(req);
    res.status(200).json({
      status: "success",
      info: "protected info",
    });
    // console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

exports.logout = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", { httpOnly: true })
      .json({
        success: true,
        message: "Logged out successfully",
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};


/// Employee 


exports.empgetUsers = async (req, res) => {
  try {
    const response = await db.query("select * from employee");
    res.status(200).json({
      status: "success",
      data: {
        customer: response.rows,
      },
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

exports.empregister = async (req, res) => {
  console.log(req.body);
  try {
    const response = await db.query(
      "INSERT INTO employee (emp_SSN, first_name, middle_name, last_name, street_name, street_number, city, province, postal_code, country, hotel_id, start_date, password, last_updated) values ($1,$2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *",
      [
        req.body.emp_ssn,
        req.body.first_name,
        req.body.middle_name,
        req.body.last_name,
        req.body.street_name,
        req.body.street_number,
        req.body.city,
        req.body.province,
        req.body.postal_code,
        req.body.country,
        req.body.hotel_id,
        req.body.start_date,
        req.body.password,
        req.body.last_updated,
      ]
    );
    res.status(201).json({
      status: "success",
      message: "The onboarding was successful",
      data: {
        customer: response.rows[0],
      },
    });
    // console.log(response.rows);
  } catch (err) {
    // console.log(err.message);

    return res.status(500).json({
      error: err.message,
    });
  }
};

exports.emplogin = async (req, res) => {
  let user = req.user;
  //   console.log(user);

  let payload = {
    ssn: user.emp_SSN,
    hotel: user.hotel_id,
  };

  try {
    const token = await sign(payload, "emp-csi2132project"); //SECRET token

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Employee logged in successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.empprotected = async (req, res) => {
  try {
    console.log(req);
    res.status(200).json({
      status: "success",
      info: "protected info",
    });
    // console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

exports.emplogout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
