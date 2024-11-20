/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import useGetUser from "../../hooks/useGetUser";

import AvaliarCadernos from "./components/AvaliarCadernos";
import AvaliarRedacoes from "./components/AvaliarRedacoes";
import DadosPresenca from "./components/DadosPresenca";
import DetalhesCadastro from "./components/DetalhesCadastro";
import DetalhesPresenca from "./components/DetalhesPresenca";
import GerenciamentoCadernos from "./components/GerenciamentoCadernos";
import GerenciamentoRedacoes from "./components/GerenciamentoRedacoes";
import HeaderAreaDeTrabalho from "./components/HeaderAreaDeTrabalho";
import NewsAndAgenda from "./components/NewsAndAgenda";
import PrimeiroBox from "./components/PrimeiroBox";
import VoluntarieSeButton from "./components/Voluntarie-se-Button";
import WorkshopsAssistidos from "./components/WorkshopsAssistidos";

import "react-toastify/dist/ReactToastify.css";
import styles from "./styles/AreaDeTrabalho.module.css";

export default function AreaDeTrabalhoTemplate() {
  const [auth, setAuth] = useState({});
  const { data: user } = useGetUser();

  if (!user) {
    return null;
  }

  const { idvol, pep } = user;

  const firstName = () => {
    const firstSpaceIndex = user.name.indexOf(" ");
    const indexOfString = -1;
    if (firstSpaceIndex !== indexOfString) {
      return user.name.substring(0, firstSpaceIndex);
    }
    return user.name;
  };

  useEffect(() => {
    const authObj = JSON.parse(localStorage.getItem("AUTH"));
    setAuth(authObj);
  }, []);

  return (
    <>
      <HeaderAreaDeTrabalho />
      <div className={styles.background}>
        <main className={styles.containerSections}>
          <section className={styles.sectionTitle}>
            <h1 className={styles.title}>Bem vindo(a), {firstName()}!</h1>
            <h2>id: {user?.idvol}</h2>
            <p>Aqui estão as suas atividades</p>
          </section>

          {pep !== 0 && <VoluntarieSeButton idvol={idvol} />}

          <aside className={styles.aside_container}>
            <PrimeiroBox idVol={idvol} user={user} />
            <WorkshopsAssistidos idvol={idvol} />
          </aside>

          {auth.readPermission === true && <AvaliarCadernos idvol={idvol} />}

          {auth.bookPermission === true && <AvaliarRedacoes idvol={idvol} />}

          {auth.essayModulePermission === true && <GerenciamentoRedacoes />}

          {auth.notebookModulePermission === true && <GerenciamentoCadernos />}

          {auth.manageVolunteerModulePermission === true && <DadosPresenca />}

          {auth.attendanceModulePermission === true && <DetalhesPresenca />}

          {auth.determineVolunteerModulePermission === true && (
            <DetalhesCadastro />
          )}

          {auth.moduleNewsPermission === true && <NewsAndAgenda />}

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
        </main>
      </div>
    </>
  );
}
