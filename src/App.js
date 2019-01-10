import React, { Component } from 'react';

import gitIcon from './images/giticon.png';
import linkedinIcon from './images/linkedinicon.png';

import './App.css';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="landing">
          <h1>fabioaromanini</h1>
          <Content />
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
