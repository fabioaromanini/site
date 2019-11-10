/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';
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
    <div className="links">
      <a
        href="https://github.com/fabioaromanini/site"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitIcon} alt="github repository icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/fabioaromanini/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  </div>
);
