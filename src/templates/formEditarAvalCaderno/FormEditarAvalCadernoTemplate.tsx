import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import HeaderForm from "../../components/headerForm/HeaderForm";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetNotebookById from "../../hooks/useGetNotebookById";
import usePutNotebookEditEvalForm from "../../hooks/usePutNotebookEditEvalForm";
import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import BtnDownload from "./ButtonDownloadRelatorios";
import { NotebookAval } from "./schema";

import style from "./styles/FormEditarAvalCadernoTemplate.module.css";

/* eslint-disable max-lines */

const initialData: NotebookAval = {
  idvol: 0,
  idpep: 0,
  idcad: 0,
  studentPrisonUnit: "",
  evaluatorName: "",
  evaluatorEmail: "",
  studentRegistration: 0,
  studentName: "",
  notebookDirectory: "",
  subject1: "",
  subject2: "",
  subject3: "",
  subject4: "",
  subject5: "",
  subject6: "",
  subject7: "",
  subject8: "",
  subject9: "",
  subject10: "",
  relevantContent: "",
  a1: "",
  a2: "",
  a3: "",
  a4: "",
  a5: "",
  a6: "",
  a7: "",
  a8: "",
  a9: "",
  a10: "",
  a11: "",
  a12: "",
  a13: "",
  conclusion: "",
  approved: false,
  archivesExclusion: false,
  reservationDate: "",
  evaluatedDate: "",
};

export default function FormEditarAvalCadernoTemplate() {
  const [formData, setFormData] = useState<NotebookAval>(initialData);

  const [notebookId, setNotebookId] = useState<string | null>(null);

  const {
    data: responseData,
    isSuccess,
    isLoading,
    isError,
  } = useGetNotebookById(notebookId);
  const {
    mutate: mutatePutBookEval,
    isSuccess: isMutateSuccess,
    data: mutateResponseData,
  } = usePutNotebookEditEvalForm();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    setNotebookId(queryParameters.get("notebookId"));
  }, []);

  useEffect(() => {
    if (responseData && isSuccess) {
      setFormData(responseData.data);
    }
  }, [responseData, isSuccess]);

  useEffect(() => {
    if (mutateResponseData && isMutateSuccess) {
      toast.success("Atualizado com sucesso!", {
        autoClose: 600,
      });
    }
  }, [mutateResponseData, isMutateSuccess]);

  const handleSubmit = () => {
    const formDataToSend = { ...formData } as any;
    delete formDataToSend.idpep;
    delete formDataToSend.idcad;
    delete formDataToSend.studentRegistration;
    delete formDataToSend.studentName;
    delete formDataToSend.notebookDirectory;
    delete formDataToSend.reservationDate;
    delete formDataToSend.evaluatedDate;
    mutatePutBookEval({ data: formDataToSend, notebookId });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof NotebookAval
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newData = {
        ...prevFormData,
        [fieldName]: value,
      };
      return newData;
    });
  };

  return (
    <>
      {isError && <p>Erro ao carregar os dados</p>}
      {isLoading && (
        <div className={style.loadingSpinnerContainer}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && !isError && (
        <>
          <HeaderForm />
          <main className={style.container}>
            <section key={formData.idvol}>
              <div className={style.containerHeader}>
                <div className={style.containerHeaderStudentName}>
                  <h1 className={style.localizacaoTitulo}>
                    {formData.studentName}
                  </h1>
                  <p className={style.subtitulo}>
                    Aqui você consegue alterar as informações desta turma
                  </p>
                </div>
                <BtnDownload notebookId={formData.id?.toString() || ""} />
              </div>

              <div className={style.noEdit}>
                <p>
                  Matrícula: <span>{formData.studentRegistration}</span>
                </p>
                <p>
                  Id: <span>{formData.idvol}</span>
                </p>
              </div>

              <ItemTurma
                inputType="textarea"
                label="Conteúdos relevantes"
                value={formData.relevantContent}
                placeholder="Insira os conteúdos relevantes"
                onChange={(event) => handleChange(event, "relevantContent")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 1:"
                value={formData.a1}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a1")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 2:"
                value={formData.a2}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a2")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 3:"
                value={formData.a3}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a3")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 4:"
                value={formData.a4}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a4")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 5:"
                value={formData.a5}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a5")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 6:"
                value={formData.a6}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a6")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 7:"
                value={formData.a7}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a7")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 8:"
                value={formData.a8}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a8")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 9:"
                value={formData.a9}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a9")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 10:"
                value={formData.a10}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a10")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 11:"
                value={formData.a11}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a11")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 12:"
                value={formData.a12}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a12")}
              />
              <ItemTurma
                inputType="textarea"
                label="Avaliação da Questão 13:"
                value={formData.a13}
                placeholder="Insira a avaliação"
                onChange={(event) => handleChange(event, "a13")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 1:"
                value={formData.subject1}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "a13")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 2:"
                value={formData.subject2}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject2")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 3:"
                value={formData.subject3}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject3")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 4:"
                value={formData.subject4}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject4")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 5:"
                value={formData.subject5}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject5")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 6:"
                value={formData.subject6}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject6")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 7:"
                value={formData.subject7}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject7")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 8:"
                value={formData.subject8}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject8")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 9:"
                value={formData.subject9}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject9")}
              />
              <ItemTurma
                inputType="textarea"
                label="Questão 10:"
                value={formData.subject10}
                placeholder="Insira a resposta"
                onChange={(event) => handleChange(event, "subject10")}
              />
              <ItemTurma
                inputType="textarea"
                label="Conclusão do avaliador"
                value={formData.conclusion}
                placeholder="Insira a conclusão do avaliador"
                onChange={(event) => handleChange(event, "conclusion")}
              />

              <BtnSubmit onClick={handleSubmit} />
            </section>
          </main>
        </>
      )}
    </>
  );
}
