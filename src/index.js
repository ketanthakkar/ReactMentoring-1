import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'normalize.css';

import App from './components/App';
import configureStore from './store/configureStore';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore().store}>
                <PersistGate loading={null} persistor={configureStore().persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
