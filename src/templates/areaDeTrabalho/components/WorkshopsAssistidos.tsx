import React from "react";

import useGetAttendances from "../../../hooks/useGetAttendances";

import styles from "../styles/WorkshopsAreaDeTrabalho.module.css";

type WorkshopsAssistidosProps = {
  idvol: number;
};

const WorkshopsAssistidos = ({ idvol }: WorkshopsAssistidosProps) => {
  const { data: attendances = [] } = useGetAttendances(idvol);

  return (
    <section className={styles.workshops_container}>
      <header className={styles.workshops_header}>
        <h4 className={styles.workshops_h4_subtitle}>Data</h4>
        <h4 className={styles.workshops_h4_title}>Workshops Assistidos</h4>
      </header>
      <div className={styles.workshops_overflow}>
        <ul className={styles.lista_workshops}>
          {attendances.map(({ idAttend, submissionDate, workshopSubject }) => (
            <li className={styles.workshop} key={idAttend}>
              <p className={styles.date_string}>
                {new Date(Date.parse(submissionDate)).toLocaleDateString(
                  "pt-BR"
                )}
              </p>
              <p className={styles.workshop_subject}>{workshopSubject}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkshopsAssistidos;
