import * as Actions from "./constants";

export function addCountry(country) {
  return {
    type: Actions.ADD_COUNTRY,
    payload: { country }
  };
}

export function removeCountry(country) {
  return {
    type: Actions.REMOVE_COUNTRY,
    payload: { country }
  };
}

export function updateCountry(country) {
  return {
    type: Actions.UPDATE_COUNTRY,
    payload: { country }
  };
}
