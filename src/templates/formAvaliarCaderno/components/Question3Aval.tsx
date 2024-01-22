import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface FormData {
  question3?: string;
}

interface Question3AvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question3Aval: React.FC<Question3AvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 3</h3>
    <label htmlFor="question3">
      Resposta do(a) aluno(a) - Escreva o que mais gostou no programa:
      <textarea
        name="question3"
        value={formData?.question3}
        onChange={handleChangeQuestions}
      />
    </label>
  </>
);

export default Question3Aval;
