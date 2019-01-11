import React, { Component } from 'react';

import Landing from './landing';
import Login from './login';

const styles = {
  app: {
    backgroundColor: '#483538',
    color: 'white',
  },
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <Landing />
        <Login />
      </div>
    );
  }
}

export default App;
