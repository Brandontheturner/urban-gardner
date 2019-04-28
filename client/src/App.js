import React, { Component } from "react";
import LoginContainer from "./containers/LoginContainer";
import "./App.css";

class App extends Component {
  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="App">
          <LoginContainer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Logged In</h1>
          <h1>Garden Box</h1>
          <h1>Plant Box</h1>
          <h1>Plant Image Gallery</h1>
        </div>
      );
    }
  }
}

export default App;
