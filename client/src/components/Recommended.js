import React from 'react'
import { NavLink } from 'react-router-dom';

const Recommended = () => {
	const city1= 'hi';
	const city2 = "hi";
	const city3 = "hi";
  return (
    <section className="section blog-post-entry bg-primary pb-4">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading fs-1d" id="recommended-section">
              Top Cities
            </h2>
            <p>The top three most searched for cities on Hotel Palace</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12 post">
            <div className="media media-custom d-block mb-4 h-100 border border-5 bg-light">
              <a href="#" className="mb-4 d-block">
                <img
                  src="/assets/images/details-1.jpeg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </a>
              <div className="media-body">
                <h2 className="mt-0 mb-3">
                  <NavLink to={city1} className="text-danger">
                    {city1}
                  </NavLink>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 post aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="media media-custom d-block mb-4 h-100  border border-5 bg-light">
              <a href="#" className="mb-4 d-block">
                <img
                  src="/assets/images/details-3.jpeg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </a>
              <div className="media-body">
                <h2 className="mt-0 mb-3">
                  <NavLink to={city2} className="text-danger">
                    {city2}
                  </NavLink>
                </h2>
                <p>
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 post aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="media media-custom d-block mb-4 h-100  border border-5 bg-light">
              <a href="#" className="mb-4 d-block">
                <img
                  src="/assets/images/details-2.jpeg"
                  alt="Image placeholder"
                  className="img-fluid"
                />
              </a>
              <div className="media-body">
                <h2 className="mt-0 mb-3">
                  <NavLink to={city3} className="text-danger">
                    {city3}
                  </NavLink>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. t is a paradisematic country,
                  in which roasted parts of sentences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommended