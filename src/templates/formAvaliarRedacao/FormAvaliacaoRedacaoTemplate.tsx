import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ButtonSendForm from "../../components/buttonSendForm/ButtonSendForm";
import HeaderForm from "../../components/headerForm/HeaderForm";
import useGetUser from "../../hooks/useGetUser";
import usePostBookEvalForm from "../../hooks/usePostBookEvaluations";
/* import usePutNotebookEvalForm from "../../hooks/usePutNotebookEvalForm"; */
import useUserEmail from "../../hooks/useUserEmail";

import Question1 from "./components/Question1";
import Question2Container from "./components/Question2Container";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Question7 from "./components/Question7";
import StudentInfoInput from "./components/StudentInfoInput";

import styles from "./styles/FormularioAvaliacaoRedacao.module.css";

interface FormularioAvaliacaoCadernoProps {
  onClose: () => void;
}

const FormAvalRedacaoTemplate: React.FC<
  FormularioAvaliacaoCadernoProps
> = () => {
  const router = useRouter();

  const { mutate: mutateEvalForm } = usePostBookEvalForm();

  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);

  const { idClass } = router.query;

  const onCloseForm = () => {
    setTimeout(() => {
      router.push("/area-de-trabalho");
    }, 1);
  };

  const [formData, setFormData] = useState({
    readerName: "",
    readerRegistration: "",
    classId: idClass,
    evaluatorId: user?.idvol,
    isParcialPlagiarism: true,
    isAppropriation: true,
    textAestheticsAvaliation: "",
    textReliabilityAvaliation: "",
    textClarityAvaliation: "",
    bookCriticalAnalysisAvaliation: "",
    societyCriticalAnalysisAvaliation: "",
    grammarAvaliation: "",
    syntheticAvaliation: "",
    observations: "",
    concept: "",
    relevantPhrases: "",
    readHistories: [""],
    observedHistories: "",
  });

  const [readHistoriesState, setReadHistoriesState] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("form")
      ? JSON.parse(localStorage.getItem("form") || "null")
      : null;
    if (data) {
      setFormData(data);
    }
    localStorage.setItem("form", JSON.stringify(formData));
  }, []);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      readHistories: readHistoriesState,
    }));
  }, [readHistoriesState]);

  const handleChangeQuestions = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (value === "Sim") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: true,
      }));
    } else if (value === "Não") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: false,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleChangeCheckboxes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    if (readHistoriesState.some((history) => history === id)) {
      setReadHistoriesState(
        readHistoriesState.filter((history) => history !== id)
      );
    } else {
      setReadHistoriesState([...readHistoriesState, id]);
    }
    setFormData((prevData) => ({
      ...prevData,
      readHistories: readHistoriesState,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateEvalForm({
      data: {
        ...formData,
        readerRegistration: Number(formData.readerRegistration),
        classId: Number(idClass),
        evaluatorId: Number(user?.idvol),
      },
    });
    onCloseForm();
  };

  return (
    <>
      <HeaderForm />
      <header className={styles.headerContainer}>
        <h1>Formulário de Avaliação de leitura - livros</h1>
      </header>
      <main className={styles.mainContainer}>
        <h2 className={styles.subtitle}>
          Realize a transcrição da avaliação do relatório de leitura concluída.
        </h2>
        <form onSubmit={handleSubmit}>
          <section className={styles.sectionContainer}>
            <h3 className={styles.sectionTitle}>Identificação</h3>
            <StudentInfoInput
              label=""
              type="text"
              onChange={(e) => {
                handleChangeQuestions(e);
              }}
              value={formData.readerName}
              name="readerName"
            />
            <div>
              <StudentInfoInput
                label="Matrícula do leitor*"
                type="text"
                onChange={(e) => {
                  handleChangeQuestions(e);
                }}
                value={formData.readerRegistration}
                name="readerRegistration"
              />
              <StudentInfoInput
                label="Número da turma"
                type="text"
                value={idClass}
                name="classId"
              />
            </div>
          </section>
          <section className={styles.sectionContainer}>
            <Question1 handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question2Container handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question3 handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question4 handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question5 handleChangeQuestions={handleChangeQuestions} />
          </section>
          <section className={styles.sectionContainer}>
            <Question6 handleChangeQuestions={handleChangeCheckboxes} />
          </section>
          <section className={styles.sectionContainer}>
            <Question7 handleChangeQuestions={handleChangeQuestions} />
          </section>
          <ButtonSendForm onClick={() => handleSubmit} text="Enviar" />
        </form>
      </main>
    </>
  );
};

export default FormAvalRedacaoTemplate;
