import React, { Component } from 'react';

import Landing from './landing';
import Portfolio from './portfolio';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Portfolio />
      </div>
    );
  }
}

export default App;
