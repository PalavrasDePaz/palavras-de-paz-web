import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import HeaderForm from "../../components/headerForm/HeaderForm";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetNotebookById from "../../hooks/useGetNotebookById";
import usePutNotebookEditEvalForm from "../../hooks/usePutNotebookEditEvalForm";
import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import BtnDownload from "./ButtonDownloadRelatorios";
import { NotebookEval } from "./schema";

import style from "./styles/FormEditarAvalCadernoTemplate.module.css";

/* eslint-disable max-lines */

interface props {
  initialData: NotebookEval;
  evaluationId: number;
  viewOnly: boolean;
}

export default function FormEditarAvalCadernoTemplate({
  initialData,
  evaluationId,
  viewOnly,
}: props) {
  const [formData, setFormData] = useState<NotebookEval>(initialData);

  const {
    data: responseData,
    isSuccess,
    isLoading,
    isError,
  } = useGetNotebookById(evaluationId.toString());
  const {
    mutate: mutatePutBookEval,
    isSuccess: isMutateSuccess,
    data: mutateResponseData,
  } = usePutNotebookEditEvalForm();

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
    delete formDataToSend.fullName;
    mutatePutBookEval({
      data: formDataToSend,
      notebookEvalId: evaluationId.toString(),
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof NotebookEval
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
              <BtnDownload notebookId={String(formData.id ?? "")} />
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
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 1:"
              value={formData.a1}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a1")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 2:"
              value={formData.a2}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a2")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 3:"
              value={formData.a3}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a3")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 4:"
              value={formData.a4}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a4")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 5:"
              value={formData.a5}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a5")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 6:"
              value={formData.a6}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a6")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 7:"
              value={formData.a7}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a7")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 8:"
              value={formData.a8}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a8")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 9:"
              value={formData.a9}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a9")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 10:"
              value={formData.a10}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a10")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 11:"
              value={formData.a11}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a11")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 12:"
              value={formData.a12}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a12")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Avaliação da Questão 13:"
              value={formData.a13}
              placeholder="Insira a avaliação"
              onChange={(event) => handleChange(event, "a13")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 1:"
              value={formData.subject1}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "a13")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 2:"
              value={formData.subject2}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject2")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 3:"
              value={formData.subject3}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject3")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 4:"
              value={formData.subject4}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject4")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 5:"
              value={formData.subject5}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject5")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 6:"
              value={formData.subject6}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject6")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 7:"
              value={formData.subject7}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject7")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 8:"
              value={formData.subject8}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject8")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 9:"
              value={formData.subject9}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject9")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Questão 10:"
              value={formData.subject10}
              placeholder="Insira a resposta"
              onChange={(event) => handleChange(event, "subject10")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Conclusão do avaliador"
              value={formData.conclusion}
              placeholder="Insira a conclusão do avaliador"
              onChange={(event) => handleChange(event, "conclusion")}
              viewOnly={viewOnly}
            />

            <BtnSubmit onClick={handleSubmit} />
          </section>
        </main>
      )}
    </>
  );
}
