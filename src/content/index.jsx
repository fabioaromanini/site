import React from 'react';

import './content.css';

const text = `A showcase of the technologies and concepts I'm studying.
Currently, this website is:`;

export default () => (
  <div className="content">
    <p>
      {text}
      <ul>
        <li>personal website, written in react</li>
        <li>hosted on aws s3,</li>
        <li>delivered using cloud front.</li>
      </ul>
    </p>
  </div>
);
