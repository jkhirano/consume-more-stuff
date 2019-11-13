import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsRegisterSubmit } from "../../actions";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  clearInput = () => {
    let defaultState = this.state;
    for (let key in defaultState) {
      defaultState[key] = "";
    }
    return this.setState(defaultState);
  };

  handleRegisterSubmit = e => {
    e.preventDefault();

    if (this.state.password !== this.state.confirmPassword) {
      return this.setState({ error: "passwords do no match." });
    } else {
      this.props.dispatchRegisterSubmit(this.state);
      return this.clearInput();
    }
    //eventually will need to load LoginComponent
  };

  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state[name] = value;
    this.setState(state);
  };

  render() {
    return (
      <div className="registerComponent container">
        <h3>Register:</h3>
        <form>
          <ul>
            <li>
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label htmlFor="confirmPassword">Confirm password:</label>
              <br />
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInput}
              />
            </li>
            {this.state.error ? <div>{this.state.error}</div> : null}
          </ul>
          <br />
          <br />
          <button onClick={this.handleRegisterSubmit}>Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchRegisterSubmit: formData => {
      return dispatch(actionsRegisterSubmit(formData));
    }
  };
};

RegisterComponent = connect(null, mapDispatchToProps)(RegisterComponent);

export default RegisterComponent;
