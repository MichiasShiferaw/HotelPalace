module.exports = function (req, res, next) {
  const { customer_ssn, email, name, password } = req.body;

//   function validEmail(userEmail) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
//   }

  if (req.path === "/api/v1/register") {
    console.log(!email.length);
    if (
      ![
        customer_ssn,
        first_name,
        middle_name,
        last_name,
        email,
        street_name,
        street_number,
        city,
        province,
        postal_code,
        country,
        joining_date,
        phone_number,
        password,
        last_updated,
      ].every(Boolean)
    ) {
      return res.json("Missing Credentials");
    } 
    
    // else if (!validEmail(email)) {
    //   return res.json("Invalid Email");
    // }
  } else if (req.path === "/api/v1/login") {
    if (![customer_ssn, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } 
    // else if (!validEmail(email)) {
    //   return res.json("Invalid Email");
    // }
  }

  next();
};
