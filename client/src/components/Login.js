import $ from "jquery";
import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const RedSpan = styled.span`
  font-size: 12px;
  color: red;
`;

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  login = e => {
    e.preventDefault();
    if (this.Validate()) {
      this.props
        .login({ ...this.state })
        .then(result => {
          console.log(result);
          this.props.setLoggedIn(true);
          this.props.setUserName(result["username"]);
          this.props.setPassword(result["password"]);
        })
        .catch(err =>
          this.setState({
            username: "",
            password: "",
            message: err.response.data
          })
        );
    }
  };

  signUp = e => {
    console.log("sign up");
    e.preventDefault();
    if (this.Validate()) {
      this.props
        .signUp({ ...this.state })
        .then(res => {
          this.setState({
            message: res.data
          });
        })
        .catch(err =>
          this.setState({
            username: "",
            password: "",
            message: err.response.data
          })
        );
    }
  };

  Validate = () => {
    let usernameValue = $(document.getElementById("username")).val();
    let passwordValue = $(document.getElementById("password")).val();
    if (usernameValue === "") {
      this.setState({ message: "Please enter a Username!" });
      return false;
    } else if (passwordValue === "") {
      this.setState({ message: "Please enter a Password!" });
      return false;
    }

    return true;
  };

  render() {
    return (
      <div>
        <hr />
        <div>
          Username:
          <TextField
            onChange={this.handleTextChange}
            id="username"
            label="Username"
            value={this.state.username}
            variant="outlined"
          />
          <br />
          Password:
          <TextField
            type="password"
            onChange={this.handleTextChange}
            id="password"
            label="Password"
            value={this.state.password}
            variant="outlined"
          />
        </div>
        <hr />
        <div>
          <button
            type="submit"
            variant="contained"
            className="btn btn-dark"
            onClick={this.login}
          >
            Login
          </button>
          &nbsp; &nbsp;
          <button
            type="submit"
            variant="contained"
            className="btn btn-dark"
            onClick={this.signUp}
          >
            Sign Up
          </button>
        </div>
        <div>
          {this.state.message && <RedSpan>{this.state.message}</RedSpan>}
        </div>
      </div>
    );
  }
}

export default Login;
