import React from 'react';
import { shallow } from 'enzyme';

// Components
import Homepage from './Homepage';
import Hero from './Hero/Hero';
import { Card, Button } from '../common';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Homepage />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders 2 Card components', () => {
  expect(wrapped.find(Card).length).toEqual(2);
});

it('renders Hero component', () => {
  expect(wrapped.find(Hero).length).toEqual(1);
});

it('renders 2 Button components', () => {
  expect(wrapped.find(Button).length).toEqual(2);
});
