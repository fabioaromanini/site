import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './login.css';

const styles = {
  login: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

export default () => (
  <div id="login" style={styles.login}>
    <h1>Login</h1>
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
