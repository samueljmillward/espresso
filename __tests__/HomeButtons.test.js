import React from 'react';
import { shallow } from 'enzyme';
import HomeButtons from '../src/elements/HomeButtons';

describe('renders UI', () => {
  it('Navbar', () => {
    const wrapper = shallow(<HomeButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
