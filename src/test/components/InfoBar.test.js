import React from 'react';
import { shallow } from 'enzyme';

import {InfoBar} from 'components/InfoBar';

describe('InfoBar', () => {
    const infoBar = shallow(<InfoBar />);

    it('should be like snapshot', () => {
        expect(infoBar).toMatchSnapshot();
    });
});
