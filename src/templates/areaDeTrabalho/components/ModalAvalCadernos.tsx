import React from "react";

import FormularioAvaliacao from "./FormularioAvaliacao";

import styles from "../styles/ModalAvalCadernos.module.css";

interface ModalAvalCadernosProps {
  onClose: () => void;
}

const ModalAvalCadernos: React.FC<ModalAvalCadernosProps> = ({ onClose }) => (
  <div className={styles.modal_overlay}>
    <div className={styles.modal_content}>
      <FormularioAvaliacao onClose={onClose} />
    </div>
  </div>
);

export default ModalAvalCadernos;
