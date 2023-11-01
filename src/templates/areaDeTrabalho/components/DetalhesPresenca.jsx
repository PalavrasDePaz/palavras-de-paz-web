/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { registerLocale } from "react-datepicker";

import IconeLoading from "../../../../public/static/images/icons/iconeLoading.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";
import CustomDatePicker from "./DatePicker";

import Styles from "../styles/Dados.module.css";

registerLocale("ptBR", ptBR);

export default function DetalhesPresenca() {
  const [selectedDate, setSelectDate] = useState(new Date());

  const getAttendances = async () => {
    const selectedDateString = format(selectedDate, "yyyy-MM-dd");
    const response = await api.get(`/attendances/from/${selectedDateString}`, {
      responseType: "arraybuffer",
    });

    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `presenças-${selectedDateString}.xlsx`; // Nome do arquivo
    a.click();

    window.URL.revokeObjectURL(url);
  };

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
        <p>Selecione uma data</p>
        <CustomDatePicker
          selectedDate={selectedDate}
          setSelectDate={setSelectDate}
        />
      </div>
      <div className={Styles.dadosSecondDiv}>
        <a href="./">Visualizar na web</a>
        <span> ou </span>
        <BtnDados onClick={getAttendances} />
      </div>
    </section>
  );
}
