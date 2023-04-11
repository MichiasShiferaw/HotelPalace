import React from 'react';
import { Link } from 'react-router-dom';
import LocationFilter from '../components/Filter/LocationFilter';
import HCBanner from '../components/HCBanner';
import Overview from '../components/AllHotelDetails/Overview1';

import Recommended from '../components/Recommended';
import Footer from '../components/Footer/Footer_small';
import Layout from '../components/Layout/Layout';


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

          {/* <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Hotel Place
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto ms-5 mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Popular
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Brands
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recommended
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header> */}
          <LocationFilter />
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