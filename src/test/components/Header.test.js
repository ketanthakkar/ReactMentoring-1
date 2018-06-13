import React from 'react';
import { shallow } from 'enzyme';

import Header from 'components/Header';

import APP_STATES from 'constants/APP_STATES';

describe('Header', () => {
    const header = shallow(<Header />);

    it('should be like snapshot when AppState is SearchPage', () => {
        header.setProps({appState: APP_STATES.SEARCH_PAGE});
        expect(header).toMatchSnapshot();
    });

    it('should be like snapshot when AppState is DetailsPage', () => {
        header.setProps({appState: APP_STATES.DETAILS_PAGE});
        expect(header).toMatchSnapshot();
    });
});