import React, { Component } from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import {
  actionsHandleLogout,
  actionsOpenRegister,
  actionsOpenLogin
} from "../../actions";

class Header extends Component {
  handleLogout = () => {
    return this.props.dispatchHandleLogout();
  };

  handleRegisterClick = () => {
    return this.props.dispatchRegister();
  };

  handleLoginClick = () => {
    return this.props.dispatchLogin();
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2019/01/bad-habits-760x400.jpg"
              alt="https://via.placeholder.com/300x50"
            />
          </a>
        </div>

        <div className={styles.searchBox}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            name="search"
            size="60"
          />
          <button className={styles.searchImg} type="submit"></button>
        </div>

        <div className={styles.auth}>
          <div className={styles.register} onClick={this.handleRegisterClick}>
            Register
          </div>
          <div className={styles.login} onClick={this.handleLoginClick}>
            Login
            <img
              className={styles.loginImg}
              src="https://image.flaticon.com/icons/svg/149/149408.svg"
              alt="login icon"
            />
          </div>
          <div onClick={this.handleLogout}>Logout</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchHandleLogout: () => {
      return dispatch(actionsHandleLogout());
    },
    dispatchRegister: () => {
      return dispatch(actionsOpenRegister());
    },
    dispatchLogin: () => {
      return dispatch(actionsOpenLogin());
    }
  };
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
