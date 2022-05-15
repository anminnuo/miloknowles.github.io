import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


class Content extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={8} lg={6} xl={4} className="my-auto">
          <Image src="/images/blueswell.jpg" rounded fluid></Image>
        </Col>
        <Col xs={12} md={8} lg={6} xl={6} className="my-auto">
          <div className="mt-3 d-lg-none"/>
          <p className="section-heading-text mk--green">About</p>
          <p className="mt-2">
            I'm a software engineer living in Cambridge, MA. During my time at MIT,
            my research focused on camera-based perception for autonomous robots.
            I'm broadly interested in working on problems in climate, sustainability, and animal welfare.
          </p>
          <p className="mt-2 mk--green">
            At the moment, I'm working on grid decarbonization at <a href="https://singularity.energy/">Singularity Energy</a>.
          </p>
          <Card className="SocialMediaCard Transparent">
            <Card.Body className="SocialMediaCardBody">
              <Card.Link href="mailto:miloknowles97@gmail.com" className="text-small"><span className="fa fa-envelope"></span></Card.Link>
              <Card.Link href="https://www.linkedin.com/in/milo-knowles/" target="_blank"><span className="fa fa-linkedin"></span></Card.Link>
              <Card.Link href="https://twitter.com/milo_knowles" target="_blank"><span className="fa fa-twitter"></span></Card.Link>
              <Card.Link href="https://github.com/miloknowles" target="_blank"><span className="fa fa-github"></span></Card.Link>
              <Card.Link href="https://www.strava.com/athletes/6914634" target="_blank"><img src="/strava.svg" className="strava-icon text-small"/></Card.Link>
              <Card.Link href="/images/miloknowles_cv.pdf" className="text-small" target="_blank">CV</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}


class AboutPage extends Component {
  render() {
    return (
      <Container>
        {/* Show on size 'md' and smaller. */}
        <Container className="d-lg-none mt-5">
          <Content/>
        </Container>
        {/* Show on size 'lg' and higher. */}
        <Container className="d-none d-lg-flex" style={{display: 'flex', height: 'calc(100vh - 60px)', alignContent: 'center', alignItems: 'center'}}>
          <Content/>
        </Container>
      </Container>
    );
  }
}


export default AboutPage;
