import { createStore, combineReducers } from 'redux';
import addToState from '../reducers';

const allReducers = combineReducers({ addToState });
const store = createStore(allReducers);

export default store;