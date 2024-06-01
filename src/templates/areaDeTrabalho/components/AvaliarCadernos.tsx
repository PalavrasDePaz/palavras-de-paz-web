import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import { api } from "../../../api";
import dateUTCFormat from "../../../helpers/dateUTCFormat";
import dateUTCGenerate from "../../../helpers/dateUTCGenerate";
import getNotebooksDownload from "../../../helpers/getNotebookDownload";
import isReserved from "../../../helpers/isReserved";
import useGetNotebooks from "../../../hooks/useGetNotebooks";
import { INotebooks } from "../types/interfaces";

import styles from "../styles/AvaliarCadernos.module.css";

type AvaliarCadernosProps = {
  idvol: number;
};

type OpenFormularioProps = {
  studentName: string;
  studentId: number;
  classId: number;
  notebookId: number;
  reservationDate: string;
};

const AvaliarCadernos = ({ idvol }: AvaliarCadernosProps) => {
  const router = useRouter();
  const { data: notebooks } = useGetNotebooks(idvol);
  const [notebooksIn, setNotebooksIn] = useState<INotebooks[]>([]);
  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

  const putReservationData = async (notebookId: number) => {
    const reserveData = { idvol, notebookId };
    const response = await api.put("/notebooks/reservation", reserveData);
    return response.data;
  };

  const putRevertReservationData = async (notebookId: number) => {
    const reserveData = { idvol, notebookId };
    const response = await api.put(
      `/notebooks/revert-reservation/${notebookId}`,
      reserveData
    );
    return response.data;
  };

  const sortedNotebooksReserved = (notebooksParam: INotebooks[]) =>
    notebooksParam.sort(
      (a, b) =>
        new Date(b.reservationDate).getTime() -
        new Date(a.reservationDate).getTime()
    );

  const sortedNotebooksNotReserved = (notebooksParam: INotebooks[]) =>
    notebooksParam.sort((a, b) => {
      if (a.notebookId > b.notebookId) {
        return 1;
      }
      if (a.notebookId < b.notebookId) {
        // eslint-disable-next-line no-magic-numbers
        return -1;
      }
      return 0;
    });
  const handleOpenFormulario = ({
    studentName,
    studentId,
    classId,
    notebookId,
    reservationDate,
  }: OpenFormularioProps) => {
    localStorage.removeItem("form");
    router.push({
      pathname: "/formulario-avaliacao-caderno",
      query: { studentName, studentId, classId, notebookId, reservationDate },
    });
  };

  const updateNotebooksIn = (updatedNotebooks: INotebooks[]) => {
    const filterReserved = sortedNotebooksReserved(
      updatedNotebooks.filter((notebook) => notebook.reserved)
    );
    const filterNotReserved = sortedNotebooksNotReserved(
      updatedNotebooks.filter((notebook) => !notebook.reserved)
    );
    setNotebooksIn([filterReserved, filterNotReserved].flat());
  };

  const updateNotebookReservation = (
    notebookId: number,
    reserveFlag: boolean
  ) =>
    notebooksIn.map((notebook) => {
      if (notebook.notebookId === notebookId) {
        return {
          ...notebook,
          reserved: reserveFlag,
        };
      }
      return notebook;
    });

  const handleReservation = async (notebookId: number) => {
    const updatedNotebooks = updateNotebookReservation(notebookId, true);
    updateNotebooksIn(updatedNotebooks);
    await putReservationData(notebookId);
  };

  const handleRevertReservation = async (notebookId: number) => {
    const updatedNotebooks = updateNotebookReservation(notebookId, false);
    updateNotebooksIn(updatedNotebooks);
    await putRevertReservationData(notebookId);
  };

  useEffect(() => {
    if (notebooks) {
      const updatedNotebooks = notebooks.map((notebook) => ({
        ...notebook,
        reserved: isReserved(notebook.reservationDate),
      }));
      updateNotebooksIn(updatedNotebooks);
    }
  }, [notebooks]);
  console.log(notebooksIn);

  return (
    <section className={styles.avaliar_section}>
      <h1>Avaliar Cadernos</h1>
      <div className={styles.avaliar_itens}>
        <div className={styles.avaliar_titles}>
          <span />
          <h2>Aluno</h2>
          <h2>N° turma</h2>
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
              classId,
              reserved,
            }) => (
              <div key={studentId} className={styles.avaliar_status}>
                {!reserved ? (
                  <>
                    <input
                      className={styles.toggle}
                      type="checkbox"
                      onChange={() => handleReservation(notebookId)}
                      id={studentName}
                    />
                    <label htmlFor={studentName} className={styles.switch}>
                      <span className={styles.slider} />
                    </label>
                    <p className={styles.avaliar_status_p1}>{studentName}</p>
                    <p className={styles.avaliar_status_p1}>{classId}</p>
                    <p>{naoReservado}</p>
                    <div className={styles.avaliar_status_div}>
                      <Image src={DownloadImage} alt="icone de download" />
                      <p className={styles.avaliar_status_div_p}>Download</p>
                    </div>
                  </>
                ) : (
                  <>
                    <input
                      className={styles.toggle}
                      id={studentName}
                      type="checkbox"
                      onChange={() => handleRevertReservation(notebookId)}
                      checked
                    />
                    <label htmlFor={studentName} className={styles.switch}>
                      <span className={styles.slider} />
                    </label>

                    <p className={styles.avaliar_status_p1}>{studentName}</p>
                    <p className={styles.avaliar_status_p1}>{classId}</p>

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
                  <button
                    className={styles.avaliar_status_p5_active}
                    onClick={() =>
                      handleOpenFormulario({
                        studentName,
                        studentId,
                        classId,
                        notebookId,
                        reservationDate,
                      })}
                  >
                    {preencher}
                  </button>
                ) : (
                  <button className={styles.avaliar_status_p5}>
                    {preencher}
                  </button>
                )}
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default AvaliarCadernos;
