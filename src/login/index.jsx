import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './login.css';

const styles = {
  login: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loginForm: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: '40vh',
    minWidth: '70vw',
    paddingRight: '15vw',
  },
  loginField: {
    display: 'flex',
    justifyContent: 'space-evenly',
    minWidth: '40vw',
  },
  loginInput: {
    minWidth: '40vw',
    marginLeft: '3vw',
  },
};

const inputs = [
  <div className="loginField" style={styles.loginField}>
    <label htmlFor="email">email</label>
    <input style={styles.loginInput} id="email" type="email" />
  </div>,
  <div className="loginField" style={styles.loginField}>
    <label htmlFor="password">password</label>
    <input style={styles.loginInput} id="password" type="password" />
  </div>,
];

export default () => (
  <div id="login" style={styles.login}>
    <h1>Login</h1>
    <form>
      <div id="loginForm" style={styles.loginForm}>
        {inputs}
      </div>
    </form>
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
