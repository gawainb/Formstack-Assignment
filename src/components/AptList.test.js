import React from 'react';

import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import AptList from './AptList';

configure({
    adapter: new Adapter()
});

describe('<AptList />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<AptList />);
        expect(wrapper).toMatchSnapshot();
    });
});