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
            <p>An{' '}
            <a
                href="https://github.com/fabioaromanini/site"
                target="_blank"
                rel="noopener noreferrer"
                >open source
            </a>
            {' '}personal site built on react and google cloud</p>
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
