import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import Hero from './Hero/Hero';
import { Card, Button, ActionButton } from '../common';

class HomePage extends Component {
  state = {
    optInText: 'Ik lunch mee!',
  }

  optIn = () => {
    const db = firebase.firestore();

    // Get current user
    const user = firebase.auth().currentUser;
    const userEmail = user.email;

    // Get date
    const dateObj = new Date();
    const date = dateObj.getFullYear() + '-' + (dateObj.getMonth()+1) + '-' + dateObj.getDate();

    db.collection(date).doc(userEmail).set({
      opted: 'I want food',
    })
      .then(() => {
        console.log('Aangemeld');
        this.setState({ optInText: 'Aangemeld voor lunch! :)' });
      })
      .catch((error) => {
        console.error('Error opting in for lunch: ', error);
      });
  }

  render() {
    const { optInText } = this.state;
    return (
      <div className="homepage">
        <Hero />
        <Card cardTitle="Lunch" textAlign="center" minHeight={100}>
          <ActionButton submit={this.optIn}>
            {optInText}
          </ActionButton>
        </Card>
    
        <Card cardTitle="Boodschappen" textAlign="center" minHeight={100}>
          <Button>
            Ik haal de boodschappen
          </Button>
        </Card>
      </div>
    );
  }
}

export default HomePage;
