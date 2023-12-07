import React from "react";

import styles from "../../../styles/formularioAvaliação/FormularioAvaliacao.module.css";

interface FormData {
  perception?: string;
}

interface PerceptionAvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question11Aval: React.FC<PerceptionAvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <label className={styles.labelClass}>
    CONCLUSÃO DO AVALIADOR
    <p>Descreva sua percepção sobre o desenvolvimento do aluno:</p>
    <textarea
      className={styles.textareaClass}
      name="perception"
      value={formData?.perception}
      onChange={handleChangeQuestions}
    />
  </label>
);

export default Question11Aval;
