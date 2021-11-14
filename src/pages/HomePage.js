import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import RRTAlgorithm from '../components/RRTAlgorithm';
import ResponsiveHello from '../components/ResponsiveHello';


class HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Container id="tree-container" fluid>
          <RRTAlgorithm/>
        </Container>
        <ResponsiveHello/>
      </Container>
    );
  }
}


export default HomePage;
