import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import getNotebooksDownload from "../../../helpers/getNotebookDownload";
import useGetNotebooks from "../../../hooks/useGetNotebooks";

import styles from "../styles/AvaliarCadernos.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);
  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

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
        {notebooks &&
          notebooks.map(
            ({ notebookId, studentName, reservationDate, studentId }) => (
              <div key={studentId} className={styles.avaliar_status}>
                <input type="checkbox" />
                <p className={styles.avaliar_status_p1}>{studentName}</p>
                {reservationDate === null ? (
                  <>
                    <p>{naoReservado}</p>
                    <div className={styles.avaliar_status_div}>
                      <Image src={DownloadImage} alt="icone de download" />
                      <p className={styles.avaliar_status_div_p}>Download</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>{reservationDate}</p>
                    <div className={styles.avaliar_status_div}>
                      <button
                        onClick={() =>
                          getNotebooksDownload(notebookId, studentName)}
                        className={styles.button_download}
                      >
                        <Image src={DownloadImage} alt="icone de download" />
                      </button>
                      <p className={styles.avaliar_status_div_p_active}>
                        Download
                      </p>
                    </div>
                  </>
                )}
                <p
                  className={`${styles.avaliar_status_p5}
                ${reservationDate ? styles.avaliar_status_p5_active : ""}`}
                >
                  {preencher}
                </p>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default AvaliarCadernos;
