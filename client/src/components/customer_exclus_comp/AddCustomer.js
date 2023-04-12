import React, { useContext, useState } from 'react';
import api from '../../apis/apiIndex';
import { CustomersContext } from '../../Contexts/CustomersContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddCustomers = () => {
  const auth = useSelector((state) => state.auth);
  let history = useNavigate();
  let joiningDate = new Date();
    const offset = joiningDate.getTimezoneOffset();
    joiningDate = new Date(joiningDate.getTime() - offset * 60 * 1000);

    const [values, setValues] = useState({
      customer_ssn: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      street_name: "",
      street_number: "",
      city: "",
      province: "",
      postal_code: "",
      country: "",
      joining_date: joiningDate,
      phone_number: "",
      password: "",
      last_updated: joiningDate,
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // console.log(values.joining_date)
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();

      try {
        const { data } = await api.post("/log/register", values);

        setError("");
        setSuccess(data.message);
        setValues({
          customer_ssn: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          email: "",
          street_name: "",
          street_number: "",
          city: "",
          province: "",
          postal_code: "",
          country: "",
          joining_date: "",
          phone_number: "",
          password: "",
          last_updated: "",
        });
        history(`/emp/${auth.ssn}/dashboard`)
      } catch (error) {
        setError(error.response.data.errors[0].msg);
        setSuccess("");
      }
    };

  return (
    <div className="container-lg mb-4   d-block">
              <div className="container">
          <div className=" row g-3">
            <form onSubmit={(e) => onSubmit(e)}>
              <h1>Register</h1>

              <div className="col-md-6">
                <label htmlFor="customer_ssn" className="form-label">
                  Customer SSN
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="customer_ssn"
                  name="customer_ssn"
                  value={values.customer_ssn}
                  placeholder="test@gmail.com"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  value={values.password}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="col-md-5 mb-3">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="first_name"
                  name="first_name"
                  value={values.first_name}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="middle_name" className="form-label">
                  Initials
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="middle_name"
                  name="middle_name"
                  value={values.middle_name}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">
                  last_name
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  value={values.last_name}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="street_number" className="form-label">
                  Street Number
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="number"
                  className="form-control"
                  id="street_number"
                  name="street_number"
                  value={values.street_number}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="street_name" className="form-label">
                  street_name
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="street_name"
                  name="street_name"
                  value={values.street_name}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={values.city}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="province" className="form-label">
                  Province
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="province"
                  name="province"
                  value={values.province}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={values.country}
                  placeholder="test@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postal_code" className="form-label">
                  Postal Code
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="postal_code"
                  name="postal_code"
                  value={values.postal_code}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={values.email}
                  placeholder="test@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label">
                  Phone Number
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  type="number"
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  value={values.phone_number}
                  placeholder="test@gmail.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="joining_date" className="form-label">
                  Joining Date
                </label>
                <input
                  value={joiningDate.toISOString().split("T")[0]}
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  id="joining_date"
                  name="joining_date"
                  placeholder="test@gmail.com"
                  disabled
                  readonly
                />
              </div>

              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
              <div style={{ color: "green", margin: "10px 0" }}>{success}</div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default AddCustomers;