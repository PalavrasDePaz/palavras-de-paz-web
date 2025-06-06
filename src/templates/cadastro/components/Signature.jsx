import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/Signature.module.css";

export default function Signature({ controller, student }) {
  function createSignature(controllerNumber) {
    const signatureClass = `signature_${controllerNumber}`;

    const classNames = `${styles.signatures} ${styles[signatureClass]}`;

    return (
      <>
        <div className={classNames} />
        <div className={classNames} />
        {!student && <div className={classNames} />}
        {!student && <div className={classNames} />}
      </>
    );
  }

  return (
    <div className={styles.signatures_container}>
      {createSignature(controller)}
    </div>
  );
}

Signature.propTypes = {
  controller: PropTypes.number.isRequired,
  student: PropTypes.bool.isRequired,
};
