import React from "react";

import { avalQuestions } from "../../../helpers/avalQuestions";

import QuestionInput from "./QuestionInput";

import styles from "../styles/FormularioAvaliacao.module.css";

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
      {avalQuestions.map((question) => (
        <div key={question.id}>
          <label
            className={styles.labelClass}
            htmlFor={`question${question.id}`}
          >
            <p id={`question${question.id}`}>
              {`${question.letter}) ${question.question}`}
            </p>
          </label>
          <QuestionInput
            question={question}
            onChange={(index, value) =>
              handleQuestionChange(question.id, index, value)}
          />
        </div>
      ))}
    </>
  );
};

export default QuestionGroup;
