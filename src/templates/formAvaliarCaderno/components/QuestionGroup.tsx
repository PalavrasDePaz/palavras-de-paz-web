import React from "react";

import { optionsQuestion1 } from "../helpers/avalQuestions";

import QuestionInput from "./QuestionInput";

import styles from "../styles/QuestionAval.module.css";

interface QuestionGroupProps {
  onChange: (questionNumber: number, index: number, value: string) => void;
}

const QuestionGroup: React.FC<QuestionGroupProps> = ({ onChange }) => {
  const handleQuestionChange = (
    questionNumber: number,
    index: number,
    value: string
  ) => {
    onChange(questionNumber, index, value);
  };

  return (
    <>
      <h3 className={styles.sectionTitle}>Avaliação da Questão 1</h3>
      <label htmlFor="question1" className={styles.label}>
        Classifique as afirmações conforme indicado no caderno preenchido pelo
        aluno(a):
        {optionsQuestion1.map((question, index) => (
          <div key={question.id} id={styles.q1Container}>
            <label className={styles.label}>
              {`${question.letter}) ${question.question}`}
            </label>
            <QuestionInput
              question={question}
              onChange={(questionId, value) =>
                handleQuestionChange(questionId, index, value)}
            />
          </div>
        ))}
      </label>
    </>
  );
};

export default QuestionGroup;
