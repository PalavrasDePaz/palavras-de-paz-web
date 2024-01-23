import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question5AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question5Aval: React.FC<Question5AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 5</h3>
    <label htmlFor="question5" className={styles.label}>
      Resposta do(a) aluno(a) - O Programa ajudou sua vida?
      <div className={styles.optionContainer}>
        {["Sim", "Não"].map((option) => (
          <label key={option} className={styles.radioLabel}>
            <input
              className={styles.radioInput}
              type="radio"
              name="question5"
              value={option}
              onChange={handleChangeQuestions}
            />
            {option}
          </label>
        ))}
      </div>
    </label>
  </>
);

export default Question5Aval;
