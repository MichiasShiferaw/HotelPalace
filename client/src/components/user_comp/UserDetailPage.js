import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomerContext } from "../context/CustomerContext";
import CustomerFinder from "../apis/CustomerFinder";

import React from "react";

const UserDetailPage = () => {
  const { id } = useParams();
  const { selectedCustomer, setSelectedCustomer } =
    useContext(CustomerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerFinder.get(`/${id}`);
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
      <h1>Hi</h1>
      <h2>Yo</h2>
      {/* <h3>{selectedCustomer.street_number}</h3> */}
      {selectedCustomer && (
        <>
          <h1 className="text-center display-1">
            {selectedCustomer.customer.street_number}{" "}
            {selectedCustomer.customer.street_name}
          </h1>
          <h1 className="text-center display-5">
            {selectedCustomer.customer.city},{" "}
            {selectedCustomer.customer.province},{" "}
            {selectedCustomer.customer.postal_code},{" "}
            {selectedCustomer.customer.country}
          </h1>
        </>
      )}
    </div>
  );
};

export default UserDetailPage;
