import React from "react";

import useGetUser from "../../hooks/useGetUser";

import AvaliarCadernos from "./components/AvaliarCadernos";
import AvaliarRedacoes from "./components/AvaliarRedacoes";
import DadosPresenca from "./components/DadosPresenca";
import DetalhesCadastro from "./components/DetalhesCadastro";
import DetalhesPresenca from "./components/DetalhesPresenca";
import HeaderAreaDeTrabalho from "./components/HeaderAreaDeTrabalho";
import PrimeiroBox from "./components/PrimeiroBox";
import WorkshopsAssistidos from "./components/WorkshopsAssistidos";

import styles from "./styles/AreaDeTrabalho.module.css";

export default function AreaDeTrabalhoTemplate() {
  const { data: user } = useGetUser();
  const idvol = user?.idvol;

  return (
    <>
      <HeaderAreaDeTrabalho />
      <div className={styles.containerSections}>
        <section className={styles.main_container_section}>
          <div className={styles.sectionTitle}>
            <h1>Bem vindo, {user?.name}</h1>
            <p>Aqui estão as suas atividades</p>
          </div>
          <PrimeiroBox />
          {idvol && <WorkshopsAssistidos idvol={idvol} />}
        </section>
        <AvaliarCadernos />
        <AvaliarRedacoes />
        <DadosPresenca />
        <DetalhesPresenca />
        <DetalhesCadastro />
      </div>
    </>
  );
}
