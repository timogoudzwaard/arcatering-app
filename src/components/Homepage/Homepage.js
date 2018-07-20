import React from 'react';

// Components
import Hero from './Hero/Hero';
import { Card, Button, Spinner } from '../common';

const HomePage = () => (
  <div className="homepage">
    <Hero />
    <Card cardTitle="Lunch" textAlign="center" minHeight={100}>
      <Button>
        Ik lunch vandaag mee
      </Button>
    </Card>

    <Card cardTitle="Boodschappen" textAlign="center" minHeight={100}>
      <Button>
        Ik haal de boodschappen
      </Button>
    </Card>
  </div>
);

export default HomePage;
