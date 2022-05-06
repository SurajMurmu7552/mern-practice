import { combineReducers } from "redux";
import authReducer from "./authReducer";
import calcReducer from "./calcReducer";

const rootReducer = combineReducers({
  calculator: calcReducer,
  auth: authReducer,
});

export default rootReducer;
