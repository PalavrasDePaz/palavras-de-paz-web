import React, { useEffect, useState } from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import { api } from "../../../api";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import getNotebooksDownload from "../../../helpers/getNotebookDownload";
import isReserved from "../../../helpers/isReserved";
import useGetNotebooks from "../../../hooks/useGetNotebooks";
import { INotebooks } from "../types/interfaces";

import ModalAvalCadernos from "./ModalAvalCadernos";

import styles from "../styles/AvaliarCadernos.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const { data: notebooks } = useGetNotebooks(idvol);
  const [notebooksIn, setNotebooksIn] = useState<INotebooks[]>([]);
  const [showFormulario, setShowFormulario] = useState(false);
  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  const putReservationData = async (notebookId: number) => {
    const reserveData = { idvol, notebookId };
    const response = await api.put("/notebooks/reservation", reserveData);
    return response.data;
  };

  const handleOpenFormulario = () => {
    setShowFormulario(true);
  };

  const handleCloseFormulario = () => {
    setShowFormulario(false);
  };

  const handleAnchorClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleReservation = async (notebookId: number) => {
    const updatedNotebooks = notebooksIn.map((notebook) => {
      if (notebook.notebookId === notebookId) {
        return {
          ...notebook,
          reserved: true,
        };
      }
      return notebook;
    });

    setNotebooksIn(updatedNotebooks);

    await putReservationData(notebookId);
  };

  useEffect(() => {
    if (notebooks) {
      const updatedNotebooks = notebooks.map((notebook) => ({
        ...notebook,
        reserved: isReserved(notebook.reservationDate),
      }));
      setNotebooksIn(updatedNotebooks);
    }
  }, [notebooks]);

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
        {notebooksIn &&
          notebooksIn.map(
            ({
              notebookId,
              studentName,
              reservationDate,
              studentId,
              reserved,
            }) => (
              <div key={studentId} className={styles.avaliar_status}>
                {!reserved ? (
                  <>
                    <input
                      type="checkbox"
                      onChange={() => handleReservation(notebookId)}
                    />
                    <p className={styles.avaliar_status_p1}>{studentName}</p>
                    <p>{naoReservado}</p>
                    <div className={styles.avaliar_status_div}>
                      <Image src={DownloadImage} alt="icone de download" />
                      <p className={styles.avaliar_status_div_p}>Download</p>
                    </div>
                  </>
                ) : (
                  <>
                    <input type="checkbox" checked />
                    <p className={styles.avaliar_status_p1}>{studentName}</p>
                    <p>
                      {reservationDate
                        ? dateUTCFormat(reservationDate)
                        : dateUTCGenerate()}
                    </p>
                    <div className={styles.avaliar_status_div}>
                      <button
                        onClick={() =>
                          getNotebooksDownload(notebookId, studentName)}
                        className={styles.button_download}
                      >
                        <Image src={DownloadImage} alt="icone de download" />
                        <p className={styles.avaliar_status_div_p_active}>
                          Download
                        </p>
                      </button>
                    </div>
                  </>
                )}
                {reserved ? (
                  <a href="area-de-trabalho" onClick={handleAnchorClick}>
                    <button
                      className={styles.avaliar_status_p5_active}
                      onClick={handleOpenFormulario}
                    >
                      {preencher}
                    </button>
                  </a>
                ) : (
                  <button
                    className={styles.avaliar_status_p5}
                    onClick={handleOpenFormulario}
                  >
                    {preencher}
                  </button>
                )}
              </div>
            )
          )}
      </div>
      {showFormulario && <ModalAvalCadernos onClose={handleCloseFormulario} />}
    </section>
  );
};

export default AvaliarCadernos;
