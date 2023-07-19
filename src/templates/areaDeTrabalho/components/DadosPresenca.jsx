import React from "react";
import Image from "next/image";

import Grafico from "../../../../public/static/images/icons/grafico.svg";

import BtnDados from "./BtnDados";

import Styles from "../styles/AreaDeTrabalho.module.css";

export default function DadosPresenca() {
  return (
    <section className={Styles.containerSectionDados}>
      <div className={Styles.dadosFirstDiv}>
        <Image src={Grafico} width="170px" height="170px" />
        <div>
          <h2>
            Dados e presença
            <br />
            dos voluntários
          </h2>
          <p>Acompanhe os registros e as atividades dos voluntários.</p>
        </div>
      </div>
      <div className={Styles.dadosSecondDiv}>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <BtnDados />
      </div>
    </section>
  );
}
