import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ButtonSendForm from "../../components/buttonSendForm/ButtonSendForm";
import HeaderForm from "../../components/headerForm/HeaderForm";
import useGetUser from "../../hooks/useGetUser";
/* import usePutNotebookEvalForm from "../../hooks/usePutNotebookEvalForm"; */
import useUserEmail from "../../hooks/useUserEmail";

import Question1 from "./components/Question1";
import StudentInfoInput from "./components/StudentInfoInput";

import styles from "./styles/FormularioAvaliacaoRedacao.module.css";

interface FormularioAvaliacaoCadernoProps {
  onClose: () => void;
}

const FormAvalRedacaoTemplate: React.FC<
  FormularioAvaliacaoCadernoProps
> = () => {
  const router = useRouter();

  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);

  const { idClass } = router.query;

  const onCloseForm = () => {
    setTimeout(() => {
      window.location.href = "/area-de-trabalho";
    }, 1);
  };

  const [formData, setFormData] = useState({
    readerName: user?.name,
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

  useEffect(() => {
    const data = localStorage.getItem("form")
      ? JSON.parse(localStorage.getItem("form") || "null")
      : null;
    if (data) {
      setFormData(data);
    }
    localStorage.setItem("form", JSON.stringify(formData));
  }, []);

  const handleChangeQuestions = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <input type="text" name="studentName" />
            <div>
              <StudentInfoInput
                label="Matrícula do leitor*"
                type="text"
                value={user?.idvol}
                name="studentId"
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
          <ButtonSendForm onClick={() => handleSubmit} text="Enviar" />
        </form>
      </main>
    </>
  );
};

export default FormAvalRedacaoTemplate;
