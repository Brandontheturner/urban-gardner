import axios from "axios";
import jwt from "jsonwebtoken";
import VegetableList from "../components/VegetableList";

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

//something is not working properly here with setting list//
export const setVegetableList = list => {
  console.log("actions setVegetavle list", list);
  return {
    type: "SET_VEGETABLE_LIST",
    value: list
  };
};

// export const setVegetableList = list => {
//   console.log(actions,"setVegetableList");
//   return {
//     type: "SET_VEGETABLE_LIST",
//     data: JSON.stringify({name})
//   };
// };

export const getAllVegetables = () => dispatch => {
  console.log("getAllVegetables");
  return axios({
    url: "/vegetables/vegetables",
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => dispatch(setVegetableList(res.data), console.log(res.data)))
    .catch(err => console.log("error", err));
};
//    {
//     return axios({
//       url: "/vegetables/vegetables",
//       method: "GET",
//     }).then( res =>
//       dispatch(setVegetableList(res))
//     );
//   };
// };
