import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ButtonSendForm from "../../components/buttonSendForm/ButtonSendForm";
import HeaderForm from "../../components/headerForm/HeaderForm";
import useGetUser from "../../hooks/useGetUser";
import usePutNotebookEvalForm from "../../hooks/usePutNotebookEvalForm";
import useUserEmail from "../../hooks/useUserEmail";

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
import { INITIALSTATE } from "./types";

import styles from "./styles/FormularioAvaliacaoCaderno.module.css";

interface FormularioAvaliacaoCadernoProps {
  onClose: () => void;
}

const FormAvalCadTemplate: React.FC<FormularioAvaliacaoCadernoProps> = ({
  onClose,
}) => {
  const router = useRouter();

  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);

  const { studentName, studentId, classId, notebookId, reservationDate } =
    router.query;

  const onCloseForm = () => {
    setTimeout(() => {
      router.push("/area-de-trabalho");
    }, 1);
  };

  const [formData, setFormData] = useState({
    ...INITIALSTATE,
    volunteerId: user?.idvol,
    email: user?.email,
    studentName,
    studentId,
    classId,
  });

  useEffect(() => {
    const data = localStorage.getItem("form")
      ? JSON.parse(localStorage.getItem("form") || "null")
      : null;
    if (data) {
      setFormData(data);
    }
    localStorage.setItem("form", JSON.stringify(formData));
  }, []);

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

  const { mutate: mutateEvalForm } = usePutNotebookEvalForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateEvalForm({
      data: {
        reservationDate: new Date(
          (reservationDate && reservationDate.toString()) || "2000-01-01"
        ),
        evaluatedDate: new Date(),
        subject1: formData.question1.question1.value,
        subject2: formData.question1.question2.value,
        subject3: formData.question1.question3.value,
        subject4: formData.question1.question4.value,
        subject5: formData.question1.question5.value,
        subject6: formData.question1.question6.value,
        subject7: formData.question1.question7.value,
        subject8: formData.question1.question8.value,
        subject9: formData.question1.question9.value,
        subject10: formData.question1.question10.value,
        relevantContent: formData.relevantContent,
        a1: formData.question2,
        a2: formData.question3,
        a3: formData.question4,
        a4: formData.question6,
        a5: formData.question7,
        a6: formData.question8,
        a7: formData.question10,
        a8: formData.question9,
        a9: "",
        a10: "",
        a11: "",
        a12: "",
        a13: "",
        conclusion: formData.perception,
        approved: true,
        archivesExclusion: true,
      },
      notebookId: notebookId as string,
    });
    onCloseForm();
  };

  return (
    <>
      <HeaderForm />
      <header className={styles.headerContainer}>
        <h1>AVALIAÇÃO DE CADERNOS CEP/FUNAP/SATPR</h1>
      </header>
      <main className={styles.mainContainer}>
        <h2 className={styles.subtitle}>
          Leitura de Cadernos dos Alunos do Projeto CEP/FUNAP/SATPR
        </h2>
        <form onSubmit={handleSubmit}>
          <section className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Identificação</h3>
            <StudentInfoInput
              label="Nome do(a) aluno(a)*"
              type="text"
              value={formData.studentName}
              name="studentName"
            />
            <div>
              <StudentInfoInput
                label="Matrícula do(a) aluno(a)*"
                type="text"
                value={formData.studentId}
                name="studentId"
              />
              <StudentInfoInput
                label="Número da turma"
                type="text"
                value={formData.classId}
                name="classId"
              />
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Conteúdos Relevantes</h3>
            <label className={styles.label}>
              Selecione um trecho onde se percebe o entendimento e a evolução do
              participante - em até 3 linhas
              <textarea
                rows={5}
                className={styles.input}
                name="perception"
                value={formData.relevantContent}
                onChange={handleChangeQuestionRelevant}
              />
            </label>
          </section>
          <section className={styles.sectionContainer}>
            <QuestionGroup onChange={handleQuestionChange} />
          </section>
          <section className={styles.sectionContainer}>
            <Question2Aval name="question2" onChange={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question3Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          <section className={styles.sectionContainer}>
            <Question4Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          <section className={styles.sectionContainer}>
            <Question5Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question6Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          <section className={styles.sectionContainer}>
            <Question7Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question8Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question9Aval handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question10Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          <section className={styles.sectionContainer}>
            <Question11Aval
              handleChangeQuestions={handleChangeQuestions}
              formData={formData}
            />
          </section>
          <ButtonSendForm onClick={() => handleSubmit} text="Enviar" />
        </form>
      </main>
    </>
  );
};

export default FormAvalCadTemplate;
