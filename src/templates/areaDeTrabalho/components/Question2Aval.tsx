import React from "react";

import styles from "../styles/FormularioAvaliacao.module.css";

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
  <div className={styles.checkboxGroup}>
    {options.map((option) => (
      <label key={option}>
        <input type="checkbox" name={name} value={option} onChange={onChange} />
        {option}
      </label>
    ))}
  </div>
);

export default Question2Aval;
