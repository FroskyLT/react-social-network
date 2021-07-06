import React from "react";
import styles from "./text-field.module.scss";

import { Field } from "formik";

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
        autoComplete="off"
        required={required}
      />
    </div>
  );
};

export default TextField;
