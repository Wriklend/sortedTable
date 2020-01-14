import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../profiles/reducer';

const initialState = { profiles: [] };

const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

export default store;
