import React from "react";
import { ToastContainer } from "react-toastify";

import useGetUser from "../../hooks/useGetUser";

import AvaliarCadernos from "./components/AvaliarCadernos";
import AvaliarRedacoes from "./components/AvaliarRedacoes";
import DadosPresenca from "./components/DadosPresenca";
import DetalhesCadastro from "./components/DetalhesCadastro";
import DetalhesPresenca from "./components/DetalhesPresenca";
import HeaderAreaDeTrabalho from "./components/HeaderAreaDeTrabalho";
import PrimeiroBox from "./components/PrimeiroBox";
import WorkshopsAssistidos from "./components/WorkshopsAssistidos";

import "react-toastify/dist/ReactToastify.css";
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
            <h1 className={styles.title}>Bem vindo, {firstName()}!</h1>
            <h2>id: {user?.idvol}</h2>
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}
