import React from 'react';
import { shallow } from 'enzyme';

import InfoBar from 'components/InfoBar';

import APP_STATES from 'constants/APP_STATES';

const items = [{}];

describe('InfoBar', () => {
    const infoBar = shallow(<InfoBar />);

    it('should be like snapshot when AppState is SearchPage', () => {
        infoBar.setProps({appState: APP_STATES.SEARCH_PAGE, items});
        expect(infoBar).toMatchSnapshot();
    });

    it('should be like snapshot when AppState is DetailsPage', () => {
        infoBar.setProps({appState: APP_STATES.DETAILS_PAGE, items});
        expect(infoBar).toMatchSnapshot();
    });
});