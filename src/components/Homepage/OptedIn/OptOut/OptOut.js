import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import { ActionButton } from '../../../common';

class OptOut extends Component {
  constructor(props) {
    super(props);

    this.optOut = this.optOut.bind(this);
  }

  componentDidMount() {
    // Get current date
    const dateObj = new Date();
    const currentDate = dateObj.getFullYear() + '-' + (dateObj.getMonth()+1) + '-' + dateObj.getDate();
    this.setState({ currentDate });

    // Get current user
    const user = firebase.auth().currentUser;
    const userEmail = user.email;
    this.setState({ userEmail });
  }

  optOut() {
    const db = firebase.firestore();

    const { currentDate, userEmail } = this.state;
    const docRef = db.collection(currentDate).doc(userEmail);
    docRef.delete().then(() => {
      window.location.reload();
    })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  render() {
    return (
      <ActionButton submit={this.optOut}>
        Niet mee lunchen
      </ActionButton>
    );
  }
}

export default OptOut;
