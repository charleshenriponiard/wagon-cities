
export default function selectedCityReducer(state, action) {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case "SELECTED_CITY":
      return action.payload;
    default:
      return state;
  }
}
