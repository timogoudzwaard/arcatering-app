import React from 'react';

// Components
import Hero from './Hero/Hero';
import OptIn from './OptIn/OptIn';
import { Card } from '../common';
import OptedIn from './OptedIn/OptedIn';
import Groceries from './Groceries/Groceries';

// Style
import './Homepage.css';

const HomePage = () => (
  <div className="homepage">
    <Hero />
    <Card cardTitle="Lunch" textAlign="center" minHeight={100}>
      <OptedIn />
      <OptIn />
    </Card>

    <Card cardTitle="Boodschappen" textAlign="center" minHeight={100}>
      <Groceries />
    </Card>
  </div>
);

export default HomePage;
