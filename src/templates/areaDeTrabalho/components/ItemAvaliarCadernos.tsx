import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import DownloadImgEnabled from "../../../../public/static/images/icons/downloadEnab.svg";
import { Notebook } from "../../../hooks/types";
import convertDateFromENtoBR from "../../../utils/dataformatter";

import styles from "../styles/Avaliar.module.css";

type AvaliarCardernoProps = {
  idvol: number;
  notebook: Notebook;
};

function ItemAvaliarCadernos({ notebook, idvol }: AvaliarCardernoProps) {
  const { studentId, studentName, reservationDate } = notebook;

  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  const formattedDate = reservationDate
    ? convertDateFromENtoBR(reservationDate)
    : naoReservado;

  return (
    <div className={styles.avaliar_status}>
      <input type="checkbox" />
      <p className={styles.avaliar_status_p1}>{studentName}</p>
      {reservationDate === null ? (
        <p>{naoReservado}</p>
      ) : (
        <p>{reservationDate}</p>
      )}
      <div className={styles.avaliar_status_div}>
        <Image src={DownloadImage} alt="icone de download" />
        <p
          className={`${styles.avaliar_status_div_p} 
        ${reservationDate ? styles.avaliar_status_div_p_active : ""}`}
        >
          Download
        </p>
      </div>
      <p
        className={`${styles.avaliar_status_p5}
      ${reservationDate ? styles.avaliar_status_p5_active : ""}`}
      >
        {preencher}
      </p>
    </div>
  );
}

export default ItemAvaliarCadernos;
