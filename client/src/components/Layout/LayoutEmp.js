import React from 'react'

import Navbar from "../Navbar/NavbarEmp";
const EmpLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default EmpLayout;
