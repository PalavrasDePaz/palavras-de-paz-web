import React from "react";

import styles from "../styles/QuestionAval.module.css";

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
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 10</h3>
    <label className={styles.label}>
      Resposta do(a) aluno(a): O que aprendeu no curso e quer levar para o resto
      da vida?
      <textarea
        rows={5}
        className={styles.input}
        name="question10"
        value={formData?.question10}
        onChange={handleChangeQuestions}
      />
    </label>
  </>
);

export default Question10Aval;
