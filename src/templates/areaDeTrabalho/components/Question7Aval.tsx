import React from "react";

import styles from "../../../styles/formularioAvaliação/FormularioAvaliacao.module.css";

interface Question7AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question7Aval: React.FC<Question7AvalProps> = ({
  handleChangeQuestions,
}) => (
  <label className={styles.labelClass} htmlFor="question7">
    QUESTÃO 7: Quantos anos você tem?
    <div className={styles.radioGroup}>
      {["Até 35 anos", "36 a 55 anos", "Mais de 55"].map((ageRange) => (
        <label key={ageRange}>
          <input
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
);

export default Question7Aval;
