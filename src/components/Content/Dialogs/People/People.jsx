import React from "react";
import styles from "./people.module.scss";
import Person from "./Person";

const People = ({ peopleData }) => {
  const peopleElements = peopleData.map((person) => (
    <Person
      id={person.id}
      name={person.name}
      imgUrl={person.imgUrl}
      key={person.id}
    />
  ));
  return <div className={styles.people}>{peopleElements}</div>;
};

export default People;
