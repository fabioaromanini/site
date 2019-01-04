import React, { Component } from 'react';
import gitIcon from './giticon.png';
import linkedinIcon from './linkedinicon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="landing">
          <h1>fabioaromanini</h1>
          <div id="landing-content">
            <p>an{' '}
            <a
                href="https://github.com/fabioaromanini/site"
                target="_blank"
                rel="noopener noreferrer"
                >under development
            </a>
            {' '}personal website, written in react
            {' '}and hosted on google cloud platform.
            </p>
          </div>
          <div className="links">
            <a
              href="https://github.com/fabioaromanini"
              target="_blank"
              rel="noopener noreferrer"
              ><img src={gitIcon} alt="github repository icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/fabioaromanini/"
              target="_blank"
              rel="noopener noreferrer"
              ><img src={linkedinIcon} alt="linkedin icon" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
