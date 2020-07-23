import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import Product from './product';

describe('Product', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Product />);
    expect(wrapper).toMatchSnapshot();
  });
});
