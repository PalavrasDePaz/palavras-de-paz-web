/* eslint-disable max-len */
import Link from "next/link";

import styles from "./styles.module.css";

export default function Inscricoes() {
  return (
    <div className={styles.inscricoes}>
      <h2 className={styles.title}>
        Inscreva-se no Programa de Educação para Paz e no Ouça sua Voz no âmbito
        do prorama Oportunidade Já
      </h2>

      <div className="d-flex justify-content-center border-0">
        <Link href="/inscricao?idpep=693">
          <button className={styles.button}>Inscreva-se</button>
        </Link>
      </div>
    </div>
  );
}
