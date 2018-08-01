import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

// Components
import Box from './components/Box/Box';
import Authentication from './components/Authentication/Authentication';
import { Spinner } from './components/common';

// Config
import firebaseConfig from './config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: null };
  }

  componentDidMount() {
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLogin() {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case null:
        return <Spinner />;
      case true:
        return <Box />;
      case false:
        return <Authentication />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.renderLogin()}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
