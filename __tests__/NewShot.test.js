import React from 'react';
import { shallow } from 'enzyme';
import NewShot, { defaultValues } from '../src/elements/NewShot';

describe('returns expected data types', () => {
  test('defaultValues match schema', () => {
    const shotSchema = {
      name: expect.any(String),
      dryWeight: expect.any(Number),
      grind: expect.any(Number),
      weight: expect.any(Number),
      notes: expect.any(String),
      brewDate: expect.any(Object),
    };
    expect(defaultValues).toEqual(shotSchema);
  });
});

describe('renders UI', () => {
  test('NewShot form', () => {
    const wrapper = shallow(<NewShot />);
    expect(wrapper).toMatchSnapshot();
  });
});
