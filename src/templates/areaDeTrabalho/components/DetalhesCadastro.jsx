import React, { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

import Grafico2 from "../../../../public/static/images/icons/grafico2.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";
import CustomDatePicker from "./DatePicker";

import Styles from "../styles/Dados.module.css";

export default function DetalhesCadastro() {
  const [selectedDate, setSelectDate] = useState(new Date());

  const getVolunters = async () => {
    const selectedDateString = format(selectedDate, "yyyy-MM-dd");
    const response = await api.get(
      `/volunteers/download/from/${selectedDateString}`,
      {
        responseType: "arraybuffer",
      }
    );

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `voluntarios-${selectedDateString}.xlsx`; // Nome do arquivo
    a.click();

    window.URL.revokeObjectURL(url);
  };

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
      <div className={Styles.calendarioDiv}>
        <p>Selecione uma data</p>
        <CustomDatePicker
          selectedDate={selectedDate}
          setSelectDate={setSelectDate}
        />
      </div>
      <div className={Styles.dadosSecondDiv}>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <BtnDados onClick={getVolunters} />
      </div>
    </section>
  );
}
