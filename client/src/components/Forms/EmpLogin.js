import React, { useState } from "react";
import api from "../../apis/apiIndex";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { authenticateEmp } from "../../redux/authSlice";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const EmpLogin = () => {
  let history=useNavigate();
  const [values, setValues] = useState({
    emp_SSN: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/emp/login", values);
       const hotel_info = await api.get(`/emp/get-emp/${values.emp_SSN}`);
      dispatch(
        authenticateEmp({
          ssn: `${values.emp_SSN}`,
          hotel: `${hotel_info.data.data.employee[0].hotel_id}`,
        })
      );

      localStorage.setItem("isAuth", "true");
      localStorage.setItem("emp", "true");
      localStorage.setItem(
        "hotel",
        `${hotel_info.data.data.employee[0].hotel_id}`
      );

      localStorage.setItem("ssn", `${values.emp_SSN}`);
      history(`/emp/${values.emp_SSN}/dashboard`);
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <>
      <Layout>
        <div className=" container-xxl  sign-in__backdrop text-center bg-primary p-5 my-3">
          <div className="container">
            <div className=" row g-3">
              <form onSubmit={(e) => onSubmit(e)}>
                <h1>Employee Login</h1>

                <div className="mb-3">
                  <label htmlFor="emp_SSN" className="form-label">
                    emp_SSN
                  </label>
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    className="form-control"
                    id="emp_SSN"
                    name="emp_SSN"
                    value={values.emp_SSN}
                    placeholder="1234"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={(e) => onChange(e)}
                    type="password"
                    value={values.password}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="passwod"
                    required
                  />
                </div>

                <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
      <Footer className="pt-4" />
    </>
  );
};

export default EmpLogin;
