import React from 'react';

// Components
import Hero from './Hero/Hero';
import OptIn from './OptIn/OptIn';
import { Card, Button } from '../common';

const HomePage = () => (
  <div className="homepage">
    <Hero />
    <Card cardTitle="Lunch" textAlign="center" minHeight={100}>
      <OptIn />
    </Card>

    <Card cardTitle="Boodschappen" textAlign="center" minHeight={100}>
      <Button>
        Ik haal de boodschappen
      </Button>
    </Card>
  </div>
);

export default HomePage;
