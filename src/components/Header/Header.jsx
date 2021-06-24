import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import userPlaceholder from "../../assets/images/person.png";
import { IoMdHelp, IoMdLogOut, IoMdPerson, IoMdSettings } from "react-icons/io";
const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const outsideHandle = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", outsideHandle);

    return () => {
      document.removeEventListener("mousedown", outsideHandle);
    };
  });

  return domNode;
};

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
                <li className={styles.dropdown__item}>
                  <IoMdPerson className={styles.dropdown__itemIcon} />
                  {"Profile"}
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
