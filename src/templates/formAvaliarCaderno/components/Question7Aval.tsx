import React from "react";

import { optionsQuestion7 } from "../helpers/avalQuestions";

import styles from "../styles/QuestionAval.module.css";

interface Question7AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question7Aval: React.FC<Question7AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Questão 7</h3>
    <label htmlFor="question7" className={styles.label}>
      Resposta do(a) aluno(a) - Quantos anos você tem?
      <div className={styles.optionContainer}>
        {optionsQuestion7.map((ageRange) => (
          <label key={ageRange} className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              name="question7"
              value={ageRange}
              onChange={handleChangeQuestions}
            />
            {ageRange}
          </label>
        ))}
      </div>
    </label>
  </>
);

export default Question7Aval;
