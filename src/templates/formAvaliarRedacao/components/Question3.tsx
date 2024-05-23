import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question3AvalProps {
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question3: React.FC<Question3AvalProps> = ({ handleChangeQuestions }) => (
  <>
    <h3 className={styles.sectionTitle}>Observações do parcerista</h3>
    <p className={styles.label}>
      Descreva a justificativa do critério não validado ou a justificativa da
      percepção de plágio.
    </p>
    <textarea
      className={styles.input}
      name="observations"
      onChange={(e) => handleChangeQuestions(e)}
      placeholder="Deixar em branco em caso de
      inexistência de fatos a serem justificados."
    />
  </>
);

export default Question3;
