import { createStore, applyMiddleware } from "redux";
import state from "./state";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(reducers, state, applyMiddleware(thunk));

export default store;
