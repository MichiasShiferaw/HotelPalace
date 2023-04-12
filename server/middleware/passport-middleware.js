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
  secretOrKey: "csi2132project",
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(opts, async ({ ssn }, done) => {
    try {
        console.log(ssn)
      const { rows } = await db.query(
        "SELECT customer_ssn, first_name FROM customer WHERE customer_ssn = $1",
        [ssn]
      );


      if (!rows.length) {
        throw new Error("401 not authorized");
      }

      let user = { ssn: rows[0].customer_ssn, first_name: rows[0].first_name };

      return await done(null, user);
    } catch (error) {
      console.log(error.message);
      done(null, false);
    }
  })
);
