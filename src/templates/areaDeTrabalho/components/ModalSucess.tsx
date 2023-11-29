import React, { KeyboardEvent, useEffect, useState } from "react";

import styles from "../styles/ModalSuccess.module.css";

type ModalSuccessProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
  timeout: number;
};

const ModalSucess = ({
  isOpen,
  onClose,
  content,
  timeout,
}: ModalSuccessProps) => {
  const [visible, setVisible] = useState(isOpen);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setVisible(false);
        onClose();
      }, timeout);
    }
  }, [isOpen, onClose, timeout]);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => setVisible(false)}
      className={`${styles.modal} ${visible ? styles.visible : ""}`}
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setVisible(false)}
        className={styles.modalContent}
      >
        {content}
      </div>
    </div>
  );
};

export default ModalSucess;
