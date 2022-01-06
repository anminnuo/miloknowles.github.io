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
            <p className="mt-2 pt-3 section-heading-text font-blue">WRITING</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#/writing/bluemeadow">
              * What I learned from a (financially) unsuccessful year as a solo founder
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default WritingPage;
