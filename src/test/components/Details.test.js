import React from 'react';
import { shallow } from 'enzyme';

import {Details} from 'components/Details';

describe('Details', () => {
    const mockGetItem = jest.fn();
    const details = shallow(<Details getItem={mockGetItem} />);

    it('should be like snapshot', () => {
        expect(details).toMatchSnapshot();
    });

    it('should call getItem function on mounting', () => {
        expect(mockGetItem.mock.calls.length).toBe(1);
    });
});
