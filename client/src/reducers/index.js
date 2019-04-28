import { combineReducers } from "redux";

function username(state = "", action) {
  if (action.type === "SET_USERNAME") {
    return action.value;
  }
  return state;
}

function password(state = "", action) {
  if (action.type === "SET_PASSWORD") {
    return action.value;
  }
  return state;
}

function loggedIn(state = false, action) {
  if (action.type === "SET_LOGGED_IN") {
    return action.value;
  }
  return state;
}

export default combineReducers({
  username,
  password,
  loggedIn
});
