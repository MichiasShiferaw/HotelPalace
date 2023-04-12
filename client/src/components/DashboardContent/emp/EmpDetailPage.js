import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomersContext } from "../../../Contexts/CustomersContext";
import api from "../../../apis/apiIndex";

const EmpDetailPage = () => {
  const { id } = useParams();
  const { selectedCustomer, setSelectedCustomer } =
    useContext(CustomersContext);
  // const {role,setRole}= useContext{[]};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const empinfo = await api.get(`/emp/get-emp/${id}`);
        console.log(empinfo);
        const empRole = await api.get(`/emp/get-emp/role/${id}`);

        // setSelectedCustomer(empinfo.data.data);

      
        console.log("Advice")
        console.log(empRole.data.data)
        // setRole(empRole.data.data)
        
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
              <h5 className="my-3">{selectedCustomer.emp_SSN}</h5>
              <p className="text-muted mb-1">Roles</p>
              <p className="text-muted mb-4">{selectedCustomer.country}</p>
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
                    {selectedCustomer.first_name} {selectedCustomer.middle_name}{" "}
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
                    {selectedCustomer.stree_name} {selectedCustomer.postal_code}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* hi */}
      {/* <h3>{selectedCustomer.street_number}</h3> */}
      {/* {selectedCustomer && (
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
      )} */}
    </div>
  );
};

export default EmpDetailPage;
