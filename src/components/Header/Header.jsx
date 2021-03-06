import React, { useState } from "react";
import styles from "./header.module.scss";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import userPlaceholder from "../../assets/images/person.png";
import { IoMdHelp, IoMdLogOut, IoMdPerson, IoMdSettings } from "react-icons/io";
import { useClickOutside } from "../../utils/useEffects";

const Header = ({ isLogged, userPhotos, logoutHandler }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const onLogout = () => {
    logoutHandler();
    setDropdownOpen(false);
  };

  const profileImage = userPhotos?.large || userPlaceholder;

  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <NavLink to="/">FroskyLT</NavLink>
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.menu}>
        {isLogged ? (
          <div ref={dropdownNode} className={styles.menu__buttons}>
            {userPhotos !== null ? (
              <img
                src={profileImage}
                className={styles.loginImage}
                alt=""
                onClick={() => setDropdownOpen((dropdownOpen) => !dropdownOpen)}
              />
            ) : (
              <div className={styles.loginPlaceholder} />
            )}
            {dropdownOpen && (
              <ul className={styles.dropdown}>
                <li>
                  <Link to="/profile" className={styles.dropdown__item}>
                    <IoMdPerson className={styles.dropdown__itemIcon} />
                    {"Profile"}
                  </Link>
                </li>
                <li className={styles.dropdown__item}>
                  <IoMdSettings className={styles.dropdown__itemIcon} />
                  {"Settings"}
                </li>
                <li className={styles.dropdown__item}>
                  <IoMdHelp className={styles.dropdown__itemIcon} />
                  {"Help"}
                </li>
                <li
                  className={`${styles.dropdown__item} ${styles.dropdown__item_active}`}
                  onClick={onLogout}
                >
                  <IoMdLogOut className={styles.dropdown__itemIcon} />
                  {"Log out"}
                </li>
              </ul>
            )}
          </div>
        ) : (
          <NavLink to="/login" className={styles.menu__login}>
            {"sign in"}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
