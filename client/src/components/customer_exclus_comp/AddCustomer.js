import React, { useContext, useState } from 'react';
import api from '../../apis/apiIndex';
import { CustomersContext } from '../../Contexts/CustomersContext';

const AddCustomers = () => {
    const {addCustomers} = useContext(CustomersContext);
    const [customer_ssn, setCustomer_SSN] = useState("");
    const [first_name, setFirst_Name] = useState("");
    const [middle_name, setMiddle_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [street_name, setStreet_Name] = useState("");
    const [street_number, setStreet_Number]= useState("");
    const [city, setCity] = useState("");
    const [province, setProvince]= useState("");
    const [country, setCountry]= useState("");
    const [pc, setPc]= useState("");
    const [joining_date, setJoining_Date] = useState("");
    const [phone_number, setPhone_Number] = useState("");
    const [password, setPassword] = useState("");
    const [last_updated, setLast_Updated] = useState("");

    // const [priceRange, setPriceRange]= useState("Price Range");


    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            const response = await api.post("/cust/api/v1/view-customer", {
              customer_ssn,
              first_name,
              middle_name,
              last_name,
              email,
              street_name,
              street_number,
              city,
              province,
              postal_code: pc,
              country,
              joining_date,
              phone_number,
              password,
              last_updated,
            });
            addCustomers(response.data.data.customer);
            // console.log(response.data.data);
        }catch(err){
            console.log(err);
            
        }
    }

    let joiningDate = new Date();
    const offset = joiningDate.getTimezoneOffset();
    joiningDate = new Date(joiningDate.getTime() - offset * 60 * 1000);

  return (
    <div className="container-lg mb-4   d-block">
      <form action="" className="row g-3 p-4">
        {/* <div className="form-row"> */}
        <div className="col-md-6">
          <input
            value={customer_ssn}
            onChange={(e) => setCustomer_SSN(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Customer SSN"
          />
        </div>
        <div className="col-md-6">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="col-md-5">
          <input
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>{" "}
        <div className="col-md-2">
          <input
            value={middle_name}
            onChange={(e) => setMiddle_Name(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Initials"
          />
        </div>{" "}
        <div className="col-md-5">
          <input
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        <div className="col-md-1">
          <input
            value={street_number}
            onChange={(e) => setStreet_Number(e.target.value)}
            type="number"
            className="form-control"
            placeholder="##"
          />
        </div>
        <div className="col-md-3">
          <input
            value={street_name}
            onChange={(e) => setStreet_Name(e.target.value)}
            type="text"
            className="form-control"
            placeholder="street name"
          />
        </div>
        <div className="col-md-2">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="form-control"
            placeholder="city"
          />
        </div>
        <div className="col-md-2">
          <input
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            type="text"
            className="form-control"
            placeholder="prov"
          />
        </div>
        <div className="col-md-2">
          <input
            value={pc}
            onChange={(e) => setPc(e.target.value)}
            type="text"
            className="form-control"
            placeholder="pc"
          />
        </div>
        <div className="col-md-2">
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            className="form-control"
            placeholder="country"
          />
        </div>
        {/*  */}
        <div className="col-md-3">
          <label htmlFor="lastUpdated" className="form-label">
            Last Updated
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="col">
          <label htmlFor="lastUpdated" className="form-label">
            Last Updated
          </label>
          <input
            value={phone_number}
            onChange={(e) => setPhone_Number(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
        <div className="col">
          <label htmlFor="lastUpdated" className="form-label">
            Last Updated
          </label>
          <input
            value={joiningDate.toISOString().split("T")[0]}
            onChange={(e) => setJoining_Date(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Joining Date"
            disabled
            readonly
          />
        </div>
        <div className="col">
          <label htmlFor="lastUpdated" className="form-label">
            Last Updated
          </label>
          <input
            value={joiningDate.toISOString().split("T")[0]}
            onChange={(e) => setLast_Updated(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Last Updated"
            id="lastUpdated"
            disabled
            readonly
          />
        </div>
        <hr />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-secondary w-75"
        >
          Add
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default AddCustomers;