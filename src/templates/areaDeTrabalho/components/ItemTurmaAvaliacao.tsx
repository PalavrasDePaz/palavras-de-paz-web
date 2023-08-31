import React, { useEffect, useState } from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import DownloadImgEnabled from "../../../../public/static/images/icons/downloadEnab.svg";
import { api } from "../../../api";
import { Essays } from "../../../hooks/types";
import convertDateFromENtoBR from "../../../utils/dataformatter";

import styles from "../styles/Avaliar.module.css";

type AvaliarRedacaoProps = {
  idvol: number;
  essay: Essays;
};

function ItemTurmaAvaliacao({ essay, idvol }: AvaliarRedacaoProps) {
  const { idclass, place, dateReserved } = essay;

  const [reserved, setReserved] = useState(false);

  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  const formattedDate = dateReserved
    ? convertDateFromENtoBR(dateReserved)
    : naoReservado;

  // Envia reserva para API
  const putReservationData = async (volunteerId: number, classId: number) => {
    const reserveData = { idvol: volunteerId, idclass: classId };
    const response = await api.put("/book-club-class/reservation", reserveData);
    return response.data;
  };

  const handleReservation = (volunteerId: number, classId: number) => {
    setReserved(!reserved);
    putReservationData(volunteerId, classId);
  };

  useEffect(() => {
    if (dateReserved) setReserved(true);
  }, [reserved]);

  return (
    <div className={styles.avaliarRedacoes_status}>
      <input
        type="checkbox"
        checked={reserved}
        onChange={() => handleReservation(idvol, idclass)}
      />
      <p>{`${idclass} - ${place}`}</p>
      <p>{reserved ? formattedDate : "Não Reservado"}</p>
      <p>{naoReservado}</p>
      <button
        className={styles.avaliarRedacoes_status_button}
        disabled={!reserved}
      >
        <Image
          src={!reserved ? DownloadImage : DownloadImgEnabled}
          alt="icone de download"
        />
        <p>Download</p>
      </button>
      <button
        className={styles.avaliarRedacoes_status_button}
        disabled={!reserved}
      >
        {preencher}
      </button>
    </div>
  );
}

export default ItemTurmaAvaliacao;
