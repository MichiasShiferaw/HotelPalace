import React, { useState } from "react";
import api from "../../apis/apiIndex";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/authSlice";
import Footer from "../Footer/Footer";

const Login2 = () => {
  const [values, setValues] = useState({
    customer_ssn: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await api.post("/log/login",(values))
      dispatch(authenticateUser({ssn: `${values.customer_ssn}`}))

      localStorage.setItem('isAuth', 'true')
      localStorage.setItem('ssn',`${values.customer_ssn}`)
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
  }

  return (
    <>
    <Layout>
      <div className=" container-xxl  sign-in__backdrop text-center bg-secondary p-5 my-3">
        <div className="container">
          <div className=" row g-3">
          <form onSubmit={(e) => onSubmit(e)}>
            <h1>Login</h1>

            <div className="mb-3">
              <label htmlFor="customer_ssn" className="form-label">
                customer_ssn
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                className="form-control"
                id="customer_ssn"
                name="customer_ssn"
                value={values.customer_ssn}
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
    </Layout>
          <Footer className="pt-4"/>
          </>
    
  );

}

export default Login2