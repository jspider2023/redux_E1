import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { inputReducer } from "./inputReducer";
export let rootReducer = combineReducers({ counterReducer, inputReducer });
