import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from './App';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders without crashing', () => {
  expect(wrapped.length).toEqual(1);
});
