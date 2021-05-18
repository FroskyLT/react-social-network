import React from "react";
import { CgClose } from "react-icons/cg";

export const Icon = (props) => {
  switch (props.name) {
    case "close":
      return <CgClose />;
    default:
      return "error";
  }
};

export default Icon;
