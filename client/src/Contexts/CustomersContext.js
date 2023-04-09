import React, { useState, createContext } from "react";

export const CustomersContext = createContext();

export const CustomersContextProvider = (props) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const addCustomers = (customer) => {
    setCustomers([...customers, customer]);
  };
  return (
    <CustomersContext.Provider
      value={{
        customers,
        setCustomers,
        addCustomers,
        selectedCustomer,
        setSelectedCustomer,
      }}
    >
      {props.children}
    </CustomersContext.Provider>
  );
};
