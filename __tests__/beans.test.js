import React from 'react';
import { shallow } from 'enzyme';
import Beans from '../src/pages/beans';

describe('renders UI', () => {
  it('beans page', () => {
    const wrapper = shallow(<Beans />);
    expect(wrapper).toMatchSnapshot();
  });
});
