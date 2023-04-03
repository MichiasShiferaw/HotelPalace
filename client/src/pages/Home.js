import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import AddRestaurants from "../components/AddRestaurants";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <>
      {/* <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        > */}
          <Link to="/hi" className="btn-secondary">
            our rooms
          </Link>

          <button type="button" className="btn btn-secondary">Primary</button>
        <div>
          <Header/>
          <AddRestaurants/>
          <RestaurantList/>
        </div>
        
        <h1>Stays near you</h1>

        <h1>Top 9 popular cities</h1>



        {/*</Banner>
       </Hero>
      <Services />
      <FeaturedRooms /> */}
    </>
  );
};

export default Home;