import React from "react";

import styles from "../styles/FormularioAvaliacao.module.css";

interface FormData {
  question4?: string;
}

interface Question4AvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question4Aval: React.FC<Question4AvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <label className={styles.labelClass}>
    AVALIAÇÃO DA QUESTÃO 4
    <p>
      {`A resposta do aluno(a): "EXISTE ALGO NO PROGRAMA 
    DE EDUCAÇÃO PARA A PAZ QUE PODERIA SER MELHORADO?"`}
    </p>
    <textarea
      className={styles.textareaClass}
      name="question4"
      value={formData?.question4}
      onChange={handleChangeQuestions}
    />
  </label>
);

export default Question4Aval;
