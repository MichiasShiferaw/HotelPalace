import React from 'react';


const Rooms = () => {
  return (
    <>
      <main class="container mt-5">
        <div class="row mb-4 rounded">
          <div class="col-md-8 p-4 p-md-5 text-bg-dark">
            <h1 class="display-4 fst-italic">Room Image</h1>
          </div>
          <div class="col sidebar p-4 p-md-5 border">
            <div class="sidebar-box bg-light rounded"></div>
            <div class="sidebar-box">
              <h3>Amentities</h3>
              <div class="d-md-flex">
                <ul class="categories me-md-4">
                  <li>
                    <a href="#">Free Wifi</a>
                  </li>
                  <li>
                    <a href="#">Easy Booking</a>
                  </li>
                  <li>
                    <a href="#">Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Swimming Pool</a>
                  </li>
                </ul>
                <ul class="categories ms-md-4">
                  <li>
                    <a href="#">Beauty &amp; Health</a>
                  </li>
                  <li>
                    <a href="#">60" Flatscreen TV</a>
                  </li>
                  <li>
                    <a href="#">Cold Aircondition</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar-box mt-3">
              <h3>Damages</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus itaque, autem necessitatibus voluptate quod mollitia
                delectus aut, sunt placeat nam vero culpa sapiente consectetur
                similique, inventore eos fugit cupiditate numquam!
              </p>
            </div>
          </div>
        </div>
        <div class="row mb-4 rounded pb-5">
          <div class="col-md-9  border">
            <h2>Room Name</h2>
            <p>
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline of Alphabet Village and the subline of her own road,
              the Line Lane. Pityful a rethoric question ran over her cheek,
              then she continued her way.
            </p>

            <div class="d-md-flex mt-5 mb-5">
              <ul class="list">
                <li>
                  <span>Max:</span> 3 Persons
                </li>
                <li>
                  <span>Size:</span> 45 m2
                </li>
              </ul>
              <ul class="list ms-md-5">
                <li>
                  <span>View:</span> Sea View
                </li>
                <li>
                  <span>Bed:</span> 1
                </li>
              </ul>
            </div>
            <a
              href="/hotel/:id/book"
              className=" btn btn-primary rounded-4 w-50 py-3 px-md-5 d-block"
            >
              Book This Room Now<i className="fa fa-arrow-right ms-3"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
export default Rooms;