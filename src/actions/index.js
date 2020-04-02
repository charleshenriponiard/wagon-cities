import cities from '../cities';
import selectedCity from '../containers/selected_city';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: 'SELECTED_CITY',
    payload: city
  };
}
