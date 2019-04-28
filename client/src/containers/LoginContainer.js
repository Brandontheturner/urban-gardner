import { connect } from "react-redux";
import Login from "../components/Login";
import {
  login,
  signUp,
  getAllUsers,
  setLoggedIn,
  setUserName,
  setPassword
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(login(user)),
    signUp: user => dispatch(signUp(user)),
    getAllUsers: () => dispatch(getAllUsers()),
    setLoggedIn: isLoggedIn => dispatch(setLoggedIn(isLoggedIn)),
    setUserName: username => dispatch(setUserName(username)),
    setPassword: password => dispatch(setPassword(password))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
