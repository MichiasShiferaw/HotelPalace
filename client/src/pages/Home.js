import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

import LocationFilter from "../components/Filter/LocationFilter";





const Home = () => {
  return (
    <>
          <Link to="/hi" className="btn-secondary">
            our rooms
          </Link>

          <button type="button" className="btn btn-secondary">Primary</button>
        <section>

        </section>

        
        <h1>Stays near you</h1>

        <h1>Top 9 popular cities</h1>

{/* 
        <LocationFilter/> */}
    </>
  );
};

export default Home;