import React from "react";

import { optionsQuestion9 } from "../helpers/avalQuestions";

import styles from "../styles/QuestionAval.module.css";

interface Question9AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question9Aval: React.FC<Question9AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 9</h3>
    <label htmlFor="question9" className={styles.label}>
      Resposta do(a) aluno(a) - Qual seu grau de instrução?
      <div className={styles.optionContainer}>
        {optionsQuestion9.map((educationLevel) => (
          <label key={educationLevel} className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              name="question9"
              value={educationLevel}
              onChange={handleChangeQuestions}
            />
            {educationLevel}
          </label>
        ))}
      </div>
    </label>
  </>
);

export default Question9Aval;
