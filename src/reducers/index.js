INITIAL_STATE = {
  select: 0
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return {...state, select: action.select}
    case 'GET_WEATHER':
      return {...state, weather: action.weather}
    default:
      return state;
  }
}