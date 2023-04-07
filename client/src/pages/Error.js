import React from "react";

import { Link } from "react-router-dom";
const Error = () => {
  return (

    <section style={{backgroundColor:"#adb5bd"}}>
      <h1> ERROR</h1>
    <div className='text-center m-0 p-0'>
      <div className="row justify-content-center align-items-center">
      <div className="col-md-4 text-center d-none d-md-block">
        {/* <img alt="logo" className="img-fluid" src="/assets/images/chef3.gif"/> */}
    </div>
    <Link to="/" className="btn-primary">
          return home
        </Link>
    </div>
    </div>
    </section>
    
  );
};

export default Error;
