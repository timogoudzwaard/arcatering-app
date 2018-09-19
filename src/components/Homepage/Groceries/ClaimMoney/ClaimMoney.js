import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ActionButton } from '../../../common';
import OptOut from '../OptOut/OptOut';

class ClaimMoney extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', IBAN: '', users: 1 };

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleIBANChange = this.handleIBANChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Get current date
    const dateObj = new Date();
    const currentDate = dateObj.getFullYear() + '-' + (dateObj.getMonth()+1) + '-' + dateObj.getDate();

    const db = firebase.firestore();
    db.collection(currentDate).get().then((snap) => {
      this.setState({ users: snap.size });
    });
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  handleIBANChange(event) {
    this.setState({ IBAN: event.target.value });
  }

  handleSubmit() { // eslint-disable-line
    const { amount, users, IBAN } = this.state;
    const amountPerUser = amount / users;
    let message = `Wil je ${amountPerUser} overmaken naar ${IBAN}`;
    message = encodeURI(message);
    window.location.assign(`https://wa.me/?text=${message}`);
  }

  render() {
    const { amount, IBAN } = this.state;
    return (
      <div>
        <p>
          Hoe duur waren de boodschappen?
        </p>
        <input type="text" value={amount} onChange={this.handleAmountChange} />
        <p>
          Op welke rekening moet het gestort worden?
        </p>
        <input type="text" value={IBAN} onChange={this.handleIBANChange} />
        <ActionButton submit={this.handleSubmit}>
          Claim geld
        </ActionButton>
        <OptOut />
      </div>
    );
  }
}

export default ClaimMoney;
