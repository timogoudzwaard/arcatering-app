import React, { Component } from 'react';

// Components
import { Card } from '../../common';
import CheckBox from '../CheckBox/CheckBox';


class Drinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      melk: false,
      water: false,
      yoghurtdrink: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      melk,
      water,
      yoghurtdrink,
    } = this.state;
    return (
      <Card cardTitle="Voorkeur drinken" minHeight={100}>

        <CheckBox
          name="melk"
          checked={melk}
          onChange={this.handleInputChange}
        />

        <CheckBox
          name="water"
          checked={water}
          onChange={this.handleInputChange}
        />

        <CheckBox
          name="yoghurtdrink"
          checked={yoghurtdrink}
          onChange={this.handleInputChange}
        />
      </Card>
    );
  }
}

export default Drinks;
