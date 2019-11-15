import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
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
          <a className={styles.register} href="/register.html">
            Register
          </a>
          <a className={styles.login} href="/login.html">
            Login
            <img
              className={styles.loginImg}
              src="https://image.flaticon.com/icons/svg/149/149408.svg"
              alt="login icon"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
