import React, { Component } from 'react';
import gitIcon from './giticon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="landing">
          <div className="links">
            <a
              href="https://github.com/fabioaromanini/site"
              target="_blank"
              rel="noopener noreferrer"
            ><img src={gitIcon}  alt="github repository icon" />
            </a>
            <span>github</span>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
