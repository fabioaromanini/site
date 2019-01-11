import React from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './login.css';

export default () => {
  const styles = {
    login: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'column',
    },
    loginField: {
      display: 'flex',
      justifyContent: 'space-evenly',
      minWidth: '40vw',
    },
    loginInput: {
      minWidth: '40vw',
      marginLeft: '3vw',
      borderRadius: '10px',
      paddingLeft: '0.5em',
    },
    links: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    linksImg: {
      maxHeight: '8vh',
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

  const links = [
    <a
      href="https://github.com/fabioaromanini/site"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img style={styles.linksImg} src={gitIcon} alt="github repository icon" />
    </a>,
    <a
      href="https://www.linkedin.com/in/fabioaromanini/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img style={styles.linksImg} src={linkedinIcon} alt="linkedin icon" />
    </a>,
  ];

  return (
    <div id="login" style={styles.login}>
      <h1>Login</h1>
      <form>
        <div id="loginForm">{inputs}</div>
      </form>
      <div style={styles.links}>{links}</div>
    </div>
  );
};
