import React from 'react'

const RoomOptions = () => {
  return (
    <>
      <div id="rooms" className="container">
        <div
          className="text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
          }}
        >
          <h6 className="section-title text-center text-primary text-uppercase">
            Our Rooms
          </h6>
          <h1 className="mb-5">
            Explore Our{" "}
            <span className="text-primary text-uppercase">Rooms</span>
          </h1>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/assets/images/details-1.jpeg"
                  alt=""
                />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  $100/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Junior Suite</h5>
                  <div className="ps-2">
                    <small className="fa fa-star text-warning"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <p className="text-body mb-3">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href=""
                  >
                    View Detail
                  </a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/assets/images/details-2.jpeg"
                  alt=""
                />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  $100/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Executive Suite</h5>
                  <div className="ps-2">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <p className="text-body mb-3">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href=""
                  >
                    View Detail
                  </a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeInUp",
            }}
          >
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/assets/images/details-3.jpeg"
                  alt=""
                />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  $100/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Super Deluxe</h5>
                  <div className="ps-2">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <p className="text-body mb-3">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href=""
                  >
                    View Detail
                  </a>
                  <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomOptions