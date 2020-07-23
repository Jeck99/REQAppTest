import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import Header from './header';

describe('Header', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
