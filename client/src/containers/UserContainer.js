import { connect } from "react-redux";
import UserList from "../components/UserList";
import { getUserInfo } from "../actions";

function mapStateToProps(state) {
  return {
    UserList: state.UserList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => dispatch(getUserInfo())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
