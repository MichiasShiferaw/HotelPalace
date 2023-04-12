import React from 'react';
import { Link } from 'react-router-dom';
import LocationFilter from '../components/Filter/LocationFilter';
import HCBanner from '../components/HCBanner';
import Overview from '../components/AllHotelDetails/Overview1';
import RoomsContainer from '../components/Filter/RoomsContainer';
import Recommended from '../components/Recommended';
import Footer from '../components/Footer/Footer_small';
import Layout from '../components/Layout/Layout';
// import RoomsContainer from '../components/Filter/RoomsContainer';


const CustomerLandingPage = () => {
    // const isAuth = false;
  return (
    <>
      <div className="bg-secondary" style={{ backgroundColor: "#0baddc" }}>
        <Layout>
          <section
            className="site-hero overlay"
            style={{ backgroundPosition: "0% 0px" }}
          >
            <div className="container">
              <div className="row site-hero-inner justify-content-center align-items-center">
                <div className="col-md-10 pt-5 text-center">
                  <span className="custom-caption text-uppercase text-white d-block  mb-3">
                    CSI 2132 Project
                  </span>
                  <h1 className="heading pt-5">
                    {" "}
                    Welcome To The <span className="text-primary">
                      Hotel Place
                    </span>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <RoomsContainer/>
          {/* 
      <Overview /> */}
          <Recommended />

          <HCBanner />
          <Footer /> 
        </Layout>
      </div>
    </>
  );
}

export default CustomerLandingPage