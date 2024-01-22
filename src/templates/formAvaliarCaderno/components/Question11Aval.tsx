import React from "react";

import styles from "../styles/QuestionAval.module.css";

interface FormData {
  perception?: string;
}

interface PerceptionAvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question11Aval: React.FC<PerceptionAvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Conclusão do Avaliador</h3>
    <label className={styles.label}>
      Descreva sua percepção sobre o desenvolvimento do aluno:
      <textarea
        className={styles.input}
        name="perception"
        value={formData?.perception}
        onChange={handleChangeQuestions}
      />
    </label>
  </>
);

export default Question11Aval;
