import React, { Component } from 'react';
import firebase from 'firebase';

// Components
import { Card, ActionButton } from '../common';

class Settings extends Component {
  static handleSubmit(event) {
    event.preventDefault();

    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  render() {
    return (
      <div className="settings">
        <Card cardTitle="Settings" textAlign="center" minHeight={100}>
          <ActionButton submit={Settings.handleSubmit}>
            Log out
          </ActionButton>
        </Card>
      </div>
    );
  }
}

export default Settings;
