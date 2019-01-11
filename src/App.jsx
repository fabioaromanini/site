import React, { Component } from 'react';

import Landing from './landing';
import Login from './login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Login />
      </div>
    );
  }
}

export default App;
