import React from "react";

import useGetAttendances from "../../../hooks/useGetAttendances";

import styles from "../styles/AreaDeTrabalho.module.css";

type WorkshopsAssistidosProps = {
  idvol: number;
};

const WorkshopsAssistidos = ({ idvol }: WorkshopsAssistidosProps) => {
  const { data: attendances = [] } = useGetAttendances(idvol);

  return (
    <div className={styles.tableContent}>
      <div className={styles.tableTitles}>
        <h4 className={styles.tableTitle1}>Data</h4>
        <h4 className={styles.tableTitle2}>Workshops Assistidos</h4>
      </div>
      <div className={styles.tableDate}>
        {attendances.map(({ idAttend, submissionDate, workshopSubject }) => (
          <div className={styles.workshopListItem} key={idAttend}>
            <p>
              {new Date(Date.parse(submissionDate)).toLocaleDateString("pt-BR")}
            </p>
            <p className={styles.workshopSubject}>{workshopSubject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopsAssistidos;
