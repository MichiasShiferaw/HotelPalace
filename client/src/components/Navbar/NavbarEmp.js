import React from 'react'
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { unauthenticateEmp } from '../../redux/authSlice';
import api from '../../apis/apiIndex';
import { useDispatch } from "react-redux";

const NavbarEmp = () => {
      const { id } = useParams();
      const auth = useSelector((state) => state.auth);
      console.log(auth)

        const dispatch = useDispatch();
  const logout = async () => {
    try {
      const { data } = await api.get("/emp/logout");

      dispatch(unauthenticateEmp());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary bg-gradient fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon" data-bs-target="#sidebar" />
        </button>
        <a
          className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
          href="#"
        >
          Hotel Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topNavBar"
          aria-controls="topNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="topNavBar">
          <div className="d-flex ms-auto my-3 my-lg-0">
            {auth.isAuth && auth.emp ? (
              <>
                <button className="btn btn-info ">
                  Employee: {auth.ssn}
                </button>
                <button className="ms-4 btn btn-secondary">
                  Employed Under Hotel #{auth.hotel}
                </button>
                <NavLink
                  to={`/emp/${auth.ssn}/b-r/renting/add`}
                  className="ms-4 btn btn-warning"
                >
                  {" "}
                  Rent Now
                </NavLink>

                <button
                  onClick={() => logout()}
                  className="btn btn-primary ms-4  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to={`emp/login`} className="btn btn-danger">
                  Login
                </NavLink>
              </>
            )}
          </div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ms-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-fill" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarEmp