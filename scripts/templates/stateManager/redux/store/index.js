import rootReducer from './reducers'
import { createStore } from 'redux';

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;