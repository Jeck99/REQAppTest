import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import Info from './info';

describe('Info', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Info />);
    expect(wrapper).toMatchSnapshot();
  });
});
