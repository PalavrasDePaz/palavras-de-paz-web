import React from "react";

import Question2 from "./Question2";

import styles from "../styles/QuestionAval.module.css";

interface Question2AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question2Container: React.FC<Question2AvalProps> = ({
  handleChangeQuestions,
}) => (
  <>
    <h3 className={styles.sectionTitle}>Parâmetros Avaliados*</h3>
    <p className={styles.label}>Transcreva os resultados apontados.</p>
    <div className={styles.containerDiv}>
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Estética textual"
        name="textAestheticsAvaliation"
      />
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Fidedignidade"
        name="textReliabilityAvaliation"
      />
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Clareza do texto"
        name="textClarityAvaliation"
      />
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Análise Crítica - Opinião sobre a obra"
        name="bookCriticalAnalysisAvaliation"
      />
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Análise Crítica - Relação com a sociedade"
        name="societyCriticalAnalysisAvaliation"
      />
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Emprego correto da língua portuguesa"
        name="grammarAvaliation"
      />
      <Question2
        handleChangeQuestions={handleChangeQuestions}
        title="Redação sintética"
        name="syntheticAvaliation"
      />
    </div>
  </>
);

export default Question2Container;
