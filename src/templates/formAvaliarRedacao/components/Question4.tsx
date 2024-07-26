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
      required
    >
      <option value="" disabled selected>
        Selecione
      </option>
      <option value="RELATÓRIO DE LEITURA VALIDADO">
        RELATÓRIO DE LEITURA VALIDADO
      </option>
      <option value="RELATÓRIO DE LEITURA NÃO VALIDADO">
        RELATÓRIO DE LEITURA NÃO VALIDADO
      </option>
    </select>
  </>
);

export default Question4;
