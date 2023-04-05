import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomersContext } from "../../context/CustomersContext";
import CustomerFinder from "../../apis/CustomerFinder";

const UpdateCustomer = () => {
  const { id } = useParams();
  let history = useNavigate();
  //   console.log(id);

  const { customers } = useContext(CustomersContext);
  const [customer_ssn, setCustomer_SSN] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [middle_name, setMiddle_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [street_name, setStreet_Name] = useState("");
  const [street_number, setStreet_Number] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [pc, setPc] = useState("");
  const [joining_date, setJoining_Date] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const [password, setPassword] = useState("");
  const [last_updated, setLast_Updated] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await CustomerFinder.get(`/${id}`);
      console.log(response.data.data);
      console.log("Michias");
      console.log(response.data.data.customer.city);

      setCustomer_SSN(response.data.data.customer.customer_ssn);
      setFirst_Name(response.data.data.customer.first_name);
      setMiddle_Name(response.data.data.customer.middle_name);
      setLast_Name(response.data.data.customer.last_name);
      setEmail(response.data.data.customer.email);
      

      setStreet_Name(response.data.data.customer.street_name);
      setStreet_Number(response.data.data.customer.street_number);
      setCity(response.data.data.customer.city);
      setProvince(response.data.data.customer.province);
      setPc(response.data.data.customer.postal_code);
      setCountry(response.data.data.customer.country);

      setJoining_Date(response.data.data.customer.joining_date);
      setPhone_Number(response.data.data.customer.phone_number);
      setPassword(response.data.data.customer.password);
      setLast_Updated(response.data.data.customer.last_updated);




    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCustomer = await CustomerFinder.put(`/${id}`, {
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
    history("/view-customers");
  };

  return (
    <div>
      <form action="">
        <section className="pb-3">
        <div className="form-group">
          <label htmlFor="customer_ssn">Customer SSN</label>
          <input
            value={customer_ssn}
            onChange={(e) => setCustomer_SSN(e.target.value)}
            id="customer_ssn"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            value={first_name}
            onChange={(e) => setFirst_Name(e.target.value)}
            id="first_name"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="middle_name">Middle Name</label>
          <input
            value={middle_name}
            onChange={(e) => setMiddle_Name(e.target.value)}
            id="middle_name"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            value={last_name}
            onChange={(e) => setLast_Name(e.target.value)}
            id="last_name"
            className="form-control"
            type="text"
          />
        </div>
        </section>
        <hr/>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="street_name">Street Name</label>
          <input
            value={street_name}
            onChange={(e) => setStreet_Name(e.target.value)}
            id="street_name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="street_number">Street Number</label>
          <input
            value={street_number}
            onChange={(e) => setStreet_Number(e.target.value)}
            id="street_number"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            id="city"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <input
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            id="province"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            value={pc}
            onChange={(e) => setPc(e.target.value)}
            id="postal_code"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            id="country"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="joining_date">Joining Date</label>
          <input
            value={joining_date}
            onChange={(e) => setJoining_Date(e.target.value)}
            id="joining_date"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            value={phone_number}
            onChange={(e) => setPhone_Number(e.target.value)}
            id="phone_number"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_updated">Last Updated</label>
          <input
            value={last_updated}
            onChange={(e) => setLast_Updated(e.target.value)}
            id="last_updated"
            className="form-control"
            type="text"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateCustomer;
