import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../src/elements/Navbar';

describe('renders UI', () => {
  it('Navbar', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
