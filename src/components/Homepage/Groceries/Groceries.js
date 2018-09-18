import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import { ActionButton, LoadingIndicator } from '../../common';
import ClaimMoney from './ClaimMoney/ClaimMoney';

class Groceries extends Component {
  state = {
    optInText: 'Ik haal de boodschappen',
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
    const docRef = db.collection('groceries').doc(currentDate);

    docRef.get().then((doc) => {
      if (doc.exists && doc.data().groceries === userEmail) {
        this.setState({ optInText: 'Jij haalt de boodschappen', loadingOptIn: false });
        this.renderLoading();
      } else if (doc.exists && doc.data().groceries !== userEmail) {
        this.setState({ optInText: `${doc.data().groceries} haalt de boodschappen`, loadingOptIn: false });
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
    db.collection('groceries').doc(currentDate).set({
      groceries: userEmail,
    })
      .then(() => {
        console.log('Aangemeld voor boodschappen');
        this.setState({ optInText: 'Jij haalt de boodschappen' });
        this.setState({ loadingOptIn: false });
      })
      .catch((error) => {
        console.error('Error opting in for groceries: ', error);
        this.setState({ loadingOptIn: false });
      });
  }

  renderLoading() {
    const { loadingOptIn, optInText } = this.state;
    if (loadingOptIn === false && optInText === 'Ik haal de boodschappen') {
      return (
        <ActionButton submit={this.optIn}>
          {optInText}
        </ActionButton>
      );
    }
    if (loadingOptIn === false && optInText === 'Jij haalt de boodschappen') {
      return (
        <ClaimMoney />
      );
    }
    if (loadingOptIn === false && optInText !== 'Ik haal de boodschappen') {
      return (
        <p>
          {optInText}
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

export default Groceries;
