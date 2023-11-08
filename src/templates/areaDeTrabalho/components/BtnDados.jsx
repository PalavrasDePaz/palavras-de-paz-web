/* eslint-disable react/prop-types */
import React from "react";

import Styles from "../styles/AreaDeTrabalho.module.css";

export default function BtnDados({ onClick, disabled }) {
  return (
    <button className={Styles.btnDados} onClick={onClick} disabled={disabled}>
      Baixar Planilha
    </button>
  );
}
