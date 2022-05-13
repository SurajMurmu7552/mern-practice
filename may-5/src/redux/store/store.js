import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "@redux-devtools/extension";
import watcherSaga from "../sagas/watcherSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(watcherSaga);

export default store;
