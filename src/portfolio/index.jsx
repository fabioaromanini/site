/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Carousel from './Carousel';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './portfolio.css';

export default () => (
  <Container id="portfolio">
    <Row>
      <Col>
        <h2 id="portfolio-title">portfolio</h2>
      </Col>
    </Row>
    <Row>
      <Col>{/* <Carousel /> */}</Col>
    </Row>
    <Row id="links">
      <Col xs="6">
        <a
          href="https://github.com/fabioaromanini/site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitIcon} alt="github repository icon" />
        </a>
      </Col>
      <Col xs="6">
        <a
          href="https://www.linkedin.com/in/fabioaromanini/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>
      </Col>
    </Row>
  </Container>
);
