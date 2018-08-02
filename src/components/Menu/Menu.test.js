import React from 'react';
import { shallow } from 'enzyme';

// Components
import Menu from './Menu';
import MenuItem from './MenuItem/MenuItem';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Menu />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders without crashing', () => {
  expect(wrapped.length).toEqual(1);
});

it('renders 3 MenuItem components', () => {
  expect(wrapped.find(MenuItem).length).toEqual(3);
});

describe('Menu links', () => {
  it('renders the link to home component', () => {
    expect(wrapped.find(MenuItem).get(0).props.icon).toEqual('home');
    expect(wrapped.find(MenuItem).get(0).props.url).toEqual('/');
  });

  it('renders the link to preferences component', () => {
    expect(wrapped.find(MenuItem).get(1).props.icon).toEqual('fastfood');
    expect(wrapped.find(MenuItem).get(1).props.url).toEqual('/preferences');
  });

  it('renders the link to settings component', () => {
    expect(wrapped.find(MenuItem).get(2).props.icon).toEqual('settings');
    expect(wrapped.find(MenuItem).get(2).props.url).toEqual('/settings');
  });
});
