import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Root from './Root';
import configureStore from './store/configureStore';

const store = configureStore(window.PRELOADED_STATE);

store.runSaga();

const root = (
    <Root
        Router={BrowserRouter}
        store={store}
    />
);

const render = () => {
    hydrate(root, document.getElementById('root'));
};

render();
