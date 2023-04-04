import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomersContext } from "../../context/CustomersContext";
import CustomerFinder from "../../apis/CustomerFinder";

const UserDetailPage = () => {
  const { id } = useParams();
  const { selectedCustomer, setSelectedCustomer } =
    useContext(CustomersContext);

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

          {/* <h4 className="text-center display-5">
            {selectedCustomer.customer.last_updated},{" "}
            {selectedCustomer.customer.phone_number},{" "}

          </h4> */}
        </>
      )}
    </div>
  );
};

export default UserDetailPage;
