import React from "react";
import Image from "next/image";

import Grafico from "../../../../public/static/images/icons/grafico.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";

import Styles from "../styles/Dados.module.css";

export default function DadosPresenca() {
  const getDadosAttendances = async () => {
    const response = await api.get(`/attendances/metrics/download`, {
      responseType: "arraybuffer",
    });

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `dados-presencas.xlsx`; // Nome do arquivo
    a.click();

    window.URL.revokeObjectURL(url);
  };
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
        <BtnDados onClick={getDadosAttendances} />
      </div>
    </section>
  );
}
