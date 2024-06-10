import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question7AvalProps {
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question7: React.FC<Question7AvalProps> = ({ handleChangeQuestions }) => (
  <>
    <h3 className={styles.sectionTitle}>Histórias Observadas</h3>
    <p className={styles.label}>
      Descreva a história observada e a página correspondente do livro (se não
      foi listado no item anterior).
    </p>
    <textarea
      className={styles.textArea}
      name="observedHistories"
      onChange={(e) => handleChangeQuestions(e)}
    />
  </>
);

export default Question7;
