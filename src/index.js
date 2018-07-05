import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'normalize.css';

import App from './components/App';
import NotFound from './components/NotFound';
import configureStore from './store/configureStore';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore().store}>
                <PersistGate loading={null} persistor={configureStore().persistor}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route path="/search" component={App}/>
                            <Route path="/film" component={App}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </Router>
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
