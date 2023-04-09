
import React, {
  Component,
  Suspense,
  Fragment,
  useState,
  useEffect,
} from "react";
//Link
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Home from "./pages/Home";
import { CustomersContextProvider } from "./Contexts/CustomersContext";
import UpdatePage from "./components/customer_exclus_comp/UpdateCustomer";
import MainHome from "./pages/MainHome";
import Error from "./pages/Error";
import HotelPage from "./pages/HotelLandingPage";
import Dashboard from "./components/DashboardContent/emp/EmpDashboard";
import Calendar from "./components/Calendar";
import Booking from "./components/Booking";
import CustomerList from "./components/DashboardContent/emp/CustomerList";
import StaffList from "./components/DashboardContent/emp/EmployeeList";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserDetailPage from "./components/DashboardContent/cust/UserDetailPage";
import AddCustomers from "./components/customer_exclus_comp/AddCustomer";
import EmpDashboardContent from "./components/DashboardContent/emp/DashboardContent";
import CustDashboardContent from "./components/DashboardContent/cust/DashboardContent";
// import DashboardContent from "./components/EmpDashboardContent/DashboardContent";
import CustDashboard from "./components/DashboardContent/cust/CustDashboard";
import CurrBooking from "./components/DashboardContent/cust/CurrBooking";
import AllBooking from "./components/DashboardContent/cust/AllBooking";
import EmpDetailPage from "./components/DashboardContent/emp/EmpDetailPage";
import BookingForm from "./components/Forms/BookingForm";
import Hero from "./components/AllHotelDetails/Hero";


const WebRoutes = () => {
  return (
    <CustomersContextProvider>
      <>
        <Router>
          <Routes>
            {/* <Route exact path="/" Component={Home}/> */}
            <Route exact path="/" Component={MainHome} />
            <Route path="/hotel/:id" Component={HotelPage} >
              <Route path="home" Component={Hero}/>
            <Route path="book" Component={BookingForm} />
            <Route path="rooms" Component={Rooms} />
            <Route path="room-detai/:slug" Component={SingleRoom} />
            </Route>

            <Route exact path="/login" element={<Login props />} />
            <Route exact path="/register" element={<Register props />} />

            <Route path="c/:id" Component={CustDashboard}>
              <Route path="profile" Component={UserDetailPage} />
              <Route path="profile/update" Component={UpdatePage} />
              <Route path="dashboard" Component={CustDashboardContent} />
              <Route path="booking">
                <Route path="curr" Component={CurrBooking} />
                <Route path="all" Component={AllBooking} />
                <Route path="add" Component={AddCustomers} />
              </Route>
            </Route>

            <Route path="/emp" Component={Dashboard}>
              <Route path="dashboard" Component={EmpDashboardContent} />
              <Route path="calendar" Component={Calendar} />
              <Route path=":emp_ssn/profile" Component={EmpDetailPage} />
              <Route path=":emp_ssn/profile/update" Component={UpdatePage} />
              {/* <Route path="booking">
                asdf
                <oute path="all" Component={AddCustomers} />
                <Route path="add" Component={AddCustomers} />
                <Route path=":booking_id" Component={UserDetailPage} />
              </Route> */}
              <Route path="customers">
                <Route path="all" Component={CustomerList} />
                <Route path="add" Component={AddCustomers} />
                <Route path=":customer_ssn" Component={UserDetailPage} />
                <Route path=":customer_ssn/update" Component={UpdatePage} />
              </Route>
              <Route path="staff" Component={StaffList}>
                <Route path="all" Component={CustomerList} />
                <Route path="add" Component={AddCustomers} />
                <Route path=":emp_ssn" Component={UserDetailPage} />
                <Route path=":emp_ssn/update" Component={UpdatePage} />
              </Route>
              <Route path="room" Component={StaffList}>
                <Route path="all" Component={CustomerList} />
                <Route path="add" Component={AddCustomers} />
                <Route path=":room_id" Component={UserDetailPage} />
                <Route path=":room_id/update" Component={UpdatePage} />
              </Route>
            </Route>

            <Route path="*" Component={Error} />
          </Routes>
        </Router>
      </>
    </CustomersContextProvider>
  );
}

export default WebRoutes;