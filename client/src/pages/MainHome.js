import React from 'react'
import { Link } from 'react-router-dom'
import LocationFilter from '../components/Filter/LocationFilter';
import HCBanner from '../components/HCBanner';
import Overview from '../components/AllHotelDetails/Overview1';
import { Searchbar } from '../components/Filter/Searchbar';

const MainHome = () => {
  return (
    <>
      <h1>MainHome</h1>
      <div>
        <h2>Other Links</h2>
        <Link to="/hotel/:id/home" className="btn-secondary mx-4">
          Hotel
        </Link>
        <Link to="/hotel/:id/rooms" className="btn-secondary mx-4">
          Room
        </Link>
        <Link to="/hotel/:id/single" className="btn-secondary mx-4">
          Single
        </Link>
        <Link to="/emp/dashboard" className="btn-secondary mx-4">
          Employee Dashboard
        </Link>
        <Link to="/c/420597022/dashboard" className="btn-secondary mx-4">
          Customer Dashboard
        </Link>
      </div>

      <LocationFilter />

      <HCBanner />

      <Overview />
      <Searchbar />
    </>
  );
}

export default MainHome