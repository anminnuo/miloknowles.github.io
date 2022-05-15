import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// NOTE: Links to blog posts must have a '#' in front of the URL for compatibility with hash router.
class WritingPage extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col>
            <p className="mt-2 pt-3 section-heading-text mk--green">Thoughts & Essays</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <a href="#/writing/bluemeadow">
              * Blue Meadow: What I learned from a year as a solo founder
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default WritingPage;
