import React, { useState } from "react";

import { CheckBoxType } from "../types";

import Question6Check from "./Question6Check";

import styles from "../styles/QuestionAval.module.css";

interface Question6AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// são 63 checkboxes

const Question6: React.FC<Question6AvalProps> = ({ handleChangeQuestions }) => {
  const [required, setRequired] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeQuestions(e);
    setRequired(false);
  };

  return (
    <>
      <h3 className={styles.sectionTitle}>Histórias Relatadas*</h3>
      <p className={styles.label}>Transcreva os resultados apontados.</p>
      <label htmlFor="Não tem história descrita" className={styles.radioLabel}>
        <input
          type="checkbox"
          name="readHistories"
          id="Não tem história descrita"
          onChange={(e) => handleChange(e)}
          className={styles.radioInput}
        />
        Não tem história descrita
      </label>
      {CheckBoxType.map((label) => (
        <Question6Check
          key={label}
          label={label}
          handleChangeQuestions={handleChangeQuestions}
          required={required}
        />
      ))}
    </>
  );
};

export default Question6;
