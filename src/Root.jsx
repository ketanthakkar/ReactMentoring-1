import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}
`;

import SearchPage from './pages/SearchPage';
import FilmPage from './pages/FilmPage';
import NotFoundPage from './pages/NotFoundPage';

const Root = ({Router, location, context, store}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <Switch>
                <Route exact path="/" component={SearchPage}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/film/:id" component={FilmPage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </Router>
    </Provider>
);

Root.propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    }).isRequired,
};

Root.defaultProps = {
    location: null,
    context: null,
};

export default hot(module)(Root);
