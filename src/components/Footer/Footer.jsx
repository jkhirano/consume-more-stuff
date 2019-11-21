import React, { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <p className={styles.footerLink}>Terms and Conditions</p>
          </li>
          <p className={styles.footerItem}>|</p>
          <li className={styles.footerItem}>
            <p className={styles.footerLink}>Privacy Policy</p>
          </li>
          <p className={styles.footerItem}>|</p>
          <li className={styles.footerItem}>
            <p className={styles.footerLink}>Cookie Policy</p>
          </li>
          <p className={styles.footerItem}>|</p>
          <li className={styles.footerItem}>
            <p className={styles.footerLink}>© 2019 Bad Habits</p>
          </li>
        </ul>
        {/* <div className="SpecialThanks">
          Footer
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/dave-gandy"
              title="Dave Gandy"
            >
              Dave Gandy
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/google" title="Google">
              Google
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Footer;
