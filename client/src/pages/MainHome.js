import React from 'react'
import { Link } from 'react-router-dom'

const MainHome = () => {
  return (
    <>
      <h1>MainHome</h1>
      <div>
        <h2>Other Links</h2>
        <Link to="/hotel/:id" className="btn-secondary mx-4">
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
      </div>
    </>
  );
}

export default MainHome