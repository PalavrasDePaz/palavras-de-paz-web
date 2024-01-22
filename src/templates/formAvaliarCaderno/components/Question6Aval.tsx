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
    <label>
      <p>
        Resposta do(a) aluno(a): Justifique a resposta da questão 5 (O Programa
        ajudou em sua vida?):
      </p>
      <textarea
        name="question6"
        value={formData?.question6}
        onChange={handleChangeQuestions}
      />
    </label>
  </>
);

export default Question6Aval;
