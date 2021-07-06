import React from "react";
import styles from "./text-field.module.scss";

import { Field, ErrorMessage } from "formik";

const TextField = (props) => {
  const { name, title, required, styleName } = props;

  return (
    <div className={styleName ? `${styles.group} ${styleName}` : styles.group}>
      {title && (
        <label htmlFor={name} className={styles.group__label}>
          {title}
        </label>
      )}
      <Field
        id={name}
        type="text"
        name={name}
        className={styles.group__field}
        required={required}
      />
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

export default TextField;
