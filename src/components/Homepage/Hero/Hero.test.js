import React from 'react';
import { shallow } from 'enzyme';

// Components
import Hero from './Hero';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<Hero />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('hero component', () => {
  it('renders Hero component without crashing', () => {
    expect(wrapped.length).toEqual(1);
  });

  it('contains 1 h1 tag', () => {
    expect(wrapped.find('h1').length).toEqual(1);
  });

  it('contains 1 paragraph', () => {
    expect(wrapped.find('p').length).toEqual(1);
  });
});
