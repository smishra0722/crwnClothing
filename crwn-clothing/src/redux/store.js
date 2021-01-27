import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import RootReducer from './root-reducer';

const middleware = [Logger];

const store = createStore(RootReducer, applyMiddleware(...middleware));
export default store;
