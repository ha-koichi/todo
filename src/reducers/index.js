const initialState = {
  select: 0
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_LOCATION':
      return { select: state.select   }
    default:
      return state
  }
}