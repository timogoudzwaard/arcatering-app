import React from 'react';
import { shallow } from 'enzyme';

// Components
import Authentication from './Authentication';
import Login from './Login/Login';
import Register from './Register/Register';
import Hero from '../Homepage/Hero/Hero';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Authentication />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders without crashing', () => {
  expect(wrapped.length).toEqual(1);
});

describe('renders 3 child components', () => {
  it('renders Login component', () => {
    expect(wrapped.find(Login).length).toEqual(1);
  });

  it('renders Register component', () => {
    expect(wrapped.find(Register).length).toEqual(1);
  });

  it('renders Hero component', () => {
    expect(wrapped.find(Hero).length).toEqual(1);
  });
});
