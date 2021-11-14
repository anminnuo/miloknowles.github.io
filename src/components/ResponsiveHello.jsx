import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';


class ResponsiveHello extends Component {
  render() {
    return (
      <Container id="hello-text">
        <Row>
          {/* https://stackoverflow.com/questions/35077631/how-to-hide-one-column-from-grid-in-bootstrap-mobile-version */}
          <Col xs={12} md={12} className="d-none d-md-block d-lg-block d-xl-block">
            <p className="hello-text text-center align-middle font-blue mono-font animate__animated animate__fadeIn">
            HI, MY NAME IS MILO. WELCOME TO MY WEBSITE!</p>
          </Col>
          <Col xs={12} className="d-block d-md-none d-lg-none d-xl-none">
            <p className="hello-text text-center align-middle font-blue mono-font animate__animated animate__fadeIn">
            HI, MY NAME IS MILO.</p>
          </Col>
          <Col xs={12} className="d-block d-md-none d-lg-none d-xl-none">
            <p className="hello-text text-center align-middle font-blue mono-font animate__animated animate__fadeIn">
            WELCOME TO MY WEBSITE!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default ResponsiveHello;
