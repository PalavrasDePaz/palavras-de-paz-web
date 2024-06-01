import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetBookEvalForm from "../../hooks/useGetBookEval";
import usePutBookEvalForm from "../../hooks/usePutBookEvalForm";
import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import { BookEval } from "./schema";

import style from "./styles/FormEditarAvalLivro.module.css";

interface props {
  initialData: BookEval;
  evaluationId: number;
}

export default function FormEditarAvalLivroTemplate({
  initialData,
  evaluationId,
}: props) {
  const [formData, setFormData] = useState<BookEval>(initialData);

  const {
    data: responseData,
    isSuccess,
    isError,
    isLoading,
  } = useGetBookEvalForm(evaluationId.toString());
  const {
    mutate: mutatePutBookEval,
    isSuccess: isMutateSuccess,
    data: mutateResponseData,
  } = usePutBookEvalForm();

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

  const handleSubmit = async () => {
    const formDataToSend = { ...formData } as any;
    delete formDataToSend.evaluatorId;
    delete formDataToSend.classId;
    delete formDataToSend.readerRegistration;
    delete formDataToSend.id;
    mutatePutBookEval({
      data: formDataToSend,
      evaluationId: evaluationId.toString(),
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof BookEval
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newData = {
        ...prevFormData,
        [fieldName]: fieldName === "readHistories" ? value.split("\n") : value,
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
          <section key={formData.readerRegistration}>
            <h1 className={style.localizacaoTitulo}>
              {formData.volunteerName}
            </h1>

            <ItemTurma
              inputType="input"
              label="Matrícula"
              value={formData.readerRegistration}
              placeholder="Insira a matrícula"
              onChange={(event) => handleChange(event, "readerRegistration")}
            />
            <div className={style.noEdit}>
              <p>
                ID do avaliador: <span>{formData.evaluatorId}</span> Nome:{" "}
                <span>{formData.readerName}</span>
              </p>
              <p>
                Número da turma: <span>{formData.classId}</span>
              </p>
              <p>
                Data e hora: <span>{formData.createdAt}</span>
              </p>
              <p>
                Data de validação: <span>{formData.expirationDate}</span>
              </p>
            </div>

            <ItemTurma
              inputType="textarea"
              label="Estética"
              value={formData.textAestheticsAvaliation}
              placeholder="Insira a estética"
              onChange={(event) =>
                  handleChange(event, "textAestheticsAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Dignidade"
              value={formData.textReliabilityAvaliation}
              placeholder="Insira a dignidade"
              onChange={(event) =>
                  handleChange(event, "textReliabilityAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Clareza"
              value={formData.textClarityAvaliation}
              placeholder="Insira a clareza"
              onChange={(event) =>
                  handleChange(event, "textClarityAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Plágio"
              value={formData.isAppropriation}
              placeholder="Insira o plágio"
              onChange={(event) => handleChange(event, "isAppropriation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Observação"
              value={formData.observations}
              placeholder="Insira a observação"
              onChange={(event) => handleChange(event, "observations")}
            />
            <ItemTurma
              inputType="textarea"
              label="Conceito"
              value={formData.concept}
              placeholder="Insira o conceito"
              onChange={(event) => handleChange(event, "concept")}
            />
            <ItemTurma
              inputType="textarea"
              label="Opnião"
              value={formData.bookCriticalAnalysisAvaliation}
              placeholder="Insira a opnião"
              onChange={(event) =>
                  handleChange(event, "bookCriticalAnalysisAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Sociedade"
              value={formData.societyCriticalAnalysisAvaliation}
              placeholder="Insira a sociedade"
              onChange={(event) =>
                  handleChange(event, "societyCriticalAnalysisAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Plágio parcial"
              value={formData.isParcialPlagiarism}
              placeholder="Insira o plágio parcial"
              onChange={(event) => handleChange(event, "isParcialPlagiarism")}
            />
            <ItemTurma
              inputType="textarea"
              label="Relevantes"
              value={formData.relevantPhrases}
              placeholder="Insira os relevantes"
              onChange={(event) => handleChange(event, "relevantPhrases")}
            />
            <ItemTurma
              inputType="textarea"
              label="Redação"
              value={formData.syntheticAvaliation}
              placeholder="Insira a redação"
              onChange={(event) => handleChange(event, "syntheticAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="Português"
              value={formData.grammarAvaliation}
              placeholder="Insira o português"
              onChange={(event) => handleChange(event, "grammarAvaliation")}
            />
            <ItemTurma
              inputType="textarea"
              label="História observação"
              value={formData.observedHistories}
              placeholder="Insira a história observação"
              onChange={(event) => handleChange(event, "observedHistories")}
            />
            <ItemTurma
              inputType="textarea"
              label="História relatório"
              value={formData.readHistories.join("\n")}
              placeholder="Insira a história relatório"
              onChange={(event) => handleChange(event, "readHistories")}
            />

            <BtnSubmit onClick={handleSubmit} />
          </section>
        </main>
      )}
    </>
  );
}
