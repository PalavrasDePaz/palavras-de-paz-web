import { MouseEvent, useState } from "react"; // Import useState
import { useRouter } from "next/router";
import { addMonths, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import useGetEssaysCount from "../../../hooks/useGetEssaysCount";
import useGetNotebooksCount from "../../../hooks/useGetNotebookCount";

import styles from "../styles/AreaDeTrabalho.module.css";

interface IdVol {
  idVol: number;
}

function capitalizeFirstLetter(str: string): string {
  // Função retorna uma string com a primeira letra em maiúscula.
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const INDEX_PREVIOUS_MONTH = -1;

export default function PrimeiroBox({ idVol }: IdVol) {
  const { data: notebooksCount } = useGetNotebooksCount(idVol);
  const { data: essaysCount } = useGetEssaysCount(idVol);
  const { push } = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    push("/presenca");
  };

  function isWithinFirstFiveDays() {
    const fifthDay = 5;
    const currentDate = new Date();
    return currentDate.getDate() <= fifthDay;
  }

  const [buttonText] = useState(
    isWithinFirstFiveDays() ? "Declarar" : "Indisponível"
  );

  const handleButtonClick = () => {
    if (buttonText === "Declarar") {
      push("/levantamento-horas");
    }
  };

  const buttonClassName = isWithinFirstFiveDays()
    ? `${styles.declarar_horas_btn} ${styles.enabledButton}`
    : styles.declarar_horas_btn;

  // const currentMonth = capitalizeFirstLetter(
  // Caso precise pegar o mês atual
  //   format(new Date(), "MMMM", { locale: ptBR })
  // );

  const previousMonth = capitalizeFirstLetter(
    format(addMonths(new Date(), INDEX_PREVIOUS_MONTH), "MMMM", {
      locale: ptBR,
    })
  );

  const monthText = `Declarar as horas trabalhadas do mês de ${previousMonth}`;

  return (
    <section className={styles.mainContainer}>
      <div className={styles.main_container_div}>
        <div className={styles.main_container_div__p}>
          <p className={styles.main_container_p1}>Para marcar presença em um</p>
          <p className={styles.main_container_p2}>Workshop</p>
        </div>
        <div className={styles.linkPrimeiroBox}>
          <button className={styles.buttonLink} onClick={handleClick}>
            Clique aqui
          </button>
        </div>
      </div>
      <div className={styles.horas_declaradas_container}>
        <h3 className={styles.h3__text_horas}>{monthText}</h3>
        <button
          className={buttonClassName}
          disabled={!isWithinFirstFiveDays()}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
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
    </section>
  );
}
