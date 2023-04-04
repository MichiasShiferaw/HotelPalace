import "./App.css";
import React, { Component, Suspense, useEffect } from "react";
//Link
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Home from "./pages/Home";
import { CustomersContextProvider } from "./context/CustomersContext";
import UpdatePage from "./components/user_comp/UpdateCustomer";
import MainHome from "./pages/MainHome";
import Error from "./pages/Error";
import HotelPage from "./pages/HotelPage";
import EmpDashboard from "./pages/employee/EmpDashboard";
import Dashboard from "./components/employees_comp/Dashboard";
import Calendar from "./components/employees_comp/Calendar";
import Booking from "./components/employees_comp/Booking";
import CustomerList from "./components/employees_comp/CustomerList";
import StaffList from "./components/employees_comp/StaffList";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import UserDetailPage from "./components/user_comp/UserDetailPage";
function App() {
  return (
    <CustomersContextProvider>
      <>
        <Router>
          <Routes>
            {/* <Route exact path="/" Component={Home}/> */}
            <Route exact path="/" Component={MainHome} />

            <Route exact path="/hotel/:id" Component={HotelPage} />
            <Route path="/hotel/:id/rooms" Component={Rooms} />
            <Route path="/hotel/:id/single" Component={SingleRoom} />

            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />

            <Route
              exact
              path="view-customers/:id"
              Component={UserDetailPage}
            />
            <Route
              exact
              path="/view-customers/:id/update"
              Component={UpdatePage}
            />

            <Route path="/emp" Component={EmpDashboard}>
              <Route path="dashboard" Component={Dashboard} />
              <Route path="calendar" Component={Calendar} />
              <Route path="booking" Component={Booking} />
              <Route path="view-customers" Component={CustomerList}>
                <Route path=":customer_ssn" Component={UserDetailPage} />
                <Route path=":customer_ssn/update" Component={UpdatePage} />
              </Route>
              <Route path="view-staff" Component={StaffList} />
            </Route>

            <Route Component={<Error />} />
          </Routes>
        </Router>
      </>
    </CustomersContextProvider>
  );
}

export default App;
