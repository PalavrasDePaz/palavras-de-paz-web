import React from "react";

import styles from "../../../styles/formularioAvaliação/FormularioAvaliacao.module.css";

const noop = () => null;

interface StudentInfoInputProps {
  label: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  readOnly?: boolean;
  instructions?: string;
}

const StudentInfoInput: React.FC<StudentInfoInputProps> = ({
  label,
  type,
  value,
  onChange = noop, // evita erros caso nenhum manipulador de eventos seja fornecido
  name,
  readOnly = false,
  instructions = false,
}) => (
  <>
    <label className={styles.labelClass}>
      {label}:
      <input
        className={styles.inputClass}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
      />
    </label>
    {instructions && <p className={styles.instructionsClass}>{instructions}</p>}
  </>
);

export default StudentInfoInput;