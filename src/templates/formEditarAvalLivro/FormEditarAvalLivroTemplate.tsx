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
  viewOnly: boolean;
}

export default function FormEditarAvalLivroTemplate({
  initialData,
  evaluationId,
  viewOnly,
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
              label="Matrícula do leitor"
              value={formData.readerRegistration}
              placeholder="Insira a matrícula"
              onChange={(event) => handleChange(event, "readerRegistration")}
              viewOnly={viewOnly}
            />
            <div className={style.noEdit}>
              <p>
                ID do voluntário: <span>{formData.evaluatorId}</span> Nome do
                leitor: <span>{formData.readerName}</span>
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
              inputType="selectbox"
              label="Estética"
              value={formData.textAestheticsAvaliation}
              placeholder="Insira a estética"
              onChange={(event) =>
                handleChange(event, "textAestheticsAvaliation")}
              viewOnly={viewOnly}
              options={["VALIDADO", "NAO VALIDADO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Dignidade"
              value={formData.textReliabilityAvaliation}
              placeholder="Insira a dignidade"
              onChange={(event) =>
                handleChange(event, "textReliabilityAvaliation")}
              viewOnly={viewOnly}
              options={["VALIDADO", "NAO VALIDADO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Clareza"
              value={formData.textClarityAvaliation}
              placeholder="Insira a clareza"
              onChange={(event) => handleChange(event, "textClarityAvaliation")}
              viewOnly={viewOnly}
              options={["VALIDADO", "NAO VALIDADO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Plágio"
              value={formData.isAppropriation}
              placeholder="Insira o plágio"
              onChange={(event) => handleChange(event, "isAppropriation")}
              viewOnly={viewOnly}
              options={["true", "false"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Plágio parcial"
              value={formData.isParcialPlagiarism}
              placeholder="Insira o plágio parcial"
              onChange={(event) => handleChange(event, "isParcialPlagiarism")}
              viewOnly={viewOnly}
              options={["true", "false"]}
            />
            <ItemTurma
              inputType="textarea"
              label="Observação"
              value={formData.observations}
              placeholder="Insira a observação"
              onChange={(event) => handleChange(event, "observations")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="selectbox"
              label="Conceito"
              value={formData.concept}
              placeholder="Insira o conceito"
              onChange={(event) => handleChange(event, "concept")}
              viewOnly={viewOnly}
              options={[
                "RELATÓRIO DE LEITURA VALIDADO",
                "RELATÓRIO DE LEITURA NÃO VALIDADO",
              ]}
            />
            <ItemTurma
              inputType="textarea"
              label="Opnião"
              value={formData.bookCriticalAnalysisAvaliation}
              placeholder="Insira a opnião"
              onChange={(event) =>
                handleChange(event, "bookCriticalAnalysisAvaliation")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Sociedade"
              value={formData.societyCriticalAnalysisAvaliation}
              placeholder="Insira a sociedade"
              onChange={(event) =>
                handleChange(event, "societyCriticalAnalysisAvaliation")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Relevantes"
              value={formData.relevantPhrases}
              placeholder="Insira os relevantes"
              onChange={(event) => handleChange(event, "relevantPhrases")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Redação"
              value={formData.syntheticAvaliation}
              placeholder="Insira a redação"
              onChange={(event) => handleChange(event, "syntheticAvaliation")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Português"
              value={formData.grammarAvaliation}
              placeholder="Insira o português"
              onChange={(event) => handleChange(event, "grammarAvaliation")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="Histórias lidas"
              value={formData.readHistories.join("\n")}
              placeholder="Insira as história lidas separadas por 'enter'"
              onChange={(event) => handleChange(event, "readHistories")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="textarea"
              label="História observada"
              value={formData.observedHistories}
              placeholder="Insira a história observada"
              onChange={(event) => handleChange(event, "observedHistories")}
              viewOnly={viewOnly}
            />
            {!viewOnly && <BtnSubmit onClick={handleSubmit} />}
          </section>
        </main>
      )}
    </>
  );
}
