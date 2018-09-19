import React, { Component } from 'react';
import { ActionButton } from '../../../common';

class ClaimMoney extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', IBAN: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  // sendMessage = ({ amount, users, IBAN }) => {
  //   const amountPerUser = amount / users;
  // };

  handleChange(event) {
    this.setState({ amount: event.target.value });
  }

  render() {
    const { amount, IBAN } = this.state;
    return (
      <div>
        <p>
          Hoe duur waren de boodschappen?
        </p>
        <input type="text" value={amount} onChange={this.handleChange} />
        <p>
          Op welke rekening moet het gestort worden?
        </p>
        <input type="text" value={IBAN} onChange={this.handleChange} />
        <ActionButton>
          Claim geld
        </ActionButton>
      </div>
    );
  }
}

export default ClaimMoney;
