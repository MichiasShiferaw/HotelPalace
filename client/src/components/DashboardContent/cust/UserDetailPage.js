import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomersContext } from "../../../Contexts/CustomersContext";
import api from "../../../apis/apiIndex";

const UserDetailPage = () => {
  const { id } = useParams();
  const { selectedCustomer, setSelectedCustomer } =
    useContext(CustomersContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/cust/api/v1/view-customer/${id}`);
        console.log(response);

        setSelectedCustomer(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="card-group row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img
                src="https://static.thenounproject.com/png/4789654-200.png"
                alt="avatar"
                className="rounded-circle img-fluid"
              />
              <h5 className="my-3">SSN</h5>
              <p className="text-muted mb-1">Joined Date</p>
              <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            </div>
          </div>
          {/* <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fas fa-globe fa-lg text-warning"></i>
                  <p className="mb-0">https://mdbootstrap.com</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-github fa-lg" style={{color: "#333333"}}></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-twitter fa-lg" style={{color: "#55acee"}}></i>
                  <p className="mb-0">@mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-instagram fa-lg" style={{color: "#ac2bac"}}></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <i className="fab fa-facebook-f fa-lg" style={{color: "#3b5998"}}></i>
                  <p className="mb-0">mdbootstrap</p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Johnatan Smith</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Mobile</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">(098) 765-4321</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <h3 className="mb-4">
                  <span className="text-primary font-italic me-1">
                    Recent Bookings
                  </span>{" "}
                </h3>
                <table
                  id="example"
                  className="table table-striped data-table"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-primary font-italic me-1">assigment</span>{" "}
                    Project Status
                  </p>
                  <p className="mb-1" style={{ fontSize: ".77rem" }}>
                    Web Design
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    Website Markup
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    One Page
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    Mobile Template
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    Backend API
                  </p>
                  <div className="progress rounded mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <p className="mb-4">
                    <span className="text-primary font-italic me-1">assigment</span>{" "}
                    Project Status
                  </p>
                  <p className="mb-1" style={{ fontSize: ".77rem" }}>
                    Web Design
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    Website Markup
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    One Page
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "89%" }}
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    Mobile Template
                  </p>
                  <div className="progress rounded" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                    Backend API
                  </p>
                  <div className="progress rounded mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* hi */}
      {/* <h3>{selectedCustomer.street_number}</h3> */}
      {selectedCustomer && (
        <>
          <h2 className="text-center">
            User Customer: {selectedCustomer.customer.customer_ssn}
          </h2>
          <h3 className="text-center display-3">
            {selectedCustomer.customer.first_name},{" "}
            {selectedCustomer.customer.middle_name},{" "}
            {selectedCustomer.customer.last_name},{" "}
          </h3>
          <h1 className="text-center display-4">
            User Address:
            {selectedCustomer.customer.street_number}{" "}
            {selectedCustomer.customer.street_name}
          </h1>
          <h1 className="text-center display-5">
            {selectedCustomer.customer.city},{" "}
            {selectedCustomer.customer.province},{" "}
            {selectedCustomer.customer.postal_code},{" "}
            {selectedCustomer.customer.country}
          </h1>

          <hr />
        </>
      )}
    </div>
  );
};

export default UserDetailPage;
