import React from "react";

import useGetUser from "../../hooks/useGetUser";

import AvaliarCadernos from "./components/AvaliarCadernos";
import AvaliarRedacoes from "./components/AvaliarRedacoes";
import DadosPresenca from "./components/DadosPresenca";
import DetalhesCadastro from "./components/DetalhesCadastro";
import DetalhesPresenca from "./components/DetalhesPresenca";
import GestaoDeRelatorios from "./components/GestaoDeRelatorios";
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

  const firstName = () => {
    const firstSpaceIndex = user.name.indexOf(" ");
    const indexOfString = -1;
    if (firstSpaceIndex !== indexOfString) {
      return user.name.substring(0, firstSpaceIndex);
    }
    return user.name;
  };

  return (
    <>
      <HeaderAreaDeTrabalho />
      <div className={styles.containerSections}>
        <section className={styles.main_container_section}>
          <div className={styles.sectionTitle}>
            <h1>
              Bem vindo, {firstName()} {user?.idvol}
            </h1>
            <p>Aqui estão as suas atividades</p>
          </div>
          <PrimeiroBox idVol={idvol} />
          <WorkshopsAssistidos idvol={idvol} />
        </section>
        <AvaliarCadernos idvol={idvol} />
        <AvaliarRedacoes idvol={idvol} />

        <DadosPresenca />
        <DetalhesPresenca />
        <DetalhesCadastro />
        <GestaoDeRelatorios />
      </div>
    </>
  );
}
