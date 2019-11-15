import React, { Component } from 'react';

import Landing from './landing';
import Portfolio from './portfolio';

import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div id="app">
        <Landing />
        <Portfolio />
      </div>
    );
  }
}

export default App;
