import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar variant="light" id="top-navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/home" className="navbar-font">Home</Nav.Link>
            <Nav.Link href="#/about" className="navbar-font">About</Nav.Link>
            <Nav.Link href="#/projects" className="navbar-font">Projects</Nav.Link>
            <Nav.Link href="#/writing" className="navbar-font">Writing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
