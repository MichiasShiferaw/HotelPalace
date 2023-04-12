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
  Link,
  useNavigate,
} from "react-router-dom";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Home from "./pages/Home";
import { CustomersContextProvider } from "./Contexts/CustomersContext";
import UpdatePage from "./components/customer_exclus_comp/UpdateCustomer";
import Error from "./pages/Error";
import HotelPage from "./pages/HotelLandingPage";
import Dashboard from "./components/DashboardContent/emp/EmpDashboard";
import CustomerList from "./components/DashboardContent/emp/CustomerList";
import StaffList from "./components/DashboardContent/emp/EmployeeList";
import UserDetailPage from "./components/DashboardContent/cust/UserDetailPage";
import AddCustomers from "./components/customer_exclus_comp/AddCustomer";
import EmpDashboardContent from "./components/DashboardContent/emp/DashboardContent";
import CustDashboardContent from "./components/DashboardContent/cust/DashboardContent";

import CustDashboard from "./components/DashboardContent/cust/CustDashboard";
import CurrBooking from "./components/DashboardContent/cust/CurrBooking";
import AllBooking from "./components/DashboardContent/cust/AllBooking";
import AllBooking2 from "./components/DashboardContent/emp/Booking-Renting/AllBooking";
import EmpDetailPage from "./components/DashboardContent/emp/EmpDetailPage";
import BookingForm from "./components/Forms/BookingForm";
import Hero from "./components/AllHotelDetails/Hero";
import MainLandingPage from "./pages/MainLandingPage";
import CustomerLandingPage from "./pages/CustomerLandingPage";

import { useSelector } from "react-redux";
import Register2 from "./components/Forms/Register";
import Login2 from "./components/Forms/Login";
import UpdateBooking from "./components/UpdateBooking";
import UpdateRenting from "./components/UpdateRenting";
import EmpLogin from "./components/Forms/EmpLogin";
import AddEmployee from "./components/DashboardContent/emp/Staff/AddEmployee";
import AllStaff from "./components/DashboardContent/emp/Staff/AllStaff";
import AllRoom from "./components/DashboardContent/emp/Room/AllRoom";
import AddRoom from "./components/DashboardContent/emp/Room/AddRoom";
import AvailableRooms from "./components/DashboardContent/emp/Room/AvailableRooms";
import UpdateRoom from "./components/DashboardContent/emp/Room/UpdateRoom";
import AllChain from "./components/DashboardContent/emp/Chain/AllChain";
import AddChain from "./components/DashboardContent/emp/Chain/AddChain";
import AllHotel from "./components/DashboardContent/emp/Hotel/AllHotel";
import AddHotel from "./components/DashboardContent/emp/Hotel/AddHotel";
import AllRenting from "./components/DashboardContent/emp/Booking-Renting/AllRenting";
import RentingForm from "./components/Forms/RentingForm";
import CheckIn from "./components/DashboardContent/emp/Booking-Renting/CheckIn";
import CheckInMain from "./components/DashboardContent/emp/Booking-Renting/CheckInMain";

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.auth);

  console.log(auth);
  // navigate(`c/${auth.ssn}/dashboard`)
  console.log(auth.emp);
  return auth.isAuth && auth.emp;
};

const RestrictedRoutes = () => {
  // let navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  // console.log(`c/${authSsn}/dashboard`);
  // navigate(`c/${auth.ssn}/dashboard`)
  console.log(auth.isAuth);
  return auth.isAuth;
};

const WebRoutes = () => {
  return (
    <CustomersContextProvider>
      <>
        <Router>
          <Routes>
            <Route exact path="/" Component={MainLandingPage} />
            <Route path="/hotel/:id" Component={HotelPage}>
              <Route path="home" Component={Hero} />
              <Route path="book" Component={BookingForm} />
              <Route path="rooms" Component={Rooms} />
              <Route path="room-detai/:slug" Component={SingleRoom} />
            </Route>
            {/* bye
            <Route element={<PrivateRoutes />}> */}
            <Route exact path="/login" element={<Login2 />} />
            <Route exact path="/register" element={<Register2 />} />
            {/* </Route> */}
            <Route exact path="cust/home" Component={CustomerLandingPage} />

            <Route
              path="c/:id/dashboard"
              Component={RestrictedRoutes() ? CustDashboard : Login2}
            >
              <Route path="profile" Component={UserDetailPage} />
              <Route path="profile/update" Component={UpdatePage} />
              <Route path="home" Component={CustDashboardContent} />
              <Route path="booking">
                <Route path="curr" Component={CurrBooking} />
                <Route path="all" Component={AllBooking} />
                <Route path="add" Component={BookingForm} />
              </Route>
            </Route>

            <Route
              path={"emp/:id"}
              Component={PrivateRoutes() ? Dashboard : EmpLogin}
            >
              <Route path="dashboard" Component={EmpDashboardContent} />
              <Route path="profile" Component={EmpDetailPage} />
              <Route path="profile/update" Component={UpdatePage} />
              {/* <Route path="transfer-booking" Component={TransferR}/> */}
              <Route path="b-r">
                <Route path="booking/all" Component={AllBooking2} />
                <Route path="renting/add" Component={RentingForm} />
                <Route path="renting/all" Component={AllRenting} />
                <Route path="checkin">
                  <Route path="all" Component={CheckInMain} />
                  <Route path="booking-transfer/:id" Component={CheckIn} />
                </Route>
              </Route>

              <Route path="customers">
                <Route path="all" Component={CustomerList} />
                <Route path="add" Component={AddCustomers} />
                <Route path=":customer_ssn" Component={UserDetailPage} />
                <Route path=":customer_ssn/update" Component={UpdatePage} />
              </Route>
              <Route path="staff">
                <Route path="all" Component={AllStaff} />
                <Route path="add" Component={AddEmployee} />
                {/* <Route path=":emp_ssn" Component={UserDetailPage} />
                <Route path=":emp_ssn/update" Component={UpdatePage} /> */}
              </Route>
              <Route path="room">
                <Route path="all" Component={AllRoom} />
                <Route path="add" Component={AddRoom} />
                <Route path="available" Component={AvailableRooms} />
                <Route path="update/:room_id" Component={UpdateRoom} />
              </Route>

              <Route path="corp">
                <Route path="chain">
                  <Route path="all" Component={AllChain} />
                  <Route path="add" Component={AddChain} />
                </Route>
                <Route path="hotel">
                  <Route path="all" Component={AllHotel} />
                  <Route path="add" Component={AddHotel} />
                </Route>
              </Route>
            </Route>

            <Route exact path="booking/:id/update" Component={UpdateBooking} />
            <Route exact path="renting/:id/update" Component={UpdateRenting} />

            <Route path="*" Component={Error} />
          </Routes>
        </Router>
      </>
    </CustomersContextProvider>
  );
};

export default WebRoutes;
