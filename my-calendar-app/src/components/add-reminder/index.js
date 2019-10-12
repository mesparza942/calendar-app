import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Icon = ({ addReminder }) => (
  <AddCircleIcon
    style={{ cursor: "pointer" }}
    fontSize="large"
    color="primary"
    onClick={addReminder}
  />
);

export default Icon;
