import React from "react";

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
  "Discordo Totalmente",
  "Discordo",
  "Não sei",
  "Concordo",
  "Concordo Totalmente",
];

const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  onChange,
}) => {
  const handleChange = (questionId: number, value: string) => {
    onChange(questionId, value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
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
