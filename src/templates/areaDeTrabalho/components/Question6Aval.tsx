import React from "react";

import styles from "../../../styles/formularioAvaliação/FormularioAvaliacao.module.css";

interface FormData {
  question6?: string;
}

interface Question6AvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question6Aval: React.FC<Question6AvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <label className={styles.labelClass}>
    AVALIAÇÃO DA QUESTÃO 6
    <p>
      {`Qual a resposta do(a) aluno(a): 
    "JUSTIFIQUE A RESPOSTA DA QUESTÃO 5 (O Programa ajudou em sua vida?)"`}
    </p>
    <textarea
      className={styles.textareaClass}
      name="question6"
      value={formData?.question6}
      onChange={handleChangeQuestions}
    />
  </label>
);

export default Question6Aval;
