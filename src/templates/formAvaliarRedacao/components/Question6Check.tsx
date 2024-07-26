import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question6AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required: boolean;
}

const Question6: React.FC<Question6AvalProps> = ({
  handleChangeQuestions,
  label,
  required,
}) => (
  <div className={styles.checkboxContainer}>
    <label htmlFor={label} className={styles.radioLabel}>
      <input
        type="checkbox"
        name="readHistories"
        id={label}
        onChange={(e) => handleChangeQuestions(e)}
        className={styles.radioInput}
        required={required}
        value={label}
      />
      {label}
    </label>
  </div>
);

export default Question6;
