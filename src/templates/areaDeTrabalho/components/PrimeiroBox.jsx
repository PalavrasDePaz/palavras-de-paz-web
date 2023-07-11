import React from "react";
import Link from "next/link";

import styles from "../styles/AreaDeTrabalho.module.css";

export default function PrimeiroBox() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main_container_div}>
        <p className={styles.main_container_p1}>Para marcar presença em um</p>
        <p className={styles.main_container_p2}>Workshop</p>
        <Link href="/presenca">
          <button className={styles.main_container_button}>Clique aqui</button>
        </Link>
      </div>
      <h3>Relatórios de leitura avaliados:</h3>
      <h3>Cadernos avaliados:</h3>
    </div>
  );
}
