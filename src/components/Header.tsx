import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/kolovrat.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.header_container}>
          <Link to={"/"}>
            <img className={styles.logo_head} src={logo} alt="" />
          </Link>
          <nav>
            <ul className={styles.ul_header}>
              <li className={styles.li_inline}>
                <Link className={styles.header_link} to={"/home"}>
                  Home
                </Link>{" "}
                {/*"/home" - это путь (path из Router.tsx*/}
              </li>
              <li className={styles.li_inline}>
                <Link className={styles.header_link} to={"/"}>
                  News
                </Link>
              </li>
              <li className={styles.li_inline}>
                <Link className={styles.header_link} to={"/"}>
                  Podcasts
                </Link>
              </li>
              <li className={styles.li_inline}>
                <Link className={styles.header_link} to={"/"}>
                  Resources
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.contact_button}>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
