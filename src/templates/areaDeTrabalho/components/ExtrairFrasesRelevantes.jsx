/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */
/* eslint-disable react/jsx-no-bind */

import React, { useState } from "react";
import Image from "next/image";
import { format } from "date-fns";

import { toast } from "react-toastify";
import Grafico from "../../../../public/static/images/icons/grafico.svg";
import { api } from "../../../api";

import BtnDados from "./BtnDados";
import CustomDatePicker from "./DatePicker";

import Styles from "../styles/Dados.module.css";

export default function ExtrairFrasesRelevantes() {
  const [selectedDateRedacoes, setSelectDateRedacoes] = useState(new Date());
  const [selectedDateReflexoes, setSelectDateReflexoes] = useState(new Date());

  const getFrasesRelevantesRedacoes = async () => {
    try {
      const selectedDateString = format(selectedDateRedacoes, "yyyy-MM-dd");
      const response = await api.get(
        `/book-evaluations/relevant/phrases/${selectedDateString}/download`,
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
      a.download = `frases-relevantes-redacoes-${selectedDateString}.xlsx`; // Nome do arquivo
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Erro ao baixar os dados");
    }
  };

  const getFrasesRelevantesReflexoes = async () => {
    try {
      const selectedDateString = format(selectedDateReflexoes, "yyyy-MM-dd");
      const response = await api.get(
        `/notebooks/reflections/${selectedDateString}/download`,
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
      a.download = `frases-relevantes-reflexoes-${selectedDateString}.xlsx`; // Nome do arquivo
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Erro ao baixar os dados");
    }
  };

  return (
    <section className={Styles.containerSectionDados}>
      <div className={Styles.dadosFirstDiv}>
        <Image src={Grafico} />
        <h2>Extrair frases relevantes</h2>
      </div>
      <div className={Styles.calendarioDiv}>
        <p style={{ fontSize: 18 }}>Extrair de Redações</p>
        <p>Selecione uma data de início</p>
        <CustomDatePicker
          selectedDate={selectedDateRedacoes}
          setSelectDate={setSelectDateRedacoes}
        />
      </div>
      <div className={Styles.dadosSecondDivFrasesRelevantes}>
        <BtnDados onClick={getFrasesRelevantesRedacoes} />
      </div>

      <div className={Styles.calendarioDiv}>
        <p style={{ fontSize: 18 }}>Extrair de Reflexões</p>
        <p>Selecione uma data de início</p>
        <CustomDatePicker
          selectedDate={selectedDateReflexoes}
          setSelectDate={setSelectDateReflexoes}
        />
      </div>
      <div className={Styles.dadosSecondDivFrasesRelevantes}>
        <BtnDados onClick={getFrasesRelevantesReflexoes} />
      </div>
    </section>
  );
}
