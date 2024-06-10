import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface Question4AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Question4: React.FC<Question4AvalProps> = ({ handleChangeQuestions }) => (
  <>
    <h3 className={styles.sectionTitle}>Conceito</h3>
    <p className={styles.label}>Selecione uma opção*</p>
    <select
      className={styles.dropdown}
      name="concept"
      onChange={(e) => handleChangeQuestions(e)}
    >
      <option value="Selecione">Selecione</option>
      <option value="Relatório de leitura validado">
        Relatório de leitura validado
      </option>
      <option value="Relatório de leitura não validado">
        Relatório de leitura não validado
      </option>
      <option value="Não avaliado">Não avaliado</option>
    </select>
  </>
);

export default Question4;
