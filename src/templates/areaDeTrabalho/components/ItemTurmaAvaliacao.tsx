import React, { useState } from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import { api } from "../../../api";

import styles from "../styles/Avaliar.module.css";

type ItemTurmaAvaliacaoProps = {
  idclass: number;
  place: string;
  idvol: number;
};
function ItemTurmaAvaliacao({
  idclass,
  place,
  idvol,
}: ItemTurmaAvaliacaoProps) {
  const putReservationData = async (volunteerId: number, classId: number) => {
    const reserveData = { idvol: volunteerId, idclass: classId };
    const response = await api.put("/book-club-class/reservation", reserveData);
    return response.data;
  };

  const classReservationDate = () => new Date().toLocaleDateString();

  const [reserved, setReserved] = useState(false);

  const handleReservation = (volunteerId: number, classId: number) => {
    setReserved(!reserved);
    putReservationData(volunteerId, classId);
  };

  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  return (
    <div className={styles.avaliarRedacoes_status}>
      <input
        type="checkbox"
        onChange={() => handleReservation(idvol, idclass)}
      />
      <p>{`${idclass}-${place}`}</p>
      <p>{reserved ? classReservationDate() : "Não Reservado"}</p>
      <p>{naoReservado}</p>
      <div className={styles.avaliarRedacoes_status_div}>
        <Image src={DownloadImage} alt="icone de download" />
        <p>Download</p>
      </div>
      <p className={styles.avaliarRedacoes_status_p5}>{preencher}</p>
    </div>
  );
}

export default ItemTurmaAvaliacao;
