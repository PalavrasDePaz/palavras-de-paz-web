import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question2AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  name: string;
}

const Question2: React.FC<Question2AvalProps> = ({
  handleChangeQuestions,
  title,
  name,
}) => (
  <div className={styles.optionContainer}>
    <p className={styles.radioLabel}>{title}</p>
    <label htmlFor="valido" className={styles.radioLabel}>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        id="valido"
        value="VALIDADO"
        onChange={(e) => handleChangeQuestions(e)}
        required
      />
      VALIDADO
    </label>
    <label htmlFor="naoValidado" className={styles.radioLabel}>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        id="naoValidado"
        value="NãO VALIDADO"
        onChange={(e) => handleChangeQuestions(e)}
      />
      NÃO VALIDADO
    </label>
  </div>
);

export default Question2;
