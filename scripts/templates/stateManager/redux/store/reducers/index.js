import { combineReducers } from 'redux';
import placeholderReducer from './placeholder';

export default combineReducers({
    placeholder: placeholderReducer,
});
