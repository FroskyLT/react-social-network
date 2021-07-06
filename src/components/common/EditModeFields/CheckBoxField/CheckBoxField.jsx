import React from "react";
import styles from "./check-box-field.module.scss";

import { Field, ErrorMessage } from "formik";
import { FaCheck } from "react-icons/fa";

const CheckBoxField = (props) => {
  const { name, title, required } = props;

  return (
    <div className={styles.group}>
      <div className={styles.checkbox}>
        <label htmlFor={name} className={styles.checkbox__label}>
          {title}
        </label>
        <div className={styles.checkbox__field}>
          <Field
            id={name}
            type="checkbox"
            name={name}
            className={styles.checkbox__original}
            required={required}
          />
          <span className={styles.checkbox__custom} />
          <FaCheck className={styles.checkbox__check} />
        </div>
      </div>
      <div className={styles.group__error}>
        <ErrorMessage
          name={name}
          component="div"
          className={styles.group__error}
        />
      </div>
    </div>
  );
};

export default CheckBoxField;
