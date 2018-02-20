import * as types from '../constants/actionTypes';


// example of a thunk using the redux-thunk middleware
export function saveFuelSavings() {
  return function (dispatch) {
    return dispatch({
      type: types.SAVE_FUEL_SAVINGS
    });
  };
}

export function calculateFuelSavings() {
  return {
    type: types.CALCULATE_FUEL_SAVINGS
  };
}
