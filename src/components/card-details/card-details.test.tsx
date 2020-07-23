import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import CardDetails from './card-details';

describe('CardDetails', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CardDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
