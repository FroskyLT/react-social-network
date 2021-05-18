import React from "react";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
// import Friends from './Friends/Friends';

const Navbar = (props) => {
  // let friendsElements = props.friendsData.map(d => <Friends name={d.name} imgUrl={d.imgUrl} key={d.id} />);
  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to="/"
        className={styles.navigation__item}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={styles.navigation__item}
        activeClassName={styles.active}
      >
        Profile
      </NavLink>
      <NavLink
        to="/dialogs"
        className={styles.navigation__item}
        activeClassName={styles.active}
      >
        Messages
      </NavLink>
      <NavLink
        to="/users"
        className={styles.navigation__item}
        activeClassName={styles.active}
      >
        Users
      </NavLink>
      <NavLink
        to="/music"
        className={styles.navigation__item}
        activeClassName={styles.active}
      >
        Music
      </NavLink>
    </nav>
  );
};

export default Navbar;
