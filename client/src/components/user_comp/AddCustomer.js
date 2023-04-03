import React, { useContext, useState } from 'react';
import CustomerFinder from '../../apis/CustomerFinder';
import { CustomersContext } from '../../context/CustomersContext';

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
            const response = await CustomerFinder.post("/",{
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
                last_updated
            });
            addCustomers(response.data.data.customer);
            // console.log(response.data.data);
        }catch(err){
            console.log(err);
            // console.log(pc);
            
        }
    }

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={customer_ssn}
              onChange={(e) => setCustomer_SSN(e.target.value)}
              type="text"
              className="form-control"
              placeholder="street name"
            />
          </div>
          <div className="col">
            <input
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
              type="text"
              className="form-control"
              placeholder="street name"
            />
          </div>{" "}
          <div className="col">
            <input
              value={middle_name}
              onChange={(e) => setMiddle_Name(e.target.value)}
              type="text"
              className="form-control"
              placeholder="street name"
            />
          </div>{" "}
          <div className="col">
            <input
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
              type="text"
              className="form-control"
              placeholder="street name"
            />
          </div>
          <div className="col">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              placeholder="street name"
            />
          </div>
          <div className="col">
            <input
              value={street_name}
              onChange={(e) => setStreet_Name(e.target.value)}
              type="text"
              className="form-control"
              placeholder="street name"
            />
          </div>
          <div className="col">
            <input
              value={street_number}
              onChange={(e) => setStreet_Number(e.target.value)}
              type="number"
              className="form-control"
              placeholder="street number"
            />
          </div>
          <div className="col">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className="form-control"
              placeholder="city"
            />
          </div>
          <div className="col">
            <input
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              type="text"
              className="form-control"
              placeholder="province"
            />
          </div>
          <div className="col">
            <input
              value={pc}
              onChange={(e) => setPc(e.target.value)}
              type="text"
              className="form-control"
              placeholder="PC"
            />
          </div>
          <div className="col">
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>


          {/*  */}
          <div className="col">
            <input
              value={joining_date}
              onChange={(e) => setJoining_Date(e.target.value)}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>
          <div className="col">
            <input
              value={phone_number}
              onChange={(e) => setPhone_Number(e.target.value)}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>
          <div className="col">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>
          <div className="col">
            <input
              value={last_updated}
              onChange={(e) => setLast_Updated(e.target.value)}
              type="text"
              className="form-control"
              placeholder="country"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-secondary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomers;