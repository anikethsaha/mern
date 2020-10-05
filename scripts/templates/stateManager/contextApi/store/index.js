import React from 'react';

const initialState = {};

const EXAMPLE_ACTION_TYPE = 'EXAMPLE_ACTION_TYPE';

export function exampleActionCreator(data) {
  return {
    type: EXAMPLE_ACTION_TYPE,
    payload: data,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case EXAMPLE_ACTION_TYPE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export const Store = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>;
}
