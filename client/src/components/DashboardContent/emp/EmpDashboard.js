import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import EmpLayout from "../../Layout/LayoutEmp";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);


  return (
      <EmpLayout>
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex={-1}
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  Main
                </div>
              </li>
              <li>
                <NavLink to={`/emp/${auth.ssn}/dashboard`} className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-speedometer2" />
                  </span>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/emp/${auth.ssn}/b-r/checkin/all`}
                  className="nav-link px-3 fs-3"
                >
                  <span className="me-2">
                    <i className="bi bi-book-fill" />
                  </span>
                  <span>Check In</span>
                </NavLink>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Main
                </div>
              </li>

              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Booking/Renting</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <NavLink to={`/emp/${auth.ssn}/b-r/renting/all`} className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Renting</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/emp/${auth.ssn}/b-r/booking/all`} className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Booking</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/emp/${auth.ssn}/b-r/renting/add`}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Adding Renting</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts1"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split" />
                  </span>
                  <span>Customers</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down" />
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts1">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <NavLink
                        to={`/emp/${auth.ssn}/customers/all`}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>All Customers</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/emp/${auth.ssn}/customers/add`}
                        className="nav-link px-3"
                      >
                        <span className="me-2">
                          <i className="bi bi-speedometer2" />
                        </span>
                        <span>Add Customer</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* offcanvas */}
      <main className="dashboard-main mt-5 pt-3">
        <Outlet />
      </main>
    </EmpLayout>
  );
};

export default Dashboard;
