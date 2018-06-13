import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from 'components/ErrorBoundary';

describe('ErrorBoundary', () => {
    const errorBoundary = shallow(<ErrorBoundary />);

    it('should be like snapshot', () => {
        errorBoundary.setState({error: 'error', errorInfo: {}});
        expect(errorBoundary).toMatchSnapshot();
    });
});