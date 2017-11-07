import UUID from "uuid/v4";
import * as Actions from "./constants";

const initialState = [
  { id: UUID(), name: "India" },
  { id: UUID(), name: "China" },
  { id: UUID(), name: "USA" },
  { id: UUID(), name: "UK" },
  { id: UUID(), name: "Canada" }
];

const updateCountry = (state, country) => {
  const index = state.map(({ id }) => id).indexOf(country.id);
  if (index >= 0) {
    return [
      ...state.slice(0, index),
      { ...state[index], ...country },
      ...state.slice(index + 1)
    ];
  }
  return state;
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Actions.ADD_COUNTRY:
      return [...state, action.payload.country];
    case Actions.REMOVE_COUNTRY:
      return state.filter(({ id }) => id !== action.payload.country.id);
    case Actions.UPDATE_COUNTRY:
      return updateCountry(state, action.payload.country);
    default:
      return state;
  }
}
