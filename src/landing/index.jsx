/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import arrow from './images/gif-bounce-arrow.gif';
import avatar from './images/avatar.jpeg';

import './landing.css';

export default () => (
  <Container id="landing">
    <Row>
      <Col xs="12" id="avatar">
        <img src={avatar} alt="fabio romanini" />
      </Col>
    </Row>
    <Row>
      <Col xs="12" id="title">
        <h1>fabioaromanini</h1>
      </Col>
    </Row>
    <Row>
      <Col xs="12" id="about">
        <p>
          Data engineer with experience in software engineering and cloud
          infrastructure.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <a href="#portfolio">
          <img src={arrow} id="arrow" alt="arrow pointing down" />
        </a>
      </Col>
    </Row>
  </Container>
);
