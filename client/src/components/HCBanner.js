import React from 'react'

const HCBanner = () => {
  return (
    <section className="pt-100 pb-70 bg-primary text-center text-white bg-opacity-50">
      <div className="container px-xl-0">
        <div className="row justify-content-center">
          <h2 className="fs-2 col-lg-8">Our Great Hotel Chains</h2>
          <div className="col-lg-8 mt-25 mb-55 fs-4 medium op-7 text-adaptive">
            
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-5 col-sm-6 ">
            <div className="mx-auto my-2 mw-270 h-160 d-flex justify-content-center align-items-center block">
              <img
                height={"160px"}
                src="/assets/images/hotel_chain/BW.png"
                srcset="/assets/images/hotel_chain/BW.png 2x"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 ">
            <div className="mx-auto my-2 mw-270 h-160 d-flex justify-content-center align-items-center rounded block">
              <img
                height={"160px"}
                src="/assets/images/hotel_chain/MI.png"
                srcset="/assets/images/hotel_chain/MI.png 2x"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 ">
            <div className="mx-auto my-2 mw-270 h-160 d-flex justify-content-center align-items-center block">
              <img
                width={"270px"}
                src="/assets/images/hotel_chain/CH.png"
                srcset="i/content_31_logo_3@2x.png 2x"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 ">
            <div className="mx-auto my-2 mw-270 h-160 d-flex justify-content-center align-items-center block">
              <img
                width={"270px"}
                src="/assets/images/hotel_chain/SHG.png"
                srcset="i/content_31_logo_4@2x.png 2x"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 ">
            <div className="mx-auto my-2 mw-270 h-160 d-flex justify-content-center align-items-center rounded block">
              <img
                src="/assets/images/hotel_chain/FSHR.png"
                srcset="i/content_31_logo_5@2x.png 2x"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-6 ">
            <div className="mx-auto my-2 mw-270 h-160 d-flex justify-content-center align-items-center rounded block">
              <img
                src="/assets/images/hotel_chain/DH.png"
                srcset="i/content_31_logo_6@2x.png 2x"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HCBanner;