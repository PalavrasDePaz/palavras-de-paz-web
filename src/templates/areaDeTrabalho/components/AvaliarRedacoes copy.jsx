import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";

import styles from "../styles/AvaliarRedacoes.module.css";

export default function AvaliarRedacoes() {
  const turma = "0001-C.  Penal João Chaves";
  const reservado = "Reservado";
  const concluido = "Não Reservado";
  const baixar = "Download";
  const avaliar = "Preencher Formulário";

  return (
    <section className={styles.avaliarRedacoes_section}>
      <h1>Avaliar Redações</h1>
      <div className={styles.avaliarRedacoes_itens}>
        <div className={styles.avaliarRedacoes_opcoes}>
          <input type="checkbox" />
        </div>
      </div>
      <div className={styles.avaliarRedacoes_itens}>
        <h2>Turma / Penitenciária</h2>
        <div className={styles.avaliarRedacoes_opcoes}>
          <div>{turma}</div>
        </div>
      </div>
      <div className={styles.avaliarRedacoes_itens}>
        <h2>Reservado em</h2>
        <div className={styles.avaliarRedacoes_opcoes}>
          <div>{reservado}</div>
        </div>
      </div>
      <div className={styles.avaliarRedacoes_itens}>
        <h2>Concluido em</h2>
        <div className={styles.avaliarRedacoes_opcoes}>
          <div>{concluido}</div>
        </div>
      </div>
      <div className={styles.avaliarRedacoes_itens}>
        <h2>Baixar Relatórios</h2>
        <div className={styles.avaliarRedacoes_baixar}>
          <Image src={DownloadImage} alt="icone de Download" />
          <div>{baixar}</div>
        </div>
      </div>
      <div className={styles.avaliarRedacoes_itens}>
        <h2>Formulário de avaliação</h2>
        <div className={styles.avaliarRedacoes_opcoes}>
          <div>{avaliar}</div>
        </div>
      </div>
    </section>
  );
}
