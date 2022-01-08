import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


class AboutPage extends Component {
  render() {
    return (
      <Container id="about-container-fluid">
        <Row className="mt-5">
          <Col xs={12} md={8} lg={6} xl={5} className="my-auto">
            <Image src="/images/blueswell.jpg" rounded fluid></Image>
          </Col>
        </Row>
        <Row className="">
          <Col xs={12} md={8} lg={6} xl={5} className="my-auto">
            <p className="mt-2 pt-3 section-heading-text font-blue">ABOUT ME</p>
            <p className="mt-2">
              I'm a software engineer living in Cambridge, MA. During my time at MIT,
              my research focused on camera-based perception for autonomous robots.
              When I'm not writing code, I like to go running and biking.
            </p>
            <p className="mt-2 font-blue">
              At the moment, I'm looking for a jobs with an impact on climate and/or animal welfare.
            </p>
            <Card className="SocialMediaCard Transparent">
              <Card.Body className="SocialMediaCardBody">
                {/* <Card.Link href="milo@bluemeadow.ai" className="text-small">milo(at)bluemeadow.ai</Card.Link> */}
                <Card.Link href="https://www.linkedin.com/in/milo-knowles/" target="_blank"><span className="fa fa-linkedin"></span></Card.Link>
                <Card.Link href="https://twitter.com/milo_knowles" target="_blank"><span className="fa fa-twitter"></span></Card.Link>
                <Card.Link href="https://github.com/miloknowles" target="_blank"><span className="fa fa-github"></span></Card.Link>
                <Card.Link href="https://www.strava.com/athletes/6914634" target="_blank"><img src="/strava.svg" className="strava-icon text-small"/></Card.Link>
                <Card.Link href="/images/miloknowles_resume.pdf" className="text-small" target="_blank">Resume</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={0} md={2} xl={6} className="my-auto"></Col>
        </Row>
      </Container>
    );
  }
}


export default AboutPage;
