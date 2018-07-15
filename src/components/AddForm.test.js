import React from 'react';

import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import AddForm from './AddForm';

configure({adapter: new Adapter()});

describe('<AddForm />', () => {
  it('renders correctly', () => {
      const wrapper = render(<AddForm />);
      expect(wrapper).toMatchSnapshot();
  }); 
});