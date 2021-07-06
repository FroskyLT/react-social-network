import React from "react";
import styles from "./contact-field.module.scss";

import Dialog from "../../Dialog/Dialog";
import TextField from "../TextField/TextField";

const ContactField = ({ selectedContact, closeDialog }) => {
  return (
    <Dialog
      showDialog={!!selectedContact}
      title={selectedContact}
      closeDialog={closeDialog}
    >
      <TextField
        name={`contacts.${selectedContact}`}
        styleName={styles.contactField}
      />
    </Dialog>
  );
};

export default ContactField;
