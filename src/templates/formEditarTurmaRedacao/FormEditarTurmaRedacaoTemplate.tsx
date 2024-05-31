import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

import HeaderForm from "../../components/headerForm/HeaderForm";
import useGetBookClassFromId from "../../hooks/useGetBookClassFromId";
import usePutBookClass from "../../hooks/usePutBookClass";

import ButtonDownloadRelatorios from "./components/ButtonDownloadRelatorios";
import BtnSubmit from "./components/ButtonSalavarAlteracoes";
import ItemTurma from "./components/ItemTurma";
import { BookClass } from "./schema";

import style from "./styles/FormEditarTurmaRedacaoTemplate.module.css";

/* eslint-disable max-lines */

const initialData: BookClass = {
  idclass: 0,
  reportReceiveDate: "",
  loanDate: "",
  returnDate: "",
  reportElaborationDate: "",
  received: "",
  yesList: "",
  presenceList: 0,
  qrl: 0,
  sendDateParec: "",
  presSedex: "",
  sendDateFunap: "",
  presSedex2: "",
  endEvaluationDate: "",
  parec: "",
  idvol: 0,
  folderLink: "",
  place: {
    closed: 0,
    sex: "",
    addr: "",
    mode: "",
    coord: "",
    fullName: "",
    id: 0,
  },
  bookEvaluations: [],
};

export default function FormularioEditarTurmaRedacaoTemplate() {
  const [formData, setFormData] = useState<BookClass>(initialData);

  const [classId, setClassId] = useState<string | null>(null);

  const novaData = "Insira nova data aqui";
  const novoNumero = "Insira novo nº aqui";

  const { data: responseData, isSuccess } = useGetBookClassFromId(classId);
  const {
    mutate: mutatePutBookEval,
    isSuccess: isMutateSuccess,
    data: mutateResponseData,
  } = usePutBookClass();

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    setClassId(queryParameters.get("classId"));
  }, []);

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

    mutatePutBookEval({ data: formDataToSend as any, bookClassId: classId });
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
      <HeaderForm />
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
              <ButtonDownloadRelatorios />
            </div>
          </div>

          <h5 className={style.h5}>Voluntário que avaliou:</h5>
          <div className={style.noEdit}>
            <p>
              Nome: <span>{formData.parec}</span>
            </p>
            <p>
              Id: <span>{formData.idvol}</span>
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
          />
          <ItemTurma
            inputType="input"
            label="Empréstimo"
            value={formData.loanDate}
            placeholder={novaData}
            onChange={(e) => handleChange(e, "loanDate")}
          />
          <ItemTurma
            inputType="input"
            label="Devolução dos livros"
            value={formData.returnDate}
            placeholder={novaData}
            onChange={(e) => handleChange(e, "returnDate")}
          />
          <ItemTurma
            inputType="input"
            label="Elaboração dos relatórios"
            value={formData.reportElaborationDate}
            placeholder={novaData}
            onChange={(e) => handleChange(e, "reportElaborationDate")}
          />
          <ItemTurma
            inputType="input"
            label="Relatórios lista de presença"
            value={formData.presenceList}
            placeholder={novoNumero}
            onChange={(e) => handleChange(e, "presenceList")}
          />
          <ItemTurma
            inputType="input"
            label="Relatórios enviados"
            value={formData.qrl}
            placeholder={novoNumero}
            onChange={(e) => handleChange(e, "qrl")}
          />
          <ItemTurma
            inputType="input"
            label="Reserva dos voluntários"
            value={formData.sendDateParec}
            placeholder={novaData}
            onChange={(e) => handleChange(e, "sendDateParec")}
          />
          <ItemTurma
            inputType="input"
            label="Finalização da turma"
            value={formData.endEvaluationDate}
            placeholder={novaData}
            onChange={(e) => handleChange(e, "endEvaluationDate")}
          />
          <ItemTurma
            inputType="input"
            label="Devolução para FUNAP"
            value={formData.sendDateFunap}
            placeholder={novaData}
            onChange={(e) => handleChange(e, "sendDateFunap")}
          />
          <BtnSubmit onClick={handleSubmit} />
        </section>
      </main>
    </>
  );
}
