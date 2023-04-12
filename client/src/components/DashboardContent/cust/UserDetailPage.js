import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomersContext } from "../../../Contexts/CustomersContext";
import api from "../../../apis/apiIndex";
import CurrBooking from "./CurrBooking";
import Archived from "./Archived";

const UserDetailPage = () => {
  const { id } = useParams();
  const { selectedCustomer, setSelectedCustomer} =
    useContext(CustomersContext);
  const { bookings, setBookings } = useContext(CustomersContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userinfo = await api.get(`/cust/api/v1/view-customer/${id}`);
        console.log(userinfo);

        console.log(userinfo.data.data.rowCount);

        setSelectedCustomer(userinfo.data.data.customer);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedCustomer && (
        <div className="card-group row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://static.thenounproject.com/png/4789654-200.png"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                />
                <h5 className="my-3">
                  {selectedCustomer.first_name} {selectedCustomer.last_name}
                </h5>
                <p className="text-muted mb-4">{selectedCustomer.country}</p>
                {/* <button className="btn btn-warning">Edit Profile</button> */}
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
                    <p className="text-muted mb-0">
                      {" "}
                      {selectedCustomer.first_name}{" "}
                      {selectedCustomer.middle_name}{" "}
                      {selectedCustomer.last_name}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{selectedCustomer.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {selectedCustomer.phone_number}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {selectedCustomer.street_number}{" "}
                      {selectedCustomer.stree_name}{" "}
                      {selectedCustomer.postal_code}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card mb-4 mb-md-0">
                <div className="card-body">
                  <h3 className="mb-4">
                    <span className="text-primary font-italic me-1">
                      All My Bookings (History)
                    </span>{" "}
                  </h3>
                  <Archived />
                  {/* <table
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
                </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
