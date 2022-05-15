import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class NotFound extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="align-items-center MaxHeightMinusNavbar">
          <Col>
            <div>
              <p className="text-center mono-font mk--green">(THIS PAGE DOES NOT EXIST)</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default NotFound;
