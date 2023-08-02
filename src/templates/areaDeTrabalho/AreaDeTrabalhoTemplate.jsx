import React from "react";

import useGetUser from "../../hooks/useGetUser";

import AvaliarCadernos from "./components/AvaliarCadernos";
import AvaliarRedacoes from "./components/AvaliarRedacoes";
import HeaderAreaDeTrabalho from "./components/HeaderAreaDeTrabalho";
import PrimeiroBox from "./components/PrimeiroBox";
import WorkshopsAssistidos from "./components/WorkshopsAssistidos";

import styles from "./styles/AreaDeTrabalho.module.css";

export default function AreaDeTrabalhoTemplate() {
  const { data: user } = useGetUser();

  if (!user) {
    return null;
  }

  const { idvol } = user;

  return (
    <>
      <HeaderAreaDeTrabalho />
      <div className={styles.containerSections}>
        <section className={styles.main_container_section}>
          <div className={styles.sectionTitle}>
            <h1>Bem vindo, {user?.name} !</h1>
            <p>Aqui estão as suas atividades</p>
          </div>
          <PrimeiroBox />
          <WorkshopsAssistidos idvol={idvol} />
        </section>
        <AvaliarCadernos idvol={idvol} />
        <AvaliarRedacoes />
      </div>
    </>
  );
}
