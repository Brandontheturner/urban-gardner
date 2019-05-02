import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

class UserList extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    console.log(this.props);

    // return null;
    if (this.props.user) {
      return <h2>Checking for user object...</h2>;
    } else {
      return (
        <React.Fragment>
          console.log("userList");
          <h4>{this.props.user.name}</h4>
          <h4>
            {this.props.user.vegetableList.map(veggie => {
              return <li key={veggie._id}>{veggie.name}</li>;
            })}
          </h4>
        </React.Fragment>
      );
    }
  }
}
export default UserList;
