import React from "react";

// import styles from "../styles/FormularioAvaliacaoCaderno.module.css";

interface Question9AvalProps {
  handleChangeQuestions: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question9Aval: React.FC<Question9AvalProps> = ({
  handleChangeQuestions,
}) => (
  <label htmlFor="question9">
    QUESTÃO 9: Qual o seu grau de instrução?
    <div>
      {[
        "Ensino Fundamental Incompleto",
        "Ensino Fundamental Completo",
        "Ensino Médio Incompleto",
        "Ensino Médio Completo",
        "Ensino Superior Incompleto",
        "Ensino Superior Completo",
        "Não Consta",
      ].map((educationLevel) => (
        <label key={educationLevel}>
          <input
            type="radio"
            name="question9"
            value={educationLevel}
            onChange={handleChangeQuestions}
          />
          {educationLevel}
        </label>
      ))}
    </div>
  </label>
);

export default Question9Aval;
