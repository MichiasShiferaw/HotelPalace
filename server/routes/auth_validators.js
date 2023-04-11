// const { check } = require("express-validator");
const db = require("../db");
// const { compare } = require("bcryptjs");
const { check } = require('express-validator')


const password=check('password')

const customer_ssn=check('customer_ssn');
//check if email exists
const ssnExists = check('customer_ssn').custom(async (value) => {
  const { rows } = await db.query("SELECT * from customer WHERE customer_ssn = $1", [
    value,
  ]);

  console.log(rows);
  if (rows.length) {
    throw new Error("The ssn provided already exists.");
  }
});

//login validation
const loginFieldsCheck = check('customer_ssn').custom(async (value, { req }) => {
  const user = await db.query("SELECT * from customer WHERE customer_ssn = $1", [value]);

  if (!user.rows.length) {
    throw new Error("The ssn provided does not exists.");
  }

  const validPassword = (req.body.password == user.rows[0].password);

  if (!validPassword) {
    throw new Error("Wrong password");
  }

  req.user = user.rows[0];
});


const emppassword = check("password");

const emp_SSN = check("emp_SSN");
//check if email exists
const empSSNExists = check("emp_SSN").custom(async (value) => {
  const { rows } = await db.query("SELECT * from customer WHERE emp_SSN = $1", [
    value,
  ]);

  console.log(rows);
  if (rows.length) {
    throw new Error("The ssn provided already exists.");
  }
});


//login validation
const emploginFieldsCheck = check("emp_SSN").custom(async (value, { req }) => {
  const user = await db.query("SELECT * from employee WHERE emp_SSN = $1", [
    value,
  ]);

  console.log(value);
  console.log("Michias")
  console.log(value);

  if (!user.rows.length) {
    throw new Error("The ssn provided does not exists.");
  }

  const validPassword = req.body.password == user.rows[0].password;

  if (!validPassword) {
    throw new Error("Wrong password");
  }

  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [customer_ssn, password, ssnExists],
  loginValidation: [loginFieldsCheck],
  onboardingValidation: [emp_SSN, emppassword, empSSNExists],
  emploginValidation: [emploginFieldsCheck],
};
