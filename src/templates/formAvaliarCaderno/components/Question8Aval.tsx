import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question8AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question8Aval: React.FC<Question8AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 8</h3>
    <label htmlFor="question8">
      <p>Resposta do(a) aluno(a) - Você é?</p>
      <div>
        {["Masculino", "Feminino", "Outros", "Não Sei"].map((gender) => (
          <label key={gender}>
            <input
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