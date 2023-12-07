/* eslint-disable max-lines */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { useGetUser } from "../../../hooks";
import useUserEmail from "../../../hooks/useUserEmail";

import QuestionGroup from "./QuestionGroup";
import StudentInfoInput from "./StudentInfoInput";
import UnidadePrisional from "./UnidadePrisional";

import styles from "../styles/FormularioAvaliacao.module.css";

interface FormularioAvaliacaoProps {
  onClose: () => void;
}

const FormularioAvaliacao: React.FC<FormularioAvaliacaoProps> = ({
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

  const handleChangeQuestion3 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question3: value,
    }));
  };

  const handleChangeQuestion4 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question4: value,
    }));
  };

  const handleChangeQuestion6 = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question6: value,
    }));
  };

  const handleChangeQuestion7 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question7: value,
    }));
  };

  const handleChangeQuestion8 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question8: value,
    }));
  };

  const handleChangeQuestion9 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question9: value,
    }));
  };

  const handleChangeQuestion10 = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      question10: value,
    }));
  };

  const handleChangeQuestion11 = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      perception: value,
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
    console.log("Form data submitted:", formData);
    // onClose();
  };

  return (
    <>
      <h1>Avaliação De Cadernos CEP/FUNAP/SATPR</h1>
      <h5>Leitura de Cadernos dos Alunos do Projeto CEP/FUNAP/SATPR</h5>
      <form className={styles.form} onSubmit={handleSubmit}>
        <StudentInfoInput
          label="ID do Voluntário"
          type="text"
          name="volunteerId"
          value={user?.idvol}
          readOnly
          instructions="NÚMERO DE INSCRIÇÃO PALAVRAS DE PAZ"
        />
        <StudentInfoInput
          label="E-mail"
          type="email"
          name="email"
          value={user?.email}
          readOnly
          instructions="SEU E-MAIL UTILIZADO COMO VOLUNTÁRIO DO PALAVRAS DE PAZ"
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

        <label className={styles.labelClass} htmlFor="prisonUnit">
          Unidade Prisional do(a) Aluno(a):
          <UnidadePrisional handleChange={handleChangeName} />
        </label>

        <label>
          {`CONTEÚDOS RELEVANTES (Selecione um trecho onde se percebe o entendimento 
            e a evolução do participante - em até 3 linhas)`}
          <textarea
            className={styles.textareaClass}
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
        <label className={styles.labelClass} htmlFor="question2">
          AVALIAÇÃO DA QUESTÃO 2
          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="question2"
                value="Muito Provavel"
                onChange={handleChangeQuestion2}
              />
              Muito Provavel
            </label>
            <label>
              <input
                type="checkbox"
                name="question2"
                value="Provavel"
                onChange={handleChangeQuestion2}
              />
              Provavel
            </label>
            <label>
              <input
                type="checkbox"
                name="question2"
                value="Neutro"
                onChange={handleChangeQuestion2}
              />
              Neutro
            </label>
            <label>
              <input
                type="checkbox"
                name="question2"
                value="Improvável"
                onChange={handleChangeQuestion2}
              />
              Improvável
            </label>
            <label>
              <input
                type="checkbox"
                name="question2"
                value="Muito Improvável"
                onChange={handleChangeQuestion2}
              />
              Muito Improvável
            </label>
            <label>
              <input
                type="checkbox"
                name="question2"
                value="Não Sei"
                onChange={handleChangeQuestion2}
              />
              Não Sei
            </label>
          </div>
        </label>

        {/* Question 3 */}
        <label className={styles.labelClass}>
          AVALIAÇÃO DA QUESTÃO 3
          <p>{`A resposta do(a) aluno(a): "ESCREVA O QUE MAIS GOSTOU NO PROGRAMA":`}</p>
          <textarea
            className={styles.textareaClass}
            name="question3"
            value={formData.question3}
            onChange={handleChangeQuestion3}
          />
        </label>

        {/* Question 4 */}
        <label className={styles.labelClass}>
          AVALIAÇÃO DA QUESTÃO 4
          <p>
            {`A resposta do aluno(a): "EXISTE ALGO NO PROGRAMA 
          DE EDUCAÇÃO PARA A PAZ QUE PODERIA SER MELHORADO?"`}
          </p>
          <textarea
            className={styles.textareaClass}
            name="question4"
            value={formData.question4}
            onChange={handleChangeQuestion4}
          />
        </label>

        {/* Question 6 */}
        <label className={styles.labelClass}>
          AVALIAÇÃO DA QUESTÃO 6
          <p>
            {`Qual a resposta do(a) aluno(a): 
          "JUSTIFIQUE A RESPOSTA DA QUESTÃO 5 (O Programa ajudou em sua vida?)`}
          </p>
          <textarea
            className={styles.textareaClass}
            name="question6"
            value={formData.question6}
            onChange={handleChangeQuestion6}
          />
        </label>

        {/* Question 7 */}
        <label className={styles.labelClass} htmlFor="question7">
          QUESTÃO 7: Quantos anos você tem?
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="question7"
                value="Até 35 anos"
                onChange={handleChangeQuestion7}
              />
              Até 35 anos
            </label>
            <label>
              <input
                type="radio"
                name="question7"
                value="36 a 55 anos"
                onChange={handleChangeQuestion7}
              />
              36 a 55 anos
            </label>
            <label>
              <input
                type="radio"
                name="question7"
                value="Mais de 55"
                onChange={handleChangeQuestion7}
              />
              Mais de 55
            </label>
          </div>
        </label>

        {/* Question 8 */}
        <label className={styles.labelClass} htmlFor="question8">
          QUESTÃO 8: Você é?
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="question8"
                value="Masculino"
                onChange={handleChangeQuestion8}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                name="question8"
                value="Feminino"
                onChange={handleChangeQuestion8}
              />
              Feminino
            </label>
            <label>
              <input
                type="radio"
                name="question8"
                value="Outros"
                onChange={handleChangeQuestion8}
              />
              Outros
            </label>
            <label>
              <input
                type="radio"
                name="question8"
                value="Não Sei"
                onChange={handleChangeQuestion8}
              />
              Não Sei
            </label>
          </div>
        </label>

        {/* Question 9 */}
        <label className={styles.labelClass} htmlFor="question9">
          QUESTÃO 9: Qual o seu grau de instrução?
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="question9"
                value="Ensino Fundamental Incompleto"
                onChange={handleChangeQuestion9}
              />
              Ensino Fundamental Incompleto
            </label>
            <label>
              <input
                type="radio"
                name="question9"
                value="Ensino Fundamental Completo"
                onChange={handleChangeQuestion9}
              />
              Ensino Fundamental Completo
            </label>
            <label>
              <input
                type="radio"
                name="question9"
                value="Ensino Médio Incompleto"
                onChange={handleChangeQuestion9}
              />
              Ensino Médio Incompleto
            </label>
            <label>
              <input
                type="radio"
                name="question9"
                value="Ensino Médio Completo"
                onChange={handleChangeQuestion9}
              />
              Ensino Médio Completo
            </label>
            <label>
              <input
                type="radio"
                name="question9"
                value="Ensino Superior Incompleto"
                onChange={handleChangeQuestion9}
              />
              Ensino Superior Incompleto
            </label>
            <label>
              <input
                type="radio"
                name="question9"
                value="Ensino Superior Completo"
                onChange={handleChangeQuestion9}
              />
              Ensino Superior Completo
            </label>
            <label>
              <input
                type="radio"
                name="question9"
                value="Não Consta"
                onChange={handleChangeQuestion9}
              />
              Não Consta
            </label>
          </div>
        </label>

        {/* Question 10 */}
        <label className={styles.labelClass}>
          AVALIAÇÃO DA QUESTÃO 10
          <p>
            {`O que o(a) aluno(a) aprendeu 
          no curso e quer levar para o resto da vida?`}
          </p>
          <textarea
            className={styles.textareaClass}
            name="question10"
            value={formData.question10}
            onChange={handleChangeQuestion10}
          />
        </label>

        {/* Perception */}
        <label className={styles.labelClass}>
          CONCLUSÃO DO AVALIADOR
          <p>Descreva sua percepção sobre o desenvolvimento do aluno:</p>
          <textarea
            className={styles.textareaClass}
            name="perception"
            value={formData.perception}
            onChange={handleChangeQuestion11}
          />
        </label>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      <button onClick={onClose}>Fechar</button>
    </>
  );
};

FormularioAvaliacao.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default FormularioAvaliacao;
