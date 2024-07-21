import React, { useState } from "react";

import { CheckBoxType } from "../types";

import Question6Check from "./Question6Check";

import styles from "../styles/QuestionAval.module.css";

interface Question6AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}
// são 63 checkboxes

const Question6: React.FC<Question6AvalProps> = ({
  handleChangeQuestions,
  required,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Histórias Relatadas*</h3>
    <p className={styles.label}>Transcreva os resultados apontados.</p>
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

export default Question6;
