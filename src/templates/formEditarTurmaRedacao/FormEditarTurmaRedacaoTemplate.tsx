import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import useGetBookClassFromId from "../../hooks/useGetBookClassFromId";
import usePutBookClass from "../../hooks/usePutBookClass";

import ButtonDownloadRelatorios from "./components/ButtonDownloadRelatorios";
import BtnSubmit from "./components/ButtonSalavarAlteracoes";
import ItemTurma from "./components/ItemTurma";
import { BookClass } from "./schema";

import style from "./styles/FormEditarTurmaRedacaoTemplate.module.css";

/* eslint-disable max-lines */

interface props {
  initialData: BookClass;
  viewOnly: boolean;
}

export default function FormularioEditarTurmaRedacaoTemplate({
  initialData,
  viewOnly,
}: props) {
  const [formData, setFormData] = useState<BookClass>(initialData);

  const novaData = "Insira nova data aqui";
  const novoNumero = "Insira novo nº aqui";

  const {
    data: responseData,
    isSuccess,
    isError,
    isLoading,
  } = useGetBookClassFromId(initialData.idclass.toString());
  const {
    mutate: mutatePutBookEval,
    isSuccess: isMutateSuccess,
    data: mutateResponseData,
  } = usePutBookClass();

  useEffect(() => {
    if (responseData && isSuccess) {
      setFormData(responseData);
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
    const formDataToSend = { ...formData } as { [key: string]: any };

    // eslint-disable-next-line no-restricted-syntax
    for (const key in formDataToSend) {
      if (formDataToSend[key] === null) {
        formDataToSend[key] = "";
      }
    }

    delete formDataToSend.idclass;
    delete formDataToSend.idvol;
    delete formDataToSend.place;
    delete formDataToSend.bookEvaluations;

    formDataToSend.parec =
      formDataToSend.parec == null ? "" : formDataToSend.parec;
    formDataToSend.folderLink =
      formDataToSend.folderLink == null ? "" : formDataToSend.folderLink;

    mutatePutBookEval({
      data: formDataToSend as any,
      bookClassId: formData.idclass.toString(),
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: keyof BookClass
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
              <div className={style.containerHeaderLocalization}>
                <h1 className={style.localizacaoTitulo}>
                  {formData.place.fullName}
                </h1>
                <p className={style.subtitulo}>
                  Aqui você consegue alterar as informações desta turma
                </p>
                <ButtonDownloadRelatorios
                  bookClassId={formData.idclass.toString()}
                />
              </div>
            </div>

            <div className={style.noEdit}>
              <p>
                Nome do voluntário: <span>{formData.parec}</span>
              </p>
              <p>
                Id do voluntário: <span>{formData.idvol}</span>
              </p>
              <p>
                ID da Turma: <span>{formData.idclass}</span>
              </p>
              <p>
                Número da Unidade prisional: <span>{formData.place.id}</span>
              </p>
            </div>
            <ItemTurma
              inputType="input"
              label="Recibo dos relatórios"
              value={formData.reportReceiveDate}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "reportReceiveDate")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Empréstimo"
              value={formData.loanDate}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "loanDate")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Devolução dos livros"
              value={formData.returnDate}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "returnDate")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Elaboração dos relatórios"
              value={formData.reportElaborationDate}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "reportElaborationDate")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Relatórios da lista de presença"
              value={formData.presenceList}
              placeholder={novoNumero}
              onChange={(e) => handleChange(e, "presenceList")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Relatórios enviados"
              value={formData.qrl}
              placeholder={novoNumero}
              onChange={(e) => handleChange(e, "qrl")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Reserva do voluntário"
              value={formData.sendDateParec}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "sendDateParec")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Finalização da turma"
              value={formData.endEvaluationDate}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "endEvaluationDate")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="input"
              label="Devolução para FUNAP"
              value={formData.sendDateFunap}
              placeholder={novaData}
              onChange={(e) => handleChange(e, "sendDateFunap")}
              viewOnly={viewOnly}
            />
            <ItemTurma
              inputType="link"
              label="Link da pasta"
              value={formData.folderLink}
              placeholder="Insira o link da pasta"
              onChange={(e) => handleChange(e, "folderLink")}
              viewOnly
            />
            {!viewOnly && <BtnSubmit onClick={handleSubmit} />}
          </section>
        </main>
      )}
    </>
  );
}
