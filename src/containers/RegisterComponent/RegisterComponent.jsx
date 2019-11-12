import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsRegisterSubmit } from "../../actions";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPW: "",
      error: ""
    };
  }

  handleRegisterSubmit() {
    if (this.state.password !== this.state.confirmPW) {
      return this.setState({ error: "passwords do not match" });
    } else {
      return this.props.dispatchRegisterSubmit(this.state);
      //eventually will need to load LoginComponent
    }
  }

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
              <label for="email">Email:</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </li>
            <li>
              <label for="confirmPW">Confirm password:</label>
              <br />
              <input
                type="password"
                name="confirmPW"
                value={this.state.confirmPW}
                onChange={this.handleInput}
              />
            </li>
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
