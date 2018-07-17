import React from 'react';

// Components
import { Button, Card } from '../common';

// Style
import './Food.css';

const Food = () => (
  <div className="food">
    <Card cardTitle="Voorkeur voedsel" minHeight={100}>
      <input type="checkbox" />
      Bolletjes

      <br />
      <input type="checkbox" />
      Smoothie

      <br />
      <Button>
        Geef door
      </Button>
    </Card>

    <Card cardTitle="Voorkeur drinken" minHeight={100}>
      <input type="checkbox" />
      Melk

      <br />
      <input type="checkbox" />
      Bier

      <br />
      <input type="checkbox" />
      Water

      <br />
      <Button>
        Geef door
      </Button>
    </Card>
  </div>
);

export default Food;
