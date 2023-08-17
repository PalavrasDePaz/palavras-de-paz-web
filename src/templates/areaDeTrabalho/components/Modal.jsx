import React from "react";
import PropTypes from "prop-types";

import styles from "../styles/AreaDeTrabalho.module.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <form className={styles.headerModal}>
      <button className={styles.closeModal} onClick={onClose}>
        X
      </button>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="example@email.com" />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        type="text"
        id="mensagem"
        rows="5"
        placeholder="Digite sua mensagem para podermos te ajudar"
        width="150px"
      />
      <button type="submit" className={styles.sendMessage}>
        Enviar
      </button>
    </form>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
