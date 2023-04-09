import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomersContext } from "../../../Contexts/CustomersContext";
import api from "../../../apis/apiIndex";

const EmpDetailPage = () => {
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
              <p className="text-muted mb-1">Roles</p>
              <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            </div>
          </div>
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

export default EmpDetailPage;
