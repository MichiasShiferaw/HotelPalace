import React, { useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import DashboardData from "../../../data/EmpDashboardData.json"
import Layout from "../../Layout/Layout";
import { useDispatch } from "react-redux";
import api from "../../../apis/apiIndex";
import { unauthenticateUser } from "../../../redux/authSlice";

const CustDashboard = () => {
    const { id } = useParams();
  const hi = DashboardData["Booking"];
  console.log(DashboardData["Booking"]);
  {
    Object.keys(hi).map((section) => console.log(section));
  }


  const dispatch = useDispatch();
  const [loading, setLoading]=useState(true)
  const [protectData, setProtectedData]=useState(null)

  const logout = async () => {
    try {
      const {data} = await api.get("/log/logout");

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  // const protectedInfo = async () => {
  //   try {
  //     const { data } = await fetchProtectedInfo();

  //     setProtectedData(data.info);

  //     setLoading(false);
  //   } catch (error) {
  //     logout();
  //   }
  // };

  return (
    <Layout>
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex={-1}
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted fs-3 small fw-bold text-uppercase px-3">
                  CORE
                </div>
              </li>
              <hr className="text-light" />

              <li>
                <NavLink
                  to={`/c/${id}/dashboard/home`}
                  className="nav-link px-3 fs-5"
                >
                  <span className="me-2">
                    <i className="bi bi-speedometer2" />
                  </span>
                  <span>Dashboard</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={`/cust/home`} className="nav-link px-3 fs-5">
                  <span className="me-2">
                    <i className="bi bi-speedometer2" />
                  </span>
                  <span>Customer Landing Page</span>
                </NavLink>
              </li>

              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-muted small fs-3 fw-bold text-uppercase px-3 mb-2">
                  Main
                </div>
              </li>
              <hr className="text-light" />

              <li>
                <NavLink
                  to={`/c/${id}/dashboard/profile`}
                  className="nav-link px-3 fs-5"
                >
                  <span className="me-2">
                    <i className="bi bi-speedometer2" />
                  </span>
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link fs-5"
                  data-bs-toggle="collapse"
                  href="#layouts"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Your Bookings</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <NavLink
                        to={`/c/${id}/dashboard/booking/curr`}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Current Booking</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/c/${id}/dashboard/booking/all`}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Booking</span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to={`/c/${id}/dashboard/booking/add`}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Add Booking</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button onClick={() => logout()} className="btn btn-primary nav-link px-3 fs-5">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* offcanvas */}
      <main className=" dashboard-main mt-5 pt-3">
        <Outlet />
      </main>
    </Layout>
  );
};

export default CustDashboard;
