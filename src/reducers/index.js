import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import fuelSavings from "./fuelSavingsReducer";

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
});

export default rootReducer;
