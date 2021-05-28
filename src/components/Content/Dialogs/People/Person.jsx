import React from "react";
import styles from "./people.module.scss";
import { NavLink } from "react-router-dom";

const Person = (props) => {
  const { id, name, imgUrl } = props;
  const path = `/dialogs/${id}`;

  return (
    <NavLink
      activeClassName={styles.person__active}
      className={styles.person}
      to={path}
    >
      <img className={styles.person__image} src={imgUrl} alt="" />
      <div className={styles.person__name}>{name}</div>
    </NavLink>
  );
};

export default Person;
