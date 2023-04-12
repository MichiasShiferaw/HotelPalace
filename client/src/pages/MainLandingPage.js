import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const MainLandingPage = () => {
  return (
    <>
      <div className="container-fluid cover d-flex text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 py-4 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">Hotel Palace</h3>
            </div>
          </header>
          <div className="container my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
              <svg
                className="bi mt-4 mb-3"
                style={{ color: "var(--bs-indigo)" }}
                width="100"
                height="100"
              ></svg>
              <h1 className="text-body-emphasis">Welcome to Hotel Palace</h1>
              <p className="col-lg-10 mx-auto fs-5">Change Text Later</p>
              <div className="d-inline-flex gap-2 mb-5">
                <Link to="/cust/home">
                  <button
                    className="d-inline-flex align-items-center fw-bold border-secondary btn btn-primary btn-lg px-4"
                    type="button"
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