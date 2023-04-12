import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3005",
});


export const axiosPrivate = axios.create({
  baseURL: "http://localhost:3005",
  withCredentials:true
});


// Basic Customers
//   /cust/api/v1/view-customer

// User Login
// /authentication 

// Customer
// /cust 

//Booking
// /booking 

//Location
// /location
