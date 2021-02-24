import React from "react";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./button.css";

const MyButton = ({ onClick }) => {
  return (
    <IconButton size="small" className="button" onClick={onClick}>
      <VisibilityIcon />
    </IconButton>
  );
};

export default MyButton;
