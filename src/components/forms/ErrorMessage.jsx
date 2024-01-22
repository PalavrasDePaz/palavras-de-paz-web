import React from "react";
import propTypes from "prop-types";

export default function ErrorMessage({ showError, style } = props) {
  return showError ? <p className={style}>{showError.message}</p> : null;
}

ErrorMessage.propTypes = {
  showError: propTypes.shape({
    message: propTypes.string,
  }),
  style: propTypes.string,
};
