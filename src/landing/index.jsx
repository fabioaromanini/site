import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';
import './landing.css';

const text = `A playground for some technologies and concepts I'm studying.
Currently, this website is:`;

export default () => (
  <header id="landing">
    <h1>fabioaromanini</h1>
    <div id="content">
      <p>
        {text}
        <ul>
          <li>mobile first</li>
          <li>written in react</li>
          <li>hosted on aws s3</li>
          <li>delivered using cloud front</li>
        </ul>
      </p>
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
  </header>
);
