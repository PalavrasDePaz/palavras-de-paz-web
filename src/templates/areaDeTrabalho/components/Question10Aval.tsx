import React from "react";

import styles from "../styles/FormularioAvaliacao.module.css";

interface FormData {
  question10?: string;
}

interface Question10AvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question10Aval: React.FC<Question10AvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <label className={styles.labelClass}>
    AVALIAÇÃO DA QUESTÃO 10
    <p>
      {`O que o(a) aluno(a) aprendeu 
    no curso e quer levar para o resto da vida?`}
    </p>
    <textarea
      className={styles.textareaClass}
      name="question10"
      value={formData?.question10}
      onChange={handleChangeQuestions}
    />
  </label>
);

export default Question10Aval;
