import { legacy_createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//before introducing middleware-thunk
// const store = legacy_createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store;