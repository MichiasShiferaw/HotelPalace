import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../../apis/apiIndex";
// import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    customer_ssn: "",
    password: "",
  });

  const { customer_ssn, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { customer_ssn, password };
      const response = await api.post("/authentication/api/v1/login", {
        customer_ssn,
        password,
      });

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        // toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        alert("email or password is wrong");
        // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <main className="authcomp text-center w-100">
        <div className="sign-in__backdrop"></div>
        <form className=" shadow p-5 bg-info-subtle" onSubmit={onSubmitForm}>
          <h1 className="mb-5 text-center">Login</h1>
          <hr />

          <div className="form-floating">
            <input
              type="text"
              className="form-control my-3"
              id="floatingInput"
              placeholder="123456789"
              name="customer_ssn"
              value={customer_ssn}
              onChange={(e) => onChange(e)}
            />
            <label for="floatingInput">Customer SSN</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="form-control my-3"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <input type="checkbox" value="remember-me" />
            <label>Remember me</label>

          </div>
          <button className="btn btn-success btn-block">Submit</button>
        </form>
        <Link to="/register">register</Link>
      </main>
    </>
  );
};

export default Login;
