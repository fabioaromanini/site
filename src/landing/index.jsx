/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import './landing.css';

export default () => (
  <div id="landing">
    <h1>fabioaromanini</h1>
    <div className="content">
      <p>
        A playground for some technologies and concepts I'm studying. Currently,
        this website is:
      </p>
      <ul>
        <li>mobile first</li>
        <li>written in react</li>
        <li>built and deployed with travis</li>
        <li>hosted on aws s3</li>
        <li>distributed using cloud front</li>
      </ul>
    </div>
  </div>
);
