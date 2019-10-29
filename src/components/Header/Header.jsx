import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>

        <div className="logo">
          <img src="https://via.placeholder.com/300x50" alt="placeholder" />
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">Submit</button>
        </div>

        <div className="user-auth">
          <div>Welcome, </div>
          <button>Login</button>
          <button>Register</button>
        </div>

        <div className="cart">
          <span>Cart:</span>
          <span>0</span>
        </div>

      </div>
    )
  }
}

export default Header;