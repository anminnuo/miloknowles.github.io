import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class ProjectCard extends Component {
  render() {
    return (
      <Accordion>
        <Card className="mt-5" bg="light" border="secondary">
          <Card.Header>
            <Container className="pl-2 pr-2">
              <Row className="" style={{padding: 0}}>
                <Col xs={12} lg={10} className="my-auto">
                  <Accordion.Toggle as={Button} variant="link" className="read-more-button" eventKey="0">
                    <div className="project-title-text font-blue text-left mono-font">(+) {this.props.title} </div>
                  </Accordion.Toggle>
                </Col>
                {/* https://getbootstrap.com/docs/5.0/utilities/display/ */}
                {/* Hide on lg and smaller */}
                <Col xs={0} lg={2} className="my-auto text-right d-none d-lg-block">
                  <div className="text-small font-blue mono-font">{this.props.date}</div>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Img variant="top" src={this.props.image} bg="primary" fluid="true"/>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="outlined">
              <Card.Text className="pt-3">
                {this.props.description}
              </Card.Text>
              {this.props.links}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}


export default ProjectCard;
