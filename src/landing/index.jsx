/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import './landing.css';

export default () => {
  const styles = {
    landing: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10vw',
    },
    landingTitle: {
      marginBottom: '15vh',
    },
  };

  return (
    <div id="landing" style={styles.landing}>
      <h1 style={styles.landingTitle}>fabioaromanini</h1>
      <div className="content">
        <p>
          A playground for some technologies and concepts I'm studying.
          Currently, this website is:
        </p>
        <ul>
          <li>mobile first</li>
          <li>written in react</li>
          <li>built and deployed with travis</li>
          <li>hosted on aws s3</li>
          <li>distributed using cloud front</li>
          <li>
            <a href="#login">login using cognito</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
