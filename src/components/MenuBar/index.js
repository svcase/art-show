import React from 'react';
import './menubar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuBar = () => {

  return (
    <div>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand className="logo" href="#header">Garage Art Show</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto container-fluid justify-content-end">
          <Nav.Link className="navlink" href="#deets">About</Nav.Link>
          <Nav.Link className="navlink" href="#artists">Meet the Artists</Nav.Link>
          <Nav.Link className="navlink" href="#rsvp">RSVP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default MenuBar;
