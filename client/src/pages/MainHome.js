import React from 'react'
import { Link } from 'react-router-dom'
import LocationFilter from '../components/Filter/LocationFilter';
import HCBanner from '../components/HCBanner';
import Overview from '../components/AllHotelDetails/Overview1';
import { Searchbar } from '../components/Filter/Searchbar';
import MainHomeFooter from '../components/MainHomeFooter';
import { Navbar, Nav, Container } from 'react-bootstrap';


const MainHome = () => {
  return (
    <>
      
      <Navbar bg="dark" variant = "dark" expand="lg" className = "justify-content-center">
     
        <Container>
          <Navbar.Brand href="/hotel/:id" >Main Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/emp/dashboard">Employee Dashboard</Nav.Link>
            
          </Nav>
        </Container>

      </Navbar>


      <br></br>
      <LocationFilter />

      <HCBanner />

      
      <Searchbar />
      <MainHomeFooter />
    </>
  );
}

export default MainHome


/*
<Overview />

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



*/