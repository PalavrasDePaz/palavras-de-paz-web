import React from "react";

import { optionsQuestion8 } from "../helpers/avalQuestions";

import styles from "../styles/QuestionAval.module.css";

interface Question8AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question8Aval: React.FC<Question8AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 8</h3>
    <label htmlFor="question8" className={styles.label}>
      Resposta do(a) aluno(a) - Você é?
      <div className={styles.optionContainer}>
        {optionsQuestion8.map((gender) => (
          <label key={gender} className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              name="question8"
              value={gender}
              onChange={handleChangeQuestions}
            />
            {gender}
          </label>
        ))}
      </div>
    </label>
  </>
);

export default Question8Aval;
