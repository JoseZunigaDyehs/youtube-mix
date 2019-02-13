import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import freeze from "redux-freeze";
import { reducers } from "../reducers/index";
import {jwt} from "../middleware/jwt"

let middlewares = [];

// middlewares.push(jwt);

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

let middleware = applyMiddleware(...middlewares, thunk);

if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const store = createStore(reducers, middleware);

export { store }