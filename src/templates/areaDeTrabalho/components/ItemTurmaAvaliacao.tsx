import React from "react";
import Image from "next/image";
import Link from "next/link";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import { api } from "../../../api";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import downloadZIP from "../../../helpers/getEssaysDownload";
import { IEssays } from "../types/interfaces";

import styles from "../styles/AvaliarRedacoes.module.css";

type ItemTurmaAvaliacaoProps = {
  essaysIn: IEssays[];
  setEssaysIn: React.Dispatch<React.SetStateAction<IEssays[]>>;
  idclass: number;
  place: string;
  idvol: number;
  dateReserved: string;
  dateConcluded: string;
  reserved: boolean;
};

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

  const handleReservation = async (volunteerId: number, classId: number) => {
    const updatedEssays = essaysIn.map((essay: IEssays) => {
      if (essay.idclass === classId) {
        return {
          ...essay,
          reserved: true,
        };
      }
      return essay;
    });
    setEssaysIn(updatedEssays);

    await putReservationData(volunteerId, classId);
  };

  const handleRevertReservation = async (
    volunteerId: number,
    classId: number
  ) => {
    const updatedEssays = essaysIn.map((essay: IEssays) => {
      if (essay.idclass === classId) {
        return {
          ...essay,
          reserved: false,
        };
      }
      return essay;
    });
    setEssaysIn(updatedEssays);

    await putRevertReservationData(volunteerId, classId);
  };

  const naoReservado = "--/--/--";
  const preencher = "Preencher Formulário";

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
            id={idvol.toString()}
            className={styles.toggle}
          />
          <label htmlFor={idvol.toString()} className={styles.switch}>
            <span className={styles.slider} />
          </label>
          <p>{`${idclass}-${place}`}</p>
          <p>
            {dateReserved ? dateUTCFormat(dateReserved) : dateUTCGenerate()}
          </p>
          <p>{dateConcluded ? dateUTCFormat(dateReserved) : naoReservado}</p>
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
            <Link href="area-de-trabalho">
              <p className={styles.avaliarRedacoes_status_preencher_on}>
                {preencher}
              </p>
            </Link>
          ) : (
            <p className={styles.avaliarRedacoes_status_p5}>{preencher}</p>
          )}
        </>
      )}
    </div>
  );
}

export default ItemTurmaAvaliacao;
