import React, { useContext, useEffect } from "react";
import { CustomersContext } from "../../context/CustomersContext";
import CustomerFinder from "../../apis/CustomerFinder";
import { useNavigate } from "react-router-dom";



const CustomerList = () => {

      const { customers, setCustomers } = useContext(CustomersContext);
      let history = useNavigate();

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await CustomerFinder.get("/");
            setCustomers(response.data.data.customer);
            console.log(response);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

      const handleDelete = async (id) => {
        console.log(id);

        try {
          const response = await CustomerFinder.delete(`/${id}`);
          setCustomers(
            customers.filter((customer) => {
              return customer.customer_ssn !== id;
            })
          );
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      };

      const handleUpdate = (e, id) => {
        e.stopPropagation();
        // history(`/restaurants/${id}/update`);
      };

      const handleCustomerSelect = (id) => {
        // history(`/restaurants/${id}`);
      };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Customers</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-primary">
            Add Customer
          </button>
        </div>
      </div>

      <h2>Recent Customers</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">customer SSN</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Country</th>
              <th scope="col">Phone Number</th>
              {/* <th scope="col">Password</th> */}
              <th scope="col">last_updated</th>
              <th scope="col">Changes</th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers.map((el) => {
                return (
                  <tr
                    onClick={() => handleCustomerSelect(el.customer_ssn)}
                    key={el.customer_ssn}
                  >
                    <td>{el.customer_ssn}</td>
                    <td>
                      {el.first_name} {el.middle_name} {el.last_name},{" "}
                    </td>
                    <td>
                      {el.street_number} {el.street_name},{el.city},{" "}
                      {el.province}
                    </td>
                    <td>{el.country}</td>
                    <td>{el.phone_number}</td>
                    <td>{el.last_updated}</td>
                    <td>
                      <button
                        onClick={() => handleCustomerSelect(el.customer_ssn)}
                        // onClick={(e) => handleUpdate(e, el.customer_ssn)}
                        className="btn btn-secondary"
                      >
                        Detail
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(el.customer_ssn)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    {/* <td>{"$".repeat(el.street_number)}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerList;