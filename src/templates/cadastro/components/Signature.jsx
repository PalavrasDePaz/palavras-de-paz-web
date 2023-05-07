import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Signature.module.css';

export default function Signature({ controller }) {
  function createSignature(controllerNumber) {
    const signatureClass = `signature_${ controllerNumber }`;
    return (
      <>
        <div className={ styles[signatureClass] } />
        <div className={ styles[signatureClass] } />
        <div className={ styles[signatureClass] } />
      </>
    );
  }

  return (
    <div className={ styles.signatures_container }>
      { createSignature(controller)}
    </div>
  );
}

Signature.propTypes = {
  controller: PropTypes.number.isRequired,
};
