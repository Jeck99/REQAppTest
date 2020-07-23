import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import AddNew from './add-new';

describe('AddNew', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<AddNew />);
    expect(wrapper).toMatchSnapshot();
  });
});
