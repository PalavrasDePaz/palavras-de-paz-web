import React from "react";

import styles from "../styles/QuestionAval.module.css";

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
  <>
    <h3 className={styles.sectionTitle}>Avaliação da Questão 4</h3>
    <label className={styles.label}>
      Resposta do aluno(a) - Existe algo no Programa que poderia ser melhorado?
      <textarea
        className={styles.input}
        name="question4"
        value={formData?.question4}
        onChange={handleChangeQuestions}
      />
    </label>
  </>
);

export default Question4Aval;
