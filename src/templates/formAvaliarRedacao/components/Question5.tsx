import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question5AvalProps {
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question5: React.FC<Question5AvalProps> = ({ handleChangeQuestions }) => (
  <>
    <h3 className={styles.sectionTitle}>Frases relevantes</h3>
    <p className={styles.label}>
      Transcreva parte do relatório de leitura que considerou interessante.
    </p>
    <textarea
      className={styles.textArea}
      name="relevantPhrases"
      onChange={(e) => handleChangeQuestions(e)}
      placeholder="Deixar em branco em caso de:
      não houve texto relevante."
    />
  </>
);

export default Question5;
