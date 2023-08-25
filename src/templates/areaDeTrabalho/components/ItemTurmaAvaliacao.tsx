import React, { useState } from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";

import styles from "../styles/Avaliar.module.css";

type ItemTurmaAvaliacaoProps = {
  idclass: number;
  place: string;
};

function ItemTurmaAvaliacao({ idclass, place }: ItemTurmaAvaliacaoProps) {
  const handleClassReservation = () => new Date().toLocaleDateString();
  const [reserved, setReserved] = useState(false);

  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  return (
    <div className={styles.avaliarRedacoes_status}>
      <input type="checkbox" onChange={() => setReserved(!reserved)} />
      <p>{`${idclass}-${place}`}</p>
      <p>{reserved ? handleClassReservation() : "Não Reservado"}</p>
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
