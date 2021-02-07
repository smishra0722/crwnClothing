import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import RootReducer from './root-reducer';
import {persistStore} from 'redux-persist';

const middleware = [Logger];

const store = createStore(RootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
export  {store, persistor};
