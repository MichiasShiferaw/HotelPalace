const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));


app.use("/cust", require("./routes/retrieveCustomer_basic"));

app.use("/booking", require("./routes/booking"));

app.use("/location", require("./routes/location_search"));




const port = process.env.PORT || 3006;

app.listen(port, () => {
  console.log(`Server is up! Listening to ${port}`);
});