import React from 'react';
import { shallow } from 'enzyme';

import Footer from 'components/Footer';

describe('Footer', () => {
    const footer = shallow(<Footer />);
    it('should be like snapshot', () => {
        expect(footer).toMatchSnapshot();
    });
});
