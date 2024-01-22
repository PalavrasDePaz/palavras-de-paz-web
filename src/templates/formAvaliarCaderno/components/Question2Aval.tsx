import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface CheckboxGroupProps {
  options: string[];
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question2Aval: React.FC<CheckboxGroupProps> = ({
  options,
  name,
  onChange,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 2</h3>
    <label htmlFor="question2" className={styles.label}>
      Qual a probabilidade de você recomendar o Programa de Educação para a Paz
      a outra pessoa?
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            name={name}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </label>
  </>
);

export default Question2Aval;
