import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";

import styles from "../styles/Avaliar.module.css";

export default function AvaliarRedacoes() {
  const turma = "0001-C.  Penal João Chaves";
  const reservado = "Reservado";
  const concluido = "Não Reservado";
  const avaliar = "Preencher Formulário";

  return (
    <section className={styles.avaliar_section}>
      <h1>Avaliar Redações</h1>
      <div className={styles.avaliar_itens}>
        <div className={styles.avaliarRedacoes_titles}>
          <span />
          <h2>Turma / Penitenciária</h2>
          <h2>Reservado em</h2>
          <h2>Concluido em</h2>
          <h2>Baixar Relatórios</h2>
          <h2>Formulário de avaliação</h2>
        </div>
        <div className={styles.avaliarRedacoes_status}>
          <input type="checkbox" />
          <p>{turma}</p>
          <p>{reservado}</p>
          <p>{concluido}</p>
          <div className={styles.avaliarRedacoes_status_div}>
            <Image src={DownloadImage} alt="icone de download" />
            <p>Download</p>
          </div>
          <p className={styles.avaliarRedacoes_status_p5}>{avaliar}</p>
        </div>
      </div>
    </section>
  );
}
