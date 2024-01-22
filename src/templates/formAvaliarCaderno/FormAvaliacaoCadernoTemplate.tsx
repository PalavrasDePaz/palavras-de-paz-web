import React, { useState } from "react";
import PropTypes from "prop-types";

import { optionsQuestion2 } from "../../helpers/avalQuestions";
import useGetUser from "../../hooks/useGetUser";
import useUserEmail from "../../hooks/useUserEmail";

import HeaderForm from "./components/HeaderForm";
import Question2Aval from "./components/Question2Aval";
import Question3Aval from "./components/Question3Aval";
import Question4Aval from "./components/Question4Aval";
import Question5Aval from "./components/Question5Aval";
import Question6Aval from "./components/Question6Aval";
import Question7Aval from "./components/Question7Aval";
import Question8Aval from "./components/Question8Aval";
import Question9Aval from "./components/Question9Aval";
import Question10Aval from "./components/Question10Aval";
import Question11Aval from "./components/Question11Aval";
import QuestionGroup from "./components/QuestionGroup";
import StudentInfoInput from "./components/StudentInfoInput";

import styles from "./styles/FormularioAvaliacaoCaderno.module.css";

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
    // onClose();
  };

  return (
    <>
      <HeaderForm />
      <header className={styles.headerContainer}>
        <h1>Formulário de Avaliação de Leitura - cadernos</h1>
      </header>
      <main className={styles.mainContainer}>
        <h2 className={styles.subtitle}>
          Realize a transcrição da avaliação do relatório de leitura concluida.
        </h2>
        <form onSubmit={handleSubmit}>
          <section className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Identificação</h3>
            <StudentInfoInput
              label="Nome do(a) aluno(a)*"
              type="text"
              value={formData.studentName}
              onChange={handleChangeName}
              name="studentName"
            />
            <div>
              <StudentInfoInput
                label="Matrícula do(a) aluno(a)*"
                type="number"
                value={formData.studentId}
                onChange={handleChangeName}
                name="studentId"
              />
              <StudentInfoInput
                label="Número da turma"
                type="number"
                value={formData.studentId}
                onChange={handleChangeName}
                name="classId"
              />
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Conteúdos Relevantes</h3>
            <label>
              Selecione um trecho onde se percebe o entendimento e a evolução do
              participante - em até 3 linhas
              <textarea
                name="perception"
                value={formData.relevantContent}
                onChange={handleChangeQuestionRelevant}
              />
              <p>Sua Resposta</p>
            </label>
          </section>
          {/* Question 1 */}
          <section className={styles.sectionContainer}>
            <QuestionGroup onChange={handleQuestionChange} />
          </section>
          {/* Question 2 */}
          <section className={styles.sectionContainer}>
            <Question2Aval
              options={optionsQuestion2}
              name="question2"
              onChange={handleChangeQuestion2}
            />
          </section>
          {/* Question 3 */}
          <section className={styles.sectionContainer}>
            <Question3Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          {/* Question 4 */}
          <section className={styles.sectionContainer}>
            <Question4Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          {/* Question 5 */}
          <section className={styles.sectionContainer}>
            <Question5Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          {/* Question 6 */}
          <section className={styles.sectionContainer}>
            <Question6Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          {/* Question 7 */}
          <section className={styles.sectionContainer}>
            <Question7Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            {/* Question 8 */}
            <Question8Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            {/* Question 8 */}
            <Question9Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            {/* Question 10 */}
            <Question10Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          <section className={styles.sectionContainer}>
            {/* Perception */}
            <Question11Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          {/* Submit Button */}
          <button>Enviar</button>
        </form>
      </main>
    </>
  );
};

FormAvalCadTemplate.propTypes = { onClose: PropTypes.func.isRequired };
export default FormAvalCadTemplate;
