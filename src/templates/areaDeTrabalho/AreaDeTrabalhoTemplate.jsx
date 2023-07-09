import React from "react";

import AvaliarCadernos from "./components/AvaliarCadernos";
import AvaliarRedacoes from "./components/AvaliarRedacoes";
import HeaderAreaDeTrabalho from "./components/HeaderAreaDeTrabalho";
import PrimeiroBox from "./components/PrimeiroBox";
import WorkshopsAssistidos from "./components/WorkshopsAssistidos";

import styles from "./styles/AreaDeTrabalho.module.css";

export default function AreaDeTrabalhoTemplate() {
  return (
    <>
      <HeaderAreaDeTrabalho />
      <div className={styles.containerSections}>
        <section className={styles.main_container_section}>
          <div className={styles.sectionTitle}>
            <h1>Bem vindo, José</h1>
            <p>Aqui estão as suas atividades</p>
          </div>
          <PrimeiroBox />
          <WorkshopsAssistidos />
        </section>
        <AvaliarCadernos />
        <AvaliarRedacoes />
      </div>
    </>
  );
}
