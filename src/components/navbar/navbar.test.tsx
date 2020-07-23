import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import Navbar from './navbar';

describe('Navbar', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
