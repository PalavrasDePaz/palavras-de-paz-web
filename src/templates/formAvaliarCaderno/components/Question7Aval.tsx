import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question7AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question7Aval: React.FC<Question7AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 7</h3>
    <label htmlFor="question7" className={styles.label}>
      Resposta do(a) aluno(a) - Quantos ano você tem?
      <div className={styles.optionContainer}>
        {["Até 35 anos", "36 a 55 anos", "Mais de 55"].map((ageRange) => (
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
