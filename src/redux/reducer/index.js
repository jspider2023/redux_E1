import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { inputReducer } from "./inputReducer";
import counterReducer2 from "./counterReducer2";
import fetchReducer from "./fetchReducer";

export let rootReducer = combineReducers({
  counterReducer,
  inputReducer,
  newCounter: counterReducer2,
  fetchReducer,
});
