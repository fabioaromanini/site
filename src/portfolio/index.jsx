/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './portfolio.css';

export default () => (
  <div id="portfolio">
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
