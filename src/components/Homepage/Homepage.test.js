import React from 'react';
import { shallow } from 'enzyme';

// Components
import Homepage from './Homepage';
import Hero from './Hero/Hero';
import { Card } from '../common';
import Groceries from './Groceries/Groceries';
import OptedIn from './OptedIn/OptedIn';
import OptIn from './OptIn/OptIn';

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

it('renders Groceries, OptIn and OptedIn components', () => {
  expect(wrapped.find(Groceries).length).toEqual(1);
  expect(wrapped.find(OptedIn).length).toEqual(1);
  expect(wrapped.find(OptIn).length).toEqual(1);
});
