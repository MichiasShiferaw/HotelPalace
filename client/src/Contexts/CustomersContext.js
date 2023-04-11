import React, { useState, createContext } from "react";

export const CustomersContext = createContext();

export const CustomersContextProvider = (props) => {
  const [customers, setCustomers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [infos, setInfos] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const addCustomers = (customer) => {
    setCustomers([...customers, customer]);
  };

  const addBookings = (booking) => {
    setBookings([...bookings, booking]);
  };

    const addInfos = (info) => {
      setInfos([...infos, info]);
    };
  return (
    <CustomersContext.Provider
      value={{
        customers,
        setCustomers,
        addCustomers,
        selectedCustomer,
        setSelectedCustomer,
        bookings,
        setBookings,
        addBookings,
        selectedBooking,
        setSelectedBooking,
        infos,
        setInfos,
        addInfos,
        selectedInfo,
        setSelectedInfo,
      }}
    >
      {props.children}
    </CustomersContext.Provider>
  );
};
