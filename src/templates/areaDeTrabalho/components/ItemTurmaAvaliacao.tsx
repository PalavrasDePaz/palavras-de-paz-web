import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import { api } from "../../../api";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import downloadZIP from "../../../helpers/getEssaysDownload";
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

  const sortedEssayReserved = (essays: IEssays[]) =>
    essays.sort(
      (a, b) =>
        new Date(a.dateReserved).getTime() - new Date(b.dateReserved).getTime()
    );

  const sortedEssayNotReserved = (essays: IEssays[]) =>
    essays.sort((a, b) => a.idclass - b.idclass);

  const putReservationData = async (volunteerId: number, classId: number) => {
    const reserveData = { idvol: volunteerId, idclass: classId };
    const response = await api.put("/book-club-class/reservation", reserveData);
    return response.data;
  };

  const putRevertReservationData = async (
    volunteerId: number,
    classId: number
  ) => {
    const reserveData = { idvol: volunteerId, idclass: classId };
    const response = await api.put(
      `/book-club-class/revert-reservation/${classId}`,
      reserveData
    );
    return response.data;
  };

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
    localStorage.getItem("conclused")?.includes(idclass.toString()) || false
  );
  const [dateConcludedState, setDateConcluded] = useState("--/--/--");
  const handleConclusedChange = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (
      localStorage.getItem("conclused") &&
      localStorage.getItem("conclused")?.includes(idclass.toString())
    ) {
      // Chamo API
    }
  }, []);

  useEffect(() => {
    if (check) {
      const date = new Date().toISOString();
      const dateBR = date.split("T")[0].split("-").reverse().join("/");
      setDateConcluded(dateBR);
    } else {
      setDateConcluded("--/--/--");
    }
  }, [check]);

  useEffect(() => {
    if (check) {
      const conclused = JSON.parse(localStorage.getItem("conclused") || "[]");
      if (!conclused.includes(idclass.toString())) {
        conclused.push(idclass.toString());
        localStorage.setItem("conclused", JSON.stringify(conclused));
      }
    } else {
      const conclused = JSON.parse(localStorage.getItem("conclused") || "[]");
      if (conclused.includes(idclass.toString())) {
        conclused.splice(conclused.indexOf(idclass.toString()), 1);
        localStorage.setItem("conclused", JSON.stringify(conclused));
      }
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
          <p>{dateConcludedState}</p>
          <input
            type="checkbox"
            id={idclass.toString() + 1}
            className={styles.check}
            onChange={() => handleConclusedChange()}
            checked={check}
          />
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
            checked // ADICIONAR ROTA PARA REMOVER A RESERVA
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
            onChange={() => handleConclusedChange()}
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
