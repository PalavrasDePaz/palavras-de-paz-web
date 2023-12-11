import React from "react";

// import styles from "../styles/FormularioAvaliacaoCaderno.module.css";

interface FormData {
  question3?: string;
}

interface Question3AvalProps {
  formData: FormData;
  handleChangeQuestions: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Question3Aval: React.FC<Question3AvalProps> = ({
  formData,
  handleChangeQuestions,
}) => (
  <label>
    AVALIAÇÃO DA QUESTÃO 3
    <p>{`A resposta do(a) aluno(a): "ESCREVA O QUE MAIS GOSTOU NO PROGRAMA":`}</p>
    <textarea
      name="question3"
      value={formData?.question3}
      onChange={handleChangeQuestions}
    />
  </label>
);

export default Question3Aval;
