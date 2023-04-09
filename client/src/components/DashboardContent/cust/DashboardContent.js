import React from 'react'

const DashboardContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h4>Dashboard</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <span className="me-2">
                <i className="bi bi-bar-chart-fill" />
              </span>
              Profile
            </div>
            <div className="card-body">
              <h1>NAme</h1>
              <h3>Joined Date</h3>
              {/* <canvas className="chart" width={400} height={200} /> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header">
              <span className="me-2">
                <i className="bi bi-bar-chart-fill" />
              </span>
              Current Bookings
            </div>
            <div className="card-body">
              <table
                  id="example"
                  className="table table-striped data-table"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    </tbody>
                    </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card">
            <div className="card-header">
              <span>
                <i className="bi bi-table me-2" />
              </span>{" "}
              Your Recent Bookings
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped data-table"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                    <tr>
                      <td>Cara Stevens</td>
                      <td>Sales Assistant</td>
                      <td>New York</td>
                      <td>46</td>
                      <td>2011/12/06</td>
                      <td>$145,600</td>
                    </tr>
                    <tr>
                      <td>Hermione Butler</td>
                      <td>Regional Director</td>
                      <td>London</td>
                      <td>47</td>
                      <td>2011/03/21</td>
                      <td>$356,250</td>
                    </tr>
                    <tr>
                      <td>Lael Greer</td>
                      <td>Systems Administrator</td>
                      <td>London</td>
                      <td>21</td>
                      <td>2009/02/27</td>
                      <td>$103,500</td>
                    </tr>
                    <tr>
                      <td>Jonas Alexander</td>
                      <td>Developer</td>
                      <td>San Francisco</td>
                      <td>30</td>
                      <td>2010/07/14</td>
                      <td>$86,500</td>
                    </tr>
                    <tr>
                      <td>Shad Decker</td>
                      <td>Regional Director</td>
                      <td>Edinburgh</td>
                      <td>51</td>
                      <td>2008/11/13</td>
                      <td>$183,000</td>
                    </tr>
                    <tr>
                      <td>Michael Bruce</td>
                      <td>Javascript Developer</td>
                      <td>Singapore</td>
                      <td>29</td>
                      <td>2011/06/27</td>
                      <td>$183,000</td>
                    </tr>
                    <tr>
                      <td>Donna Snider</td>
                      <td>Customer Support</td>
                      <td>New York</td>
                      <td>27</td>
                      <td>2011/01/25</td>
                      <td>$112,000</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent