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
    <label htmlFor="question5">
      <p>Resposta do(a) aluno(a) - O Programa ajudou sua vida?</p>
      <div>
        {["Sim", "Não"].map((ageRange) => (
          <label key={ageRange}>
            <input
              type="radio"
              name="question5"
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

export default Question5Aval;
