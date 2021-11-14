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
            <Nav.Link href="#/home" className="mono-font">HOME</Nav.Link>
            <Nav.Link href="#/about" className="mono-font">ABOUT</Nav.Link>
            <Nav.Link href="#/projects" className="mono-font">PROJECTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
