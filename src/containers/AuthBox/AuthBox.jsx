import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./AuthBox.module.css";
import RegisterComponent from "../RegisterComponent";
import LoginComponent from "../LoginComponent";
import { actionsOpenLogin, actionsOpenRegister } from "../../actions";

class AuthBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_register: ""
    };
  }

  toggle = e => {
    const { id } = e.target;

    if (id === "register" && this.state.login_register === "login") {
      this.handleRegisterClick();
      return this.setState({ login_register: "register" });
    } else if (id === "login" && this.state.login_register === "register") {
      this.handleLoginClick();
      return this.setState({ login_register: "login" });
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.login_register !== this.props.login_register) {
      return this.setState({ login_register: this.props.login_register });
    }
  };
  handleRegisterClick = () => {
    return this.props.dispatchRegister();
  };

  handleLoginClick = () => {
    return this.props.dispatchLogin();
  };

  render() {
    return (
      <div className={styles.authBox}>
        <div className={styles.toggler}>
          <div
            className={
              this.props.login_register !== "login"
                ? styles.toggleOption
                : styles.toggleOption2
            }
            onClick={this.toggle}
            id="login"
          >
            <img
              src="https://i.postimg.cc/050ygKWP/man-user.png"
              alt="login icon"
            />
            Login
          </div>
          <div
            className={
              this.props.login_register !== "register"
                ? styles.toggleOption
                : styles.toggleOption2
            }
            onClick={this.toggle}
            id="register"
          >
            <img
              src="https://i.postimg.cc/q7q3qXFs/new-user-1.png"
              alt="register icon"
            />
            Register
          </div>
        </div>
        {this.state.login_register === "register" ||
        this.props.login_register === "register" ? (
          <RegisterComponent />
        ) : null}
        {this.state.login_register === "login" ||
        this.props.login_register === "login" ? (
          <LoginComponent />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login_register: state.login_register
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchRegister: () => {
      return dispatch(actionsOpenRegister());
    },
    dispatchLogin: () => {
      return dispatch(actionsOpenLogin());
    }
  };
};

AuthBox = connect(mapStateToProps, mapDispatchToProps)(AuthBox);

export default AuthBox;
