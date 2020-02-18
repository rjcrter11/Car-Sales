import { combineReducers } from "redux";

import { carReducer } from "./carReducer";
import { addFeaturesReducer } from "./addFeaturesReducer";
import { addPriceReducer } from "./addPriceReducer";

export const rootReducer = combineReducers({
  carReducer,
  addFeaturesReducer,
  addPriceReducer
});
