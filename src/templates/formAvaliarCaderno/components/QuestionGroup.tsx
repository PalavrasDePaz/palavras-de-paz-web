import React from "react";

import { avalQuestions } from "../../../helpers/avalQuestions";

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
      <label htmlFor="question1">
        Classifique as afirmações conforme a tabela abaixo de acordo indicado no
        caderno preenchido pelo aluno(a):
        {avalQuestions.map((question) => (
          <div key={question.id}>
            <label htmlFor={`question${question.id}`}>
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
      </label>
    </>
  );
};

export default QuestionGroup;
