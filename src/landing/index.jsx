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
        A multidisciplinary professional in love with technology, data and software. But even more in love with problem solving and achitecting solutions to everyday challenges. 
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <h4 id="skills">highlighted skills</h4>
        <ul id="skills-list">
          <li>
            - <a href="https://serverless.com">Serverless Framework</a>
          </li>
          <li>- AWS DynamoDB</li>
          <li>- GCP BigQuery</li>
          <li>- Docker</li>
          <li>- English, portuguese & spanish</li>
        </ul>
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
