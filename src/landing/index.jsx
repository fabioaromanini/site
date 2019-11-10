/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import arrow from './images/gif-bounce-arrow.gif';

import './landing.css';

export default () => (
  <div id="landing">
    <h1>fabioaromanini</h1>
    <div className="content">
      <p>
        Data engineer with experience in software engineering and cloud
        infrastructure.
      </p>
    </div>
    <div className="about">
      <p>this site is</p>
      <ul>
        <li>mobile first</li>
        <li>written in react</li>
        <li>built and deployed with travis</li>
        <li>hosted on aws s3</li>
        <li>distributed using cloud front</li>
      </ul>
    </div>
    <a href="#portfolio">
      <img src={arrow} id="arrow" alt="arrow pointing down" />
    </a>
  </div>
);
