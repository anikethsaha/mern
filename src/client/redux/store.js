import { createStore }  from 'redux';
import { reducer } from './reducer'

export const store = createStore(reducer);


store.subscribe(async () =>
  console.log("> ACTION DISPATCHED <" , await store.getState())
)

