import React from 'react'

const Footer = () => {
  return (
    // <div>Footer, Contact, Customer, My Account</div>
    <footer className="pt-70 pb-60 bg-light footer_4">
      <div className="container px-xl-0">
        <div className="row align-items-center">
          <div className="col-xl-2 order-0">
            <a href="#" className="link logo color-main">
              Startup
            </a>
          </div>
          <div className="col-xl-4 col-lg-9 order-2 order-xl-0">
            © 2020 Designmodo. All rights reserved.
          </div>
          <div className="mt-10 mb-10 my-xl-0 col-xl-6 text-xl-right links order-1 order-xl-0">
            <a href="#" className="link color-main mr-30">
              Virtual Tour
            </a>
            <a href="#" className="link color-main mr-30">
              Prices
            </a>
            <a href="#" className="link color-main mr-30">
              New Homes
            </a>
            <a href="#" className="link color-main mr-30">
              Find Agent
            </a>
            <a href="#" className="link color-main">
              Commercial
            </a>
          </div>
        </div>
        <div className="mt-30 mb-40 hr h-2 bg-gray op-5">
          <div></div>
        </div>
        <div className="row align-items-baseline">
          <div className="col-xl-10 col-md-9">
            <div className="color-heading text-adaptive">
              The world's largest source of international properties
            </div>
          </div>
          <div className="mt-10 mt-md-0 col-xl-2 col-md-3 text-md-right socials">
            <a href="#" className="f-18 link color-main mr-15">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="f-18 link color-main mx-15">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="f-18 link color-main ml-15">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer