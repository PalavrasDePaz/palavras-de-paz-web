import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { addMonths, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { useRequestStatus } from "../../../hooks/useCheckFormHoursHeader";
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

  const isRequestSuccessful = useRequestStatus(idVol); // Use your custom hook

  function isWithinFirstTenDays() {
    const tenthDay = 10;
    const currentDate = new Date();
    return currentDate.getDate() <= tenthDay;
  }

  const isWithinFirstTenDaysAndRequestUnsuccessful = () =>
    isWithinFirstTenDays() && !isRequestSuccessful;

  const [buttonText, setButtonText] = useState(
    isWithinFirstTenDaysAndRequestUnsuccessful() ? "Declarar" : "Indisponível"
  );

  useEffect(() => {
    setButtonText(
      isWithinFirstTenDaysAndRequestUnsuccessful() ? "Declarar" : "Indisponível"
    );
  }, [isRequestSuccessful]);

  const handleButtonClick = () => {
    if (buttonText === "Declarar") {
      push("/levantamento-horas");
    }
  };

  const buttonClassName =
    isWithinFirstTenDays() && isWithinFirstTenDaysAndRequestUnsuccessful()
      ? `${styles.declarar_horas_btn} ${styles.enabledButton}`
      : styles.declarar_horas_btn;

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
          disabled={!isWithinFirstTenDays()}
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
