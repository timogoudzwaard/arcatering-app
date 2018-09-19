import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import { ActionButton } from '../../../common';

// Style
import './OptOut.css';

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
  }

  optOut() {
    const db = firebase.firestore();

    const { currentDate } = this.state;
    const docRef = db.collection('groceries').doc(currentDate);
    docRef.delete().then(() => {
      window.location.reload();
    })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }

  render() {
    return (
      <div className="opt-out">
        <ActionButton submit={this.optOut}>
          Niet boodschappen halen
        </ActionButton>
      </div>
    );
  }
}

export default OptOut;
