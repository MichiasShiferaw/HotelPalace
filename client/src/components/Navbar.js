import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="header_menu_16 pt-30 pb-30 mt-15 bg-primary">
        <div className="container px-xl-0">
          <div className="row justify-content-center">
            <div
              className="col-xl-10 aos-init aos-animate"
              data-aos-duration="600"
              data-aos="fade-down"
              data-aos-delay="1200"
            >
              <div className="row align-items-baseline">
                <div className="col-lg-9 d-flex align-items-center f-18 medium">
                  <div className="mr-15 logo color-white">Startup 3</div>
                  <a href="#" className="mx-15 link color-white">
                    Tour
                  </a>
                  <a href="#" className="mx-15 link color-white">
                    Prices
                  </a>
                  <a href="#" className="mx-15 link color-white">
                    About
                  </a>
                  <a href="#" className="mx-15 link color-white">
                    F.A.Q.
                  </a>
                  <a href="#" className="mx-15 link color-white">
                    Support
                  </a>
                </div>
                <div className="col-lg-3 d-flex justify-content-end align-items-baseline">
                  <a href="#" className="btn sm action-1">
                    Buy $38
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* // </div> */}
    </>
  );
}

export default Navbar