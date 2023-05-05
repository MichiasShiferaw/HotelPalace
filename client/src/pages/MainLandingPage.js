import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const MainLandingPage = () => {
  return (
    <>
      <div
        className="container-fluid cover d-flex text-center "
        style={{
          background:
            "linear-gradient(120deg,#ff2506 0%,#ff705f 60%,#ff705f 60%,#ffcb66 60%,#ffae11)",
        }}
      >
        <div className="cover-container d-flex w-100 h-100 p-3 py-4 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">Hotel Palace</h3>
            </div>
          </header>
          <div className="container my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
              <img
                class="d-block mx-auto mb-4"
                src="/assets/images/logo/logo1.png"
                alt=""
                width="126"
                height="100"
              ></img>
              <h1 className="text-body-emphasis pb-4">
                Welcome to Hotel Palace
              </h1>
              <div className="d-inline-flex gap-2 mb-5">
                <Link to="/cust/home">
                  <button
                    className="d-inline-flex align-items-center fw-bold border-secondary btn btn-lg px-4 text-light"
                    type="button"
                    style={{ backgroundColor: "#4D8B31" }}
                  >
                    View Customer Experience
                  </button>
                </Link>
                <Link to="/emp/dashboard">
                  <button
                    className="btn btn-light fw-bold border-white bg-secondary btn-lg px-4"
                    type="button"
                  >
                    View Employee Experience
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <footer className="mt-auto text-white-50">
            <p>
              Developed in a{" "}
              <a
                href="https://www.geeksforgeeks.org/what-is-pern-stack/"
                className="text-white"
              >
                PERN
              </a>{" "}
              stack{" "}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default MainLandingPage;