import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

// Components
import Box from './components/Box/Box';

// Config
import firebaseConfig from './config';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Box />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
