import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Calendar from "./modules/calendar";
import Date from "./modules/date";
import Modal from "./modules/modal";

// rootReducer
const rootReducer = combineReducers({
  calendar: Calendar,
  date: Date,
  modal: Modal,
});

const middlewares = [thunk];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// store 생성
const store = createStore(rootReducer, enhancer);

export default store;
