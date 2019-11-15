import React, { Component } from "react";
import { connect } from "react-redux";
import "./LoginComponent.css";
import {
  actionsLoginSubmit,
  actionsGoBack,
  actionsOpenRegister
} from "../../actions";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLoginSubmit = e => {
    e.preventDefault();
    return this.props.dispatchLoginSubmit(this.state);
  };

  handleEmailInput = event => {
    return this.setState({ email: event.target.value });
  };

  handlePasswordInput = event => {
    return this.setState({ password: event.target.value });
  };

  handleGoBack = () => {
    return this.props.dispatchGoBack();
  };

  handleRegisterClick = () => {
    return this.props.dispatchRegister();
  };

  render() {
    return (
      <div className="loginComponent container">
        <h3>Login</h3>
        <button onClick={this.handleGoBack}>Go back</button>
        <form>
          <ul>
            <li className="input">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailInput}
              />
            </li>
            <li className="input">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordInput}
              />
            </li>
          </ul>
          <br />
          <br />
          <button onClick={this.handleLoginSubmit}>Login</button>
        </form>
        <div className="notAMember">
          Not a member?
          <p onClick={this.handleRegisterClick}>Register now.</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchLoginSubmit: formData => {
      return dispatch(actionsLoginSubmit(formData));
    },
    dispatchGoBack: () => {
      return dispatch(actionsGoBack());
    },
    dispatchRegister: () => {
      return dispatch(actionsOpenRegister());
    }
  };
};

LoginComponent = connect(null, mapDispatchToProps)(LoginComponent);

export default LoginComponent;
