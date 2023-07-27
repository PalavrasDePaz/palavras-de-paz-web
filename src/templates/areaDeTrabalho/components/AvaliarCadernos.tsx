import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import useGetNotebooks from "../../../hooks/useGetNotebooks";

import styles from "../styles/AvaliarCadernos.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);

  console.log(notebooks);

  const nome = "Ricardo da Silva";
  const reservado = "25/05/2023";
  const download = "Download";
  const preencher = "Preencher Formulário";

  // TODO: separar header das linhas, para poder dar um notebooks.map pra preencher a tabela.

  return (
    <section className={styles.avaliar_section}>
      <h1>Avaliar Cadernos</h1>
      <div className={styles.avaliar_itens}>
        <div className={styles.avaliar_titles}>
          <span />
          <h2>Aluno</h2>
          <h2>Reservado em</h2>
          <h2>Baixar Caderno</h2>
          <h2>Formulário de avaliação</h2>
        </div>
        <div className={styles.avaliar_status}>
          <input type="checkbox" />
          <p>{nome}</p>
          <p>{reservado}</p>
          <div className={styles.avaliar_status_div}>
            <Image src={DownloadImage} alt="icone de download" />
            <p>{download}</p>
          </div>
          <p>{preencher}</p>
        </div>
        <div className={styles.avaliar_status}>
          <input type="checkbox" />
          <p>{nome}</p>
          <p>{reservado}</p>
          <div className={styles.avaliar_status_div}>
            <Image src={DownloadImage} alt="icone de download" />
            <p>{download}</p>
          </div>
          <p>{preencher}</p>
        </div>
      </div>
    </section>
  );
};

export default AvaliarCadernos;
