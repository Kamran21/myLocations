import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { routerReducer, routerMiddleware } from "react-router-redux"; //, push
import logger from "redux-logger";

import * as storage from "./localstorage";
import throttle from "lodash/throttle";

import reducers from "./duckes/rootReducer"; // Or wherever you keep your reducers

import thunk from "redux-thunk";

const configureStore = history => {
  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history);

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating + logger,
  // All reducers will be reflected on the Redux dev tools and by the logger middleware
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistedState = storage.loadState();
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    persistedState,
    composeEnhancers(applyMiddleware(middleware, logger, thunk))
  );

  store.subscribe(
    throttle(() => {
      storage.saveState(store.getState());
    }),
    1000
  );

  return store;
};

export default configureStore;
