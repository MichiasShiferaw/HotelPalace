import React from 'react'
import UserDashboard from '../../components/employees_comp/UserDashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../components/employees_comp/Dashboard'
import CustomerList from '../../components/employees_comp/CustomerList'
import Calendar from '../../components/employees_comp/Calendar'
import Booking from '../../components/employees_comp/Booking'

const EmpDashboard = () => {
  return (
    <>
      {/* <BrowserRouter> */}

      <UserDashboard/>
        {/* <Routes>
          <Route exact path="/dashboard" Component={Dashboard} />
          <Route exact path="/calendar" Component={Calendar} />
          <Route exact path="/booking" Component={Booking} />
          <Route exact path="/view-customers" Component={Calendar} />
        </Routes> */}
      {/* </UserDashboard> */}
      {/* </BrowserRouter> */}
      {/* <main className='empdashboard d-flex flex-nowrap'> */}
      {/* <UserDashboard/> */}
      {/* </main> */}
    </>
  );
}

export default EmpDashboard