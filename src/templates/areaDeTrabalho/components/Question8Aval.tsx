import React from "react";

import styles from "../styles/FormularioAvaliacao.module.css";

interface Question8AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question8Aval: React.FC<Question8AvalProps> = ({
  handleChangeQuestions,
}) => (
  <label className={styles.labelClass} htmlFor="question8">
    QUESTÃO 8: Você é?
    <div className={styles.radioGroup}>
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
);

export default Question8Aval;
