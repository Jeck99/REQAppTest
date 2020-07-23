import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import Toolbar from './toolbar';

describe('Toolbar', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Toolbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
