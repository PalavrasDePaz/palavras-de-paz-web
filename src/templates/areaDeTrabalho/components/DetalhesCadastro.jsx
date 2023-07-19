import React from "react";
import Image from "next/image";

import Grafico2 from "../../../../public/static/images/icons/grafico2.svg";

import BtnDados from "./BtnDados";

import Styles from "../styles/AreaDeTrabalho.module.css";

export default function DetalhesCadastro() {
  return (
    <section className={Styles.containerSectionDados}>
      <div className={Styles.dadosFirstDiv}>
        <Image src={Grafico2} />
        <h2>
          Detalhes de Cadastro
          <br />
          dos voluntários
        </h2>
      </div>
      <div className={Styles.dadosSecondDiv}>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <BtnDados />
      </div>
    </section>
  );
}
