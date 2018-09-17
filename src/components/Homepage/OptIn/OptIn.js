import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import { ActionButton, LoadingIndicator } from '../../common';

class OptIn extends Component {
  state = {
    optInText: 'Ik lunch mee!',
    loadingOptIn: true,
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

    const db = firebase.firestore();
    const docRef = db.collection(currentDate).doc(userEmail);

    docRef.get().then((doc) => {
      if (doc.exists) {
        this.setState({ optInText: 'Aangemeld voor lunch! :)', loadingOptIn: false });
        this.renderLoading();
      } else {
        this.setState({ loadingOptIn: false });
        this.renderLoading();
      }
    }).catch((error) => {
      console.log('Error getting OptIn answer:', error);
    });
  }

  optIn = () => {
    this.setState({ loadingOptIn: true });
    const db = firebase.firestore();

    const { currentDate, userEmail } = this.state;
    db.collection(currentDate).doc(userEmail).set({
      opted: 'I want food',
    })
      .then(() => {
        console.log('Aangemeld');
        this.setState({ optInText: 'Aangemeld voor lunch! :)' });
        this.setState({ loadingOptIn: false });
      })
      .catch((error) => {
        console.error('Error opting in for lunch: ', error);
        this.setState({ loadingOptIn: false });
      });
  }

  renderLoading() {
    const { loadingOptIn, optInText } = this.state;
    if (loadingOptIn === false && optInText === 'Ik lunch mee!') {
      return (
        <ActionButton submit={this.optIn}>
          {optInText}
        </ActionButton>
      );
    } if (loadingOptIn === false && optInText !== 'Ik lunch mee!') {
      return (
        <p>
          Je lunched mee vandaag
        </p>
      );
    }
    return (
      <LoadingIndicator />
    );
  }

  render() {
    return (
      <div className="opt-in">
        {this.renderLoading()}
      </div>
    );
  }
}

export default OptIn;
