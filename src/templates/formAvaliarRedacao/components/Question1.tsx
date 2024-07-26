import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question1AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const Question1: React.FC<Question1AvalProps> = ({
  handleChangeQuestions,
  required,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Critérios de não validação*</h3>
    <p className={styles.label}>Assinale o campo conforme avaliação.</p>
    <div>
      <div className={styles.optionContainer}>
        <p className={styles.radioLabel}>
          Houve apropriação indevida do texto?
        </p>
        <label htmlFor="isAppropriation" className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isAppropriation"
            id="isAppropriation"
            value="SIM"
            onChange={(e) => handleChangeQuestions(e)}
            required={required}
          />
          SIM
        </label>
        <label htmlFor="isNotAppropriation" className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isAppropriation"
            id="isNotAppropriation"
            value="NÃO"
            onChange={(e) => handleChangeQuestions(e)}
            required={required}
          />
          NÃO
        </label>
      </div>
      <div className={styles.optionContainer}>
        <p className={styles.radioLabel}>
          Houve cópia parcial ou integral de outro RL?
        </p>
        <label htmlFor="isParcialPlagiarism" className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isParcialPlagiarism"
            id="isParcialPlagiarism"
            value="SIM"
            onChange={(e) => handleChangeQuestions(e)}
            required={required}
          />
          SIM
        </label>
        <label htmlFor="isNotParcialPlagiarism" className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isParcialPlagiarism"
            id="isNotParcialPlagiarism"
            value="NÃO"
            onChange={(e) => handleChangeQuestions(e)}
            required={required}
          />
          NÃO
        </label>
      </div>
    </div>
  </>
);

export default Question1;
