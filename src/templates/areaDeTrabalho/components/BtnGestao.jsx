import React from "react";
import PropTypes from "prop-types";

import Styles from "../styles/GestaoDeRelatorios.module.css";

const BtnGestao = ({ text }) => {
  function handleClick() {
    return console.log("enviado");
  }
  return (
    <button className={Styles.btnGestao} onClick={handleClick}>
      {text}
    </button>
  );
};

BtnGestao.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BtnGestao;
