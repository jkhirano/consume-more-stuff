import React, { Component } from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { actionsHandleLogout } from "../../actions";

class Header extends Component {
  handleLogout = () => {
    return this.props.dispatchHandleLogout();
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
          <a className={styles.register} href="/">
            Register
          </a>
          <a className={styles.login} href="/">
            Login
            <img
              className={styles.loginImg}
              src="https://image.flaticon.com/icons/svg/149/149408.svg"
              alt="login icon"
            />
          </a>
          <button onClick={this.handleLogout}>Logout</button>
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
    }
  };
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
