import React from "react";

import styles from "../styles/QuestionAval.module.css";

// Link para modificar radio button para checkbox:
// https://pt.stackoverflow.com/questions/295624/como-fazer-esses-bot%C3%B5es-radio-ao-estilo-checkbox-e-alterar-o-valor-de-um-texto

// https://wldomiciano.com/como-personalizar-checkbox-radio-button-com-css/

interface QuestionInputProps {
  question: {
    id: number;
    letter: string;
    question: string;
    type: "radio" | "text";
  };
  onChange: (questionId: number, value: string) => void;
}

const options = [
  "1. Discordo totalmente",
  "2. Discordo",
  "3. Não sei",
  "4. Concordo",
  "5. Concordo totalmente",
];

const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  onChange,
}) => {
  const handleChange = (questionId: number, value: string) => {
    onChange(questionId, value);
  };

  return (
    <div className={styles.optionContainer}>
      {options.map((option) => (
        <label key={option} className={styles.radioLabel}>
          <input
            className={styles.radioInput}
            type="radio"
            name={question.letter}
            value={option}
            onChange={(e) => handleChange(question.id, e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default QuestionInput;
