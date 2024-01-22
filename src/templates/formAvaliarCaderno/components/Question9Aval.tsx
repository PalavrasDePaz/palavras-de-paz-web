import React from "react";

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
      <div>
        {[
          "Ensino Fundamental Incompleto",
          "Ensino Fundamental Completo",
          "Ensino Médio Incompleto",
          "Ensino Médio Completo",
          "Ensino Superior Incompleto",
          "Ensino Superior Completo",
          "Não Consta",
        ].map((educationLevel) => (
          <label key={educationLevel}>
            <input
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
