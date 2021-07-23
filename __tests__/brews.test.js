import React from 'react';
import { shallow } from 'enzyme';
import Brew from '../src/pages/brews';

describe('renders UI', () => {
  it('brews page', () => {
    const wrapper = shallow(<Brew />);
    expect(wrapper).toMatchSnapshot();
  });
});
