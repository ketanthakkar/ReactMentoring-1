import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import appSaga from '../sagas/appSagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

export default function configureStore(initialState) {
    let store = createStoreWithMiddleware(rootReducer, initialState);
    store.runSaga = () => sagaMiddleware.run(appSaga);
    store.close = () => store.dispatch(END);

    return store;
};
