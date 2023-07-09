import React from "react";

import styles from "../styles/AreaDeTrabalho.module.css";

export default function WorkshopsAssistidos() {
  return (
    <div className={styles.tableContent}>
      <div className={styles.tableTitles}>
        <h4 className={styles.tableTitle1}>Data</h4>
        <h4 className={styles.tableTitle2}>Workshops Assistidos</h4>
      </div>
      <div className={styles.tableDate}>
        <p>04/03/2023</p>
        <p>Paz</p>
      </div>
    </div>
  );
}
