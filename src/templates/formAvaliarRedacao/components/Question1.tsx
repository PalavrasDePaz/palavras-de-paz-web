import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question3AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question1: React.FC<Question3AvalProps> = ({ handleChangeQuestions }) => (
  <>
    <h3 className={styles.sectionTitle}>Critérios de não validação</h3>
    <p>Assinale o campo conforme avaliação.</p>
    <div>
      <p>Houve cópia parcial ou integral de outro RL?</p>
      <div>
        <label htmlFor="isParcialPlagiarism" className={styles.label}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isParcialPlagiarism"
            id="isParcialPlagiarism"
            value="Sim"
            onChange={(e) => handleChangeQuestions(e)}
          />
          Sim
        </label>
        <label htmlFor="isNotParcialPlagiarism" className={styles.label}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isParcialPlagiarism"
            id="isNotParcialPlagiarism"
            value="Não"
            onChange={(e) => handleChangeQuestions(e)}
          />
          Não
        </label>
      </div>
    </div>
    <div>
      <p>Houve apropriação indevida do texto?</p>
      <div>
        <label htmlFor="isAppropriation" className={styles.label}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isAppropriation"
            id="isAppropriation"
            value="Sim"
            onChange={(e) => handleChangeQuestions(e)}
          />
          Sim
        </label>
        <label htmlFor="isNotAppropriation" className={styles.label}>
          <input
            className={styles.radioInput}
            type="radio"
            name="isAppropriation"
            id="isNotAppropriation"
            value="Não"
            onChange={(e) => handleChangeQuestions(e)}
          />
          Não
        </label>
      </div>
    </div>
  </>
);

export default Question1;
