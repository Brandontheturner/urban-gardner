import axios from "axios";
import jwt from "jsonwebtoken";

export const setUserName = name => {
  return {
    type: "SET_USER_NAME",
    value: name
  };
};

export const setPassword = pass => {
  return {
    type: "SET_PASSWORD",
    value: pass
  };
};

export const setLoggedIn = isLoggedIn => {
  return {
    type: "SET_LOGGED_IN",
    value: isLoggedIn
  };
};

export const login = ({ username, password }) => {
  return dispatch => {
    return axios({
      url: "/api/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ username, password })
    })
      .then(res => {
        document.cookie = `id_token=${res.data.token};max-age=300;`;
        const payload = jwt.verify(res.data.token, "secret");
        dispatch({
          type: "LOGIN",
          value: payload._doc
        });
        return res.data.user;
      })
      .catch(err => Promise.reject(err));
  };
};

export const signUp = ({ username, password }) => {
  console.log("actions", { username, password });

  return dispatch => {
    return axios({
      url: "/api/signup",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ username, password })
    }).catch(err => Promise.reject(err));
  };
};

export const getAllUsers = () => {
  return dispatch => {
    return fetch("/api/users").then(res => res.json(res));
  };
};

export const getAllVegetables = () => {
  return dispatch => {
    return fetch("/vegetables/vegetables").then(res => res.json(res));
  };
};
