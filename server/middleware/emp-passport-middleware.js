const passport = require("passport");
const { Strategy } = require("passport-jwt");
// const { SECRET } = require("../constants");
const db = require("../db/index");

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) token = req.cookies["token"];
  return token;
};

const opts = {
  secretOrKey: "emp-csi2132project",
  jwtFromRequest: cookieExtractor,
};


passport.use(
  new Strategy(opts, async ({ ssn }, done) => {
    try {
      console.log(ssn);
      const { rows } = await db.query(
        "SELECT emp_SSN, first_name FROM employee WHERE emp_SSN = $1",
        [ssn]
      );

      console.log("Employee Side");
      console.log(rows);

      if (!rows.length) {
        throw new Error("401 not authorized");
      }

      let user = { ssn: rows[0].emp_SSN, hotel: rows[0].hotel_id };

      return await done(null, user);
    } catch (error) {
      console.log(error.message);
      done(null, false);
    }
  })
);
