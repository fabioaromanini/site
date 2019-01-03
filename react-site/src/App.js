import React, { Component } from 'react';
import gitIcon from './giticon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>luls</p>
          <a
            className="App-link"
            href="https://github.com/fabioaromanini/site"
            target="_blank"
            rel="noopener noreferrer"
          ><img src={gitIcon} alt="github repository"/>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
