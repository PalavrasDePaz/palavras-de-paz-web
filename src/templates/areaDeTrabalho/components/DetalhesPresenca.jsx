import React from "react";
import Image from "next/image";

import IconeLoading from "../../../../public/static/images/icons/iconeLoading.svg";

import BtnDados from "./BtnDados";

import Styles from "../styles/Dados.module.css";

export default function DetalhesPresenca() {
  return (
    <section className={Styles.containerSectionDados}>
      <div className={Styles.dadosFirstDiv}>
        <div className={Styles.detalhesDiv}>
          <Image src={IconeLoading} />
          <h2>
            Detalhes das presenças
            <br />
            dos voluntários
          </h2>
        </div>
      </div>
      <div className={Styles.calendarioDiv}>
        <span>Selecione uma data</span>
        <div>calendário</div>
      </div>
      <div className={Styles.dadosSecondDiv}>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <BtnDados />
      </div>
    </section>
  );
}
