// redux.js
import {  
  combineReducers,
  createStore,
} from 'redux';

export const setSelect = select => ({  
  type: 'CHANGE_LOCATION',
  select: select,
});

INITIAL_STATE = {
  select: 0
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return {...state, select: action.select}
    default:
      return state;
  }
}

export const reducers = combineReducers({  
  data: reducer
})

export const store = createStore(reducers)

console.log(store.getState)


console.log(typeof store.getState)

console.log(store)