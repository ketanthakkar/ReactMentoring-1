import React from 'react';
import { shallow } from 'enzyme';

import {SearchField} from 'components/SearchField';

describe('SearchField', () => {
    const searchField = shallow(<SearchField/>);

    it('should be like snapshot', () => {
        expect(searchField).toMatchSnapshot();
    });
});
