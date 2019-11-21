import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./LoginComponent.module.css";
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
    this.props.dispatchLoginSubmit(this.state);
    return this.props.dispatchGoBack();
  };

  handleEmailInput = event => {
    return this.setState({ email: event.target.value });
  };

  handlePasswordInput = event => {
    return this.setState({ password: event.target.value });
  };

  handleClose = () => {
    return this.props.dispatchGoBack();
  };

  handleRegisterClick = () => {
    return this.props.dispatchRegister();
  };

  render() {
    return (
      <div className={styles.loginComponent}>
        <form>
          <ul>
            <li className={styles.form_li}>
              <div className={styles.imgContainer}>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25236.svg"
                  alt="email"
                  className={styles.login_icon_img}
                />
              </div>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailInput}
                placeholder="Your email"
                className={styles.form_input}
              />
            </li>
            <li className={styles.form_li}>
              <div className={styles.imgContainer}>
                <img
                  src="https://image.flaticon.com/icons/svg/25/25239.svg"
                  alt="password"
                  className={styles.login_icon_img}
                />
              </div>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordInput}
                placeholder="Your password"
                className={styles.form_input}
              />
            </li>
          </ul>

          <button
            onClick={this.handleLoginSubmit}
            className={styles.login_button}
          >
            Login{" "}
            <img
              src="https://image.flaticon.com/icons/svg/149/149408.svg"
              alt="login icon"
              className={styles.loginImg}
            />
          </button>
        </form>
        <div className={styles.options}>
          <div className={styles.additionalOptions}>
            <div className={styles.notAMember}>
              <p>
                Not a member?{" "}
                <span
                  className={styles.options_span}
                  onClick={this.handleRegisterClick}
                >
                  Sign up
                </span>
              </p>
            </div>
            <div className={styles.notAMember}>
              <p>
                Forgot{" "}
                <span
                  className={styles.options_span}
                  onClick={this.handleRegisterClick}
                >
                  Password
                </span>
              </p>
            </div>
          </div>
          <button className={styles.close_button} onClick={this.handleClose}>
            Close
          </button>
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
