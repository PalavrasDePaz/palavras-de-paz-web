import React from "react";
import Link from "next/link";

import useGetNotebooksCount from "../../../hooks/useGetNotebookCount";

import styles from "../styles/AreaDeTrabalho.module.css";

interface IIdVol {
  idVol: number;
}

export default function PrimeiroBox({ idVol }: IIdVol) {
  const { data: notebooksCount } = useGetNotebooksCount(idVol);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.main_container_div}>
        <p className={styles.main_container_p1}>Para marcar presença em um</p>
        <p className={styles.main_container_p2}>Workshop</p>
        <Link href="/presenca">
          <button className={styles.main_container_button}>Clique aqui</button>
        </Link>
      </div>
      <h3 className={styles.main_container_h3}>
        Relatórios de leitura avaliados:
      </h3>
      <h3 className={styles.main_container_h3}>
        Cadernos avaliados: {notebooksCount?.count}
      </h3>
    </div>
  );
}