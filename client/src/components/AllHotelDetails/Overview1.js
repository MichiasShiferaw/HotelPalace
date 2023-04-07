import React from 'react'

const Overview1 = () => {
  return (
    <>
      {/* <div className="container shadow min-vh-100 py-2"> */}
        <div className="container shadow py-2">
        <div className="container network_wrapper col-sm p-2 ">
          <div className="card">
            {/* <div className="card-header">
              <h5 className="card-title">Network Settings</h5>
            </div> */}
            <div className="container mb-2">
              {/* <div className="col-md-10"> */}
              <div className="col">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col-auto d-none d-lg-block">
                    <svg
                      className="bd-placeholder-img"
                      width="350"
                      height="250"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                      </text>
                    </svg>
                  </div>
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">Hotel Name</h3>
                    <strong className="d-inline-block mb-2 text-success">
                      Stars Rating
                    </strong>
                    <div className="mb-1 text-body-secondary">Country</div>
                    <p className="mb-auto">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a href="#" className="stretched-link">
                      Continue reading
                    </a>
                  </div>

                  <div className="col-md-3">
                    <div className="card mt-3">
                      <div className="card-body vstack gap-3">
                        <h5 className="card-title">Chain</h5>
                        <div className="card-text">Cheapest at $ $3242</div>

                        <a href="#" className="btn btn-primary">
                          CheckOut Deals
                        </a>
                        <hr className="m-0" />
                        <div>Company</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul
              className="nav nav-tabs card-header-tabs d-flex justify-content-around"
              data-bs-tabs="tabs"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="true"
                  data-bs-toggle="tab"
                  href="#Details"
                >
                  Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#static">
                  Static
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#michias">
                  Michias
                </a>
              </li>
            </ul>
            <form className="card-body tab-content">
              <div className="tab-pane active" id="Details">
                <p className="card-text">Ameneties.</p>

              </div>
              <div className="tab-pane" id="static">
                <p className=" card-text">Availablities Per Rooms.</p>
              </div>
              <div className="tab-pane" id="michias">
                <p className=" card-text">Price Points.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview1