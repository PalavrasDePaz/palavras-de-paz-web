import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import downloadZIP from "../../../helpers/getEssaysDownload";
import usePatchBookClubClass from "../../../hooks/usePatchBookClubClass";
import {
  putReservationData,
  putRevertReservationData,
  sortedEssayNotReserved,
  sortedEssayReserved,
} from "../helpers/Reservations";
import {
  ItemTurmaAvaliacaoProps,
  OpenFormularioProps,
} from "../types/FormRedacaoType";
import { IEssays } from "../types/interfaces";

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
}: ItemTurmaAvaliacaoProps) {
  const router = useRouter();

  const handleOpenFormulario = ({
    idClass,
    idVol,
    Place,
    DateReserved,
    DateConcluded,
    Reserved,
  }: OpenFormularioProps) => {
    localStorage.removeItem("form");
    router.push({
      pathname: "/formulario-avaliacao-redacao",
      query: { idClass, idVol, Place, DateReserved, DateConcluded, Reserved },
    });
  };

  const { mutate: mutateEvalForm } = usePatchBookClubClass();

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

  const naoReservado = "--/--/--";
  const preencher = "Preencher Formulário";

  const [check, setCheck] = useState(
    JSON.parse(localStorage.getItem("conclusedDate") || "[]").some(
      (element: { idclass: string }) => element.idclass === idclass.toString()
    )
  );

  const [dateConcludedState, setDateConcluded] = useState("--/--/--");

  useEffect(() => {
    const conclusedDate = JSON.parse(
      localStorage.getItem("conclusedDate") || "[]"
    );
    if (
      localStorage.getItem("conclusedDate") &&
      conclusedDate.some(
        (element: { idclass: string }) => element.idclass === idclass.toString()
      )
    ) {
      const elementDate = conclusedDate.find(
        (element: { idclass: string }) => element.idclass === idclass.toString()
      );
      setDateConcluded(elementDate.date);
      const dateFormat = dateConcludedState.split("/").reverse().join("-");
      mutateEvalForm({
        data: {
          endEvaluationDate: new Date(dateFormat),
        },
        idclass: idclass.toString(),
      });
    }
  }, []);

  useEffect(() => {
    if (check) {
      const date = new Date().toISOString();
      const dateBR = date.split("T")[0].split("-").reverse().join("/");
      const conclusedDate = JSON.parse(
        localStorage.getItem("conclusedDate") || "[]"
      );
      setDateConcluded(dateBR);
      if (
        !conclusedDate.some(
          (element: { idclass: string }) =>
            element.idclass === idclass.toString()
        )
      ) {
        conclusedDate.push({ idclass: idclass.toString(), date: dateBR });
        localStorage.setItem("conclusedDate", JSON.stringify(conclusedDate));
      }
      conclusedDate.forEach((element: { idclass: string; date: string }) => {
        if (element.idclass === idclass.toString()) {
          element.date = dateBR;
        }
      });
    } else {
      setDateConcluded("--/--/--");
      const conclusedDate = JSON.parse(
        localStorage.getItem("conclusedDate") || "[]"
      );
      const newConclusedDate = conclusedDate.filter(
        (element: { idclass: string }) => element.idclass !== idclass.toString()
      );
      localStorage.setItem("conclusedDate", JSON.stringify(newConclusedDate));
    }
  }, [check]);

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
            <Image src={DownloadImage} alt="icone de download" />
            <p>Download</p>
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
            onChange={() => setCheck(!check)}
            checked={check}
          />
          <label
            htmlFor={idclass.toString() + 1}
            className={styles.switchConcl}
          >
            <span className={styles.sliderConcl} />
          </label>
          <div className={styles.avaliarRedacoes_status_div}>
            <button
              onClick={() => downloadZIP(idclass, `${place}`)}
              className={styles.button_download}
            >
              <Image src={DownloadImage} alt="icone de download" />
              <p>Download</p>
            </button>
          </div>
          {reserved ? (
            <button
              className={styles.avaliarRedacoes_status_preencher_on}
              onClick={() =>
                handleOpenFormulario({
                  idClass: idclass,
                  idVol: idvol,
                  Place: place,
                  DateReserved: dateReserved,
                  DateConcluded: dateConcluded,
                  Reserved: reserved,
                })}
            >
              {preencher}
            </button>
          ) : (
            <p className={styles.avaliarRedacoes_status_p5}>{preencher}</p>
          )}
        </>
      )}
    </div>
  );
}

export default ItemTurmaAvaliacao;
