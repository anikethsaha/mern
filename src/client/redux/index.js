import rootReducer from './reducers'
import { createStore } from 'redux';

const initialState = {};

export default createStore(rootReducer, initialState);