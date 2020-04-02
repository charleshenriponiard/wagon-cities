
export default function citiesReducer(state, action) {
  console.log(action, state, 'state');
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SET_CITIES') {
    return action.payload;
  }
  return state;
}
