import React, { Component } from 'react';

// Components
import { Button, Card } from '../../common';
import CheckBox from '../CheckBox/CheckBox';

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bolletjes: false,
      brinta: false,
      kipfilet: false,
      salami: false,
      kaas: false,
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
      bolletjes,
      brinta,
      kipfilet,
      salami,
      kaas,
    } = this.state;
    return (
      <Card cardTitle="Voorkeur voedsel" minHeight={100}>

        Basis
        <hr />

        <CheckBox
          name="bolletjes"
          checked={bolletjes}
          onChange={this.handleInputChange}
        />
        <CheckBox
          name="brinta"
          checked={brinta}
          onChange={this.handleInputChange}
        />

        <br />
        Beleg
        <hr />

        <CheckBox
          name="kipfilet"
          checked={kipfilet}
          onChange={this.handleInputChange}
        />
        <CheckBox
          name="salami"
          checked={salami}
          onChange={this.handleInputChange}
        />
        <CheckBox
          name="kaas"
          checked={kaas}
          onChange={this.handleInputChange}
        />

        <Button>
          Opslaan
        </Button>
      </Card>
    );
  }
}

export default Food;
