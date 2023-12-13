import React from "react";
import propTypes from "prop-types";

import styles from "./ToggleSlideCheckoutButton.module.css";

// Botão não implementado. Padronizar Avaliar Cadernos e Avaliar Redação para reutilizar componente
const ToggleSlideCheckoutButton = ({
  studentName,
  checked,
  handleReservation,
}) => (
  <>
    <input
      className={styles.toggle}
      id={studentName}
      type="checkbox"
      checked={checked}
      onChange={(e) => handleReservation(e.target.id)}
    />
    <label htmlFor={studentName} className={styles.switch}>
      <span className={styles.slider} />
    </label>
  </>
);

ToggleSlideCheckoutButton.propTypes = {
  studentName: propTypes.string,
  checked: propTypes.bool,
}.isRequired;

export default ToggleSlideCheckoutButton;
