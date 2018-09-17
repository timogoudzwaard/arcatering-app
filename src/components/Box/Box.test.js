import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';

// Components
import Box from './Box';
import Menu from '../Menu/Menu';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Box />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('Box component', () => {
  it('renders Box component without crashing', () => {
    expect(wrapped.length).toEqual(1);
  });

  it('renders Menu component', () => {
    expect(wrapped.find(Menu).length).toEqual(1);
  });

  it('renders router Switch', () => {
    expect(wrapped.find(Switch).length).toEqual(1);
  });

  it('renders router Route', () => {
    expect(wrapped.find(Route).length).toEqual(3);
  });
});
