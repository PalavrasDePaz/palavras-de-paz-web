import React from "react";

import styles from "../styles/QuestionAval.module.css";

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
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 6</h3>
    <label className={styles.label}>
      Resposta do(a) aluno(a): Justifique a resposta da questão 5 (O Programa
      ajudou em sua vida?):
      <textarea
        rows={5}
        className={styles.input}
        name="question6"
        value={formData?.question6}
        onChange={handleChangeQuestions}
      />
    </label>
  </>
);

export default Question6Aval;
