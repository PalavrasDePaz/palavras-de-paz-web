import React, { useState } from "react";
import PropTypes from "prop-types";

import { optionsQuestion2 } from "../../helpers/avalQuestions";
import useGetUser from "../../hooks/useGetUser";
import useUserEmail from "../../hooks/useUserEmail";

import HeaderForm from "./components/HeaderForm";
import Question2Aval from "./components/Question2Aval";
import Question3Aval from "./components/Question3Aval";
import Question4Aval from "./components/Question4Aval";
import Question6Aval from "./components/Question6Aval";
import Question7Aval from "./components/Question7Aval";
import Question8Aval from "./components/Question8Aval";
import Question9Aval from "./components/Question9Aval";
import Question10Aval from "./components/Question10Aval";
import Question11Aval from "./components/Question11Aval";
import QuestionGroup from "./components/QuestionGroup";
import StudentInfoInput from "./components/StudentInfoInput";
import UnidadePrisional from "./components/UnidadePrisional";

// import styles from "./styles/FormularioAvaliacaoCaderno.module.css";

interface FormularioAvaliacaoCadernoProps {
  onClose: () => void;
}

const FormAvalCadTemplate: React.FC<FormularioAvaliacaoCadernoProps> = ({
  onClose,
}) => {
  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);

  const [formData, setFormData] = useState({
    volunteerId: user?.idvol,
    email: user?.email,
    studentName: "",
    studentId: "",
    prisonUnit: "",
    relevantContent: "",
    question1: { index: -1, value: "" },
    question2: {},
    question3: "",
    question4: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    perception: "",
  });

  const handleChangeName = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleQuestionChange = (
    questionNumber: number,
    index: number,
    value: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      question1: {
        ...prevData.question1,
        [`question${questionNumber}`]: { index, value },
      },
    }));
  };

  const handleChangeQuestion2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question2: {
        ...prevData.question2,
        [value]: checked,
      },
    }));
  };

  const handleChangeQuestions = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeQuestionRelevant = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      relevantContent: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // adicioar lógica para enviar ao backend
    // console.log("Form data submitted:", formData);
    // onClose();
  };

  return (
    <>
      <HeaderForm />
      <h1>Formulário de Avaliação de Leitura - Cadernos</h1>
      <h5>
        Realize a transcrição da avaliação do relatório de leitura conclúida.
      </h5>
      <form onSubmit={handleSubmit}>
        <StudentInfoInput
          label="ID do Voluntário"
          type="text"
          name="volunteerId"
          value={user?.idvol}
          instructions="NÚMERO DE INSCRIÇÃO PALAVRAS DE PAZ"
          readOnly
        />
        <StudentInfoInput
          label="E-mail"
          type="email"
          name="email"
          value={user?.email}
          instructions="SEU E-MAIL UTILIZADO COMO VOLUNTÁRIO DO PALAVRAS DE PAZ"
          readOnly
        />
        <StudentInfoInput
          label="Nome do Aluno(a)"
          type="text"
          value={formData.studentName}
          onChange={handleChangeName}
          name="studentName"
          instructions="ESCREVA O NOME DO ALUNO PARTICIPANTE NA UNIDADE PRISIONAL"
        />
        <StudentInfoInput
          label="Número de Matrícula do(a) Aluno(a)"
          type="number"
          value={formData.studentId}
          onChange={handleChangeName}
          name="studentId"
          instructions={`SEM HIFEN OU ESPAÇO (SE NÃO CONTAR NR MATR. 
            INSERIR NR DO ALUNO QUE ESTÁ NA PLANILHA DE CADERNOS)`}
        />

        <label htmlFor="prisonUnit">
          Unidade Prisional do(a) Aluno(a):
          <UnidadePrisional handleChange={handleChangeName} />
        </label>

        <label>
          {`CONTEÚDOS RELEVANTES (Selecione um trecho onde se percebe o entendimento 
            e a evolução do participante - em até 3 linhas)`}
          <textarea
            name="perception"
            value={formData.relevantContent}
            onChange={handleChangeQuestionRelevant}
          />
          <p>Sua Resposta</p>
        </label>

        {/* Question 1 */}
        <label>
          AVALIAÇÃO DA QUESTÃO 1
          <p>
            {`Classifique as afirmações conforme a tabela abaixo 
          de acordo indicado no caderno preenchido pelo aluno(a):`}
          </p>
          <QuestionGroup onChange={handleQuestionChange} />
        </label>

        {/* Question 2 */}
        <label htmlFor="question2">
          AVALIAÇÃO DA QUESTÃO 2
          <Question2Aval
            options={optionsQuestion2}
            name="question2"
            onChange={handleChangeQuestion2}
          />
        </label>

        {/* Question 3 */}
        <Question3Aval
          handleChangeQuestions={handleChangeQuestions}
          formData={formData}
        />

        {/* Question 4 */}
        <Question4Aval
          handleChangeQuestions={handleChangeQuestions}
          formData={formData}
        />

        {/* Question 6 */}
        <Question6Aval
          handleChangeQuestions={handleChangeQuestions}
          formData={formData}
        />

        {/* Question 7 */}
        <Question7Aval handleChangeQuestions={handleChangeQuestions} />

        {/* Question 8 */}
        <Question8Aval handleChangeQuestions={handleChangeQuestions} />

        {/* Question 8 */}
        <Question9Aval handleChangeQuestions={handleChangeQuestions} />

        {/* Question 10 */}
        <Question10Aval
          handleChangeQuestions={handleChangeQuestions}
          formData={formData}
        />

        {/* Perception */}
        <Question11Aval
          handleChangeQuestions={handleChangeQuestions}
          formData={formData}
        />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <button onClick={onClose}>Fechar</button>
    </>
  );
};

FormAvalCadTemplate.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default FormAvalCadTemplate;
