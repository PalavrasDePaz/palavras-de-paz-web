import useGetEssaysCount from "../../../hooks/useGetEssaysCount";
import useGetNotebooksCount from "../../../hooks/useGetNotebookCount";

import styles from "../styles/AreaDeTrabalho.module.css";

interface IdVol {
  idVol: number;
}

export default function PrimeiroBox({ idVol }: IdVol) {
  const { data: notebooksCount } = useGetNotebooksCount(idVol);
  const { data: essaysCount } = useGetEssaysCount(idVol);
  return (
    <aside className={styles.mainContainer}>
      <div className={styles.main_container_div}>
        <div className={styles.main_container_div__p}>
          <p className={styles.main_container_p1}>Para marcar presença em um</p>
          <p className={styles.main_container_p2}>Workshop</p>
        </div>
        <a href="/presenca" className={styles.linkPrimeiroBox}>
          <button className={styles.buttonLink}>Clique aqui</button>
        </a>
      </div>
      <div className={styles.horas_declaradas_container}>
        <h3 className={styles.h3__text_horas}>
          Declarar as horas trabalhadas do mês de Outubro
        </h3>
        <button className={styles.declarar_horas_btn}>Indisponível</button>
      </div>
      <div className={styles.count_container}>
        <div className={styles.container_h3}>
          <h3 className={styles.h3__text}>
            Cadernos avaliados:
            <span className={styles.counts}> {notebooksCount?.count}</span>
          </h3>
        </div>
        <div className={styles.container_h3}>
          <h3 className={styles.h3__text}>
            Relatórios de leitura avaliados:
            <span className={styles.counts}> {essaysCount?.count}</span>
          </h3>
        </div>
      </div>
    </aside>
  );
}
