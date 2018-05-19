import React from 'react';
import { shallow } from 'enzyme';

import { App } from 'components/App';

describe('App', () => {
    const mockGetItems = jest.fn();
    const app = shallow(<App getItems={mockGetItems} />);

    it('should be like snapshot', () => {
        expect(app).toMatchSnapshot();
    });
});
