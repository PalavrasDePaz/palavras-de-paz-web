/* eslint-disable max-lines */

import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetBookEvalForm from "../../hooks/useGetBookEval";
import usePutBookEvalForm from "../../hooks/usePutBookEvalForm";
import { CheckBoxType } from "../formAvaliarRedacao/types";
import BtnSubmit from "../formEditarTurmaRedacao/components/ButtonSalavarAlteracoes";
import ItemTurma from "../formEditarTurmaRedacao/components/ItemTurma";

import { BookEval } from "./schema";

import style from "./styles/FormEditarAvalLivro.module.css";

interface props {
  initialData: BookEval;
  evaluationId: number;
  volunteerName: string;
  viewOnly: boolean;
}

export default function FormEditarAvalLivroTemplate({
  initialData,
  evaluationId,
  volunteerName,
  viewOnly,
}: props) {
  const [formData, setFormData] = useState<BookEval>(initialData);
  const [readHistoriesState, setReadHistoriesState] = useState<string[]>([]);

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
    isError: mutateIsError,
    error: mutateError,
  } = usePutBookEvalForm();

  useEffect(() => {
    if (responseData && isSuccess) {
      setFormData(responseData.data);
      setReadHistoriesState(responseData.data.readHistories);
    }
  }, [responseData, isSuccess]);

  useEffect(() => {
    if (mutateResponseData && isMutateSuccess) {
      toast.success("Atualizado com sucesso!", {
        autoClose: 600,
      });
    } else if (mutateIsError && mutateError) {
      toast.error(String((mutateError as any).message), {
        autoClose: 600,
      });
    }
  }, [mutateResponseData, isMutateSuccess, mutateIsError, mutateError]);

  const handleSubmit = async () => {
    const formDataToSend = { ...formData } as Partial<BookEval>;
    delete formDataToSend.evaluatorId;
    delete formDataToSend.classId;
    delete formDataToSend.id;
    mutatePutBookEval({
      data: formDataToSend,
      evaluationId: evaluationId.toString(),
    });
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      readHistories: readHistoriesState,
    }));
  }, [readHistoriesState]);

  const toBoolean = (value: string) => value === "SIM";

  const formParserMap: Partial<
    Record<
      keyof BookEval,
      (value: string, checked?: boolean) => BookEval[keyof BookEval]
    >
  > = {
    isAppropriation: toBoolean,
    isParcialPlagiarism: toBoolean,
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof BookEval
  ) => {
    const { value } = event.target;

    if (fieldName === "readHistories") {
      const { checked } = event.target as HTMLInputElement;

      setReadHistoriesState((prevReadHistories) => {
        if (checked && !prevReadHistories.includes(value)) {
          return [...prevReadHistories, value];
        }
        if (!checked && prevReadHistories.includes(value)) {
          return [...prevReadHistories.filter((str) => str !== value)];
        }
        return [...prevReadHistories];
      });
    } else {
      const parser = formParserMap[fieldName];

      setFormData((prevFormData) => {
        const newData = {
          ...prevFormData,
          [fieldName]: parser ? parser(value) : value,
        };
        return newData;
      });
    }
  };

  function resetDates() {
    setFormData((prev) => ({
      ...prev,
      createdAt: null,
    }));
  }

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
          <section>
            <div className={style.noEdit}>
              <p>
                ID do voluntário: <span>{formData.evaluatorId}</span>
              </p>
              <p>
                Nome do voluntário: <span>{volunteerName}</span>
              </p>
            </div>
            <ItemTurma
              inputType="input"
              label="Matrícula do leitor"
              value={formData.readerRegistration}
              placeholder="Insira a matrícula"
              onChange={(event) => handleChange(event, "readerRegistration")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Nome do leitor"
              value={formData.readerName}
              placeholder="Insira a matrícula"
              onChange={(event) => handleChange(event, "readerName")}
              viewOnly={viewOnly}
            />
            <div className={style.noEdit}>
              <p>
                Número da turma: <span>{formData.classId}</span>
              </p>
              <p>
                Carimbo de data/hora:
                <span>
                  {formData.createdAt &&
                    new Date(formData.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <button className={style.resetEvalButton} onClick={resetDates}>
              Resetar datas
            </button>
            <ItemTurma
              inputType="selectbox"
              label="Estética"
              value={formData.textAestheticsAvaliation}
              placeholder="Insira a estética"
              onChange={(event) =>
                handleChange(event, "textAestheticsAvaliation")}
              viewOnly={viewOnly}
              options={["VALIDADO", "NÃO VALIDADO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Fidedignidade"
              value={formData.textReliabilityAvaliation}
              placeholder="Insira a fidedignidade"
              onChange={(event) =>
                handleChange(event, "textReliabilityAvaliation")}
              viewOnly={viewOnly}
              options={["VALIDADO", "NÃO VALIDADO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Clareza"
              value={formData.textClarityAvaliation}
              placeholder="Insira a clareza"
              onChange={(event) => handleChange(event, "textClarityAvaliation")}
              viewOnly={viewOnly}
              options={["VALIDADO", "NÃO VALIDADO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Apropriação indevida do Texto"
              value={formData.isAppropriation ? "SIM" : "NÃO"}
              placeholder="Insira se houve apropriação indevida do Texto"
              onChange={(event) => handleChange(event, "isAppropriation")}
              viewOnly={viewOnly}
              options={["SIM", "NÃO"]}
            />
            <ItemTurma
              inputType="selectbox"
              label="Plágio parcial"
              value={formData.isParcialPlagiarism ? "SIM" : "NÃO"}
              placeholder="Insira houve plágio parcial"
              onChange={(event) => handleChange(event, "isParcialPlagiarism")}
              viewOnly={viewOnly}
              options={["SIM", "NÃO"]}
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
              label="Frases relevantes"
              value={formData.relevantPhrases}
              placeholder="Insira os relevantes"
              onChange={(event) => handleChange(event, "relevantPhrases")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="selectboxes"
              label="Histórias lidas"
              placeholder="Selecione as histórias lidas"
              onChange={(event) => handleChange(event, "readHistories")}
              viewOnly={viewOnly}
              options={CheckBoxType}
              values={readHistoriesState}
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
