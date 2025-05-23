import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

// import { useRouter } from "next/router";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
// import downloadZIP from "../../../helpers/getEssaysDownload";
import usePatchBookClubClass from "../../../hooks/usePatchBookClubClass";
import {
  putReservationData,
  putRevertReservationData,
  sortedEssayNotReserved,
  sortedEssayReserved,
} from "../helpers/Reservations";
import {
  ItemTurmaAvaliacaoProps,
  // OpenFormularioProps,
} from "../types/FormRedacaoType";
import { IEssays } from "../types/interfaces";

import BtnDownload from "./BtnDownload";
import FormButton from "./FormButton";

import styles from "../styles/AvaliarRedacoes.module.css";

function ItemTurmaAvaliacao({
  essaysIn,
  setEssaysIn,
  idclass,
  idvol,
  place,
  dateReserved,
  dateConcluded,
  reserved,
  folderLink,
}: ItemTurmaAvaliacaoProps) {
  // const router = useRouter();

  // const handleOpenFormulario = ({
  //   idClass,
  //   idVol,
  //   Place,
  //   DateReserved,
  //   DateConcluded,
  //   Reserved,
  // }: OpenFormularioProps) => {
  //   localStorage.removeItem("form");
  //   router.push({
  //     pathname: "/formulario-avaliacao-redacao",
  //     query: { idClass, idVol, Place, DateReserved, DateConcluded, Reserved },
  //   });
  // };

  const { mutate: mutateEvalForm } = usePatchBookClubClass();

  const naoReservado = "--/--/--";
  const preencher = "Preencher Formulário";

  const [check, setCheck] = useState(!!dateConcluded);

  const [dateConcludedState, setDateConcluded] = useState(() => {
    if (dateConcluded) {
      const date = new Date().toISOString();
      const dateBR = date.split("T")[0].split("-").reverse().join("/");
      return dateBR;
    }
    return naoReservado;
  });

  const updatedEssaysFunction = (classId: number, reserveFlag: boolean) =>
    essaysIn.map((essay: IEssays) => {
      if (essay.idclass === classId) {
        return {
          ...essay,
          reserved: reserveFlag,
        };
      }
      return essay;
    });

  const updatedEssaysIn = (updatedEssays: IEssays[]) => {
    const filterReserved = sortedEssayReserved(
      updatedEssays.filter((essay) => essay.reserved)
    );
    const filterNotReserved = sortedEssayNotReserved(
      updatedEssays.filter((essay) => !essay.reserved)
    );
    setEssaysIn([filterReserved, filterNotReserved].flat());
  };

  const handleReservation = async (volunteerId: number, classId: number) => {
    const updatedEssays = updatedEssaysFunction(classId, true);
    updatedEssaysIn(updatedEssays);
    await putReservationData(volunteerId, classId);
  };

  const handleRevertReservation = async (
    volunteerId: number,
    classId: number
  ) => {
    const updatedEssays = updatedEssaysFunction(classId, false);
    updatedEssaysIn(updatedEssays);
    await putRevertReservationData(volunteerId, classId);
  };

  const handleSubmitDate = async () => {
    if (!check) {
      const date = new Date().toISOString();
      const dateBR = date.split("T")[0].split("-").reverse().join("/");
      setDateConcluded(dateBR);
      mutateEvalForm({
        data: { endEvaluationDate: new Date(date) },
        idclass: idclass.toString(),
      });
    } else {
      setDateConcluded(naoReservado);
      mutateEvalForm({
        data: { endEvaluationDate: null },
        idclass: idclass.toString(),
      });
    }
    setCheck((prev) => !prev);
  };

  return (
    <div className={styles.avaliarRedacoes_status}>
      {!reserved ? (
        <>
          <input
            type="checkbox"
            onChange={() => handleReservation(idvol, idclass)}
            id={idclass.toString()}
            className={styles.toggle}
          />
          <label htmlFor={idclass.toString()} className={styles.switch}>
            <span className={styles.slider} />
          </label>
          <p>{`${idclass}-${place}`}</p>
          <p>{naoReservado}</p>
          <p>{naoReservado}</p>
          <input type="checkbox" className={styles.check} checked={false} />
          <label
            htmlFor={idclass.toString() + 1}
            className={styles.switchConcl}
          >
            <span className={styles.sliderConcl} />
          </label>
          <div className={styles.avaliarRedacoes_status_div}>
            <button className={styles.directory} disabled>
              Abrir Link &nbsp;
              <FaExternalLinkAlt />
            </button>
          </div>
          <p className={styles.avaliarRedacoes_status_p5}>{preencher}</p>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked
            onChange={() => handleRevertReservation(idvol, idclass)}
            id={idclass.toString()}
            className={styles.toggle}
          />
          <label htmlFor={idclass.toString()} className={styles.switch}>
            <span className={styles.slider} />
          </label>
          <p>{`${idclass}-${place}`}</p>
          <p>
            {dateReserved ? dateUTCFormat(dateReserved) : dateUTCGenerate()}
          </p>
          <p>{dateConcludedState}</p>
          <input
            type="checkbox"
            id={idclass.toString() + 1}
            className={styles.check}
            onChange={() => handleSubmitDate()}
            checked={check}
          />
          <label
            htmlFor={idclass.toString() + 1}
            className={styles.switchConcl}
          >
            <span className={styles.sliderConcl} />
          </label>
          <a href={folderLink} target="_blank" rel="noreferrer">
            <button className={styles.directory} disabled={!folderLink?.length}>
              Abrir Link &nbsp;
              <FaExternalLinkAlt />
            </button>
          </a>
          {/* {reserved ? ( */}
          <FormButton
            idClass={idclass}
            idVol={idvol}
            place={place}
            dateReserved={dateReserved}
            dateConcluded={dateConcluded}
            reserved={reserved}
          />
          {/* ) : (
            <p className={styles.avaliarRedacoes_status_p5}>{preencher}</p> */}
          {/* )} */}
        </>
      )}
    </div>
  );
}

export { ItemTurmaAvaliacao };
