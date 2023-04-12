const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

//import passport middleware
require('./middleware/passport-middleware')
require("./middleware/emp-passport-middleware");
app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize())

//routes

// app.use("/authentication", require("./routes/jwtAuth"));


app.use("/cust", require("./routes/retrieveCustomer_basic"));

app.use("/booking", require("./routes/booking"));

app.use("/location", require("./routes/location_search"));

app.use("/log", require("./routes/auth"));

app.use("/emp", require("./routes/employee"));

const port = process.env.PORT || 3006;

app.listen(port, () => {
  console.log(`Server is up! Listening to ${port}`);
});