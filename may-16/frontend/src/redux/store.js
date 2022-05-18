import rootReducer from "./rootReducer";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

//devtools
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
