import React from "react";

import styles from "../styles/QuestionAval.module.css";

const noop = () => null;

interface StudentInfoInputProps {
  label: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  readOnly?: boolean;
}

const StudentInfoInput: React.FC<StudentInfoInputProps> = ({
  label,
  type,
  value,
  onChange = noop, // evita erros caso nenhum manipulador de eventos seja fornecido
  name,
  readOnly = false,
}) => (
  <label className={styles.label}>
    {label}
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      readOnly={readOnly}
    />
  </label>
);

export default StudentInfoInput;
