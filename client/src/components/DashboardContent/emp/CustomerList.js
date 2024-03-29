import React, { useContext, useEffect, useState } from "react";
import { CustomersContext } from "../../../Contexts/CustomersContext";
import api from "../../../apis/apiIndex";
import { Link, useNavigate } from "react-router-dom";
import AddCustomers from "../../customer_exclus_comp/AddCustomer";
import { useSelector } from "react-redux";


const CustomerList = () => {
  const auth = useSelector((state) => state.auth);
    const [searchText, setsearchText] = useState("");


      const { customers, setCustomers } = useContext(CustomersContext);
      let history = useNavigate();

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await api.get(
              "/cust/api/v1/view-customer"
            );
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
          const response = await api.delete(`/cust/api/v1/view-customer/${id}`);
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
        history(`/emp/${auth.ssn}/customers/${id}/update`);
      };

      // const handleCustomerSelect = (id) => {
      //   history(`/emp/${auth.ssn}/customers/${id}`);
      // };

        const onSubmitForm = async (e) => {
          e.preventDefault();
          try {
          } catch (err) {
            console.log(err);
          }
        };

          const handleCheck = async () => {
            try {
              const response = await api.get(
                `/search/api/v1/search-customer/?info=${searchText}`
              );
              console.log(response);
              setCustomers(response.data.data.customer);
            } catch (err) {
              console.log(err);
            }
          };
  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Customers</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button type="button" className="btn btn-sm btn-outline-primary">
            Add Customer
          </button>
        </div>
      </div>

      <h2>Recent Customers</h2>
      <form
        className="d-flex justify-content-evenly w-75 container"
        onSubmit={onSubmitForm}
      >
        <input
          type="text"
          placeholder="Enter a SSN or name"
          className="form-control py-2 col-md-8 text-center"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={() => handleCheck()}
        >
          Check
        </button>
      </form>
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
                    // onClick={() => handleCustomerSelect(el.customer_ssn)}
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
                      {/* <Link to={`/c/${auth.ssn}/dashboard/booking/add`} state={ detail: {el.customer_ssn} } className="btn btn-primary">
                        Hi
                      </Link> */}
                      {/* 
                      <Link to={`/c/${auth.ssn}/dashboard/booking/add`} className="btn btn-primary" state={ detail: {el.customer_ssn} }>
                          Update

                      </Link> */}
                      <Link
                        to={`/emp/${auth.ssn}/customers/${el.customer_ssn}/update`}
                        state={{ detail: el.customer_ssn }}
                        className="btn btn-secondary"
                      >
                        Details
                      </Link>
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
            {customers.length === 0 && <p>No Results Found</p>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
