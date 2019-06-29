import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import indexReducer from './redux/reducers';

const Root = ({ children, initialState = { } }) => {
    const store = createStore(indexReducer, initialState);
    return (
        <Provider store={ store }>
            { children }
        </Provider>
    );
};

export default Root;
