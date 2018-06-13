import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';

describe('App', () => {
    const app = shallow(<App />);

    it('should be like snapshot', () => {
        expect(app).toMatchSnapshot();
    });
});