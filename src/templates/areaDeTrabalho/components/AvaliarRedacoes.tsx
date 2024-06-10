import React, { useEffect, useState } from "react";

import isReserved from "../../../helpers/isReserved";
import useGetEssays from "../../../hooks/useGetEssays";
import { IEssays } from "../types/interfaces";

import ItemTurmaAvaliacao from "./ItemTurmaAvaliacao";

import styles from "../styles/AvaliarRedacoes.module.css";

type AvaliarRedacoesProps = {
  idvol: number;
};

export default function AvaliarRedacoes({ idvol }: AvaliarRedacoesProps) {
  const { data: essays } = useGetEssays(idvol);
  const [essaysIn, setEssaysIn] = useState<IEssays[]>([]);

  useEffect(() => {
    if (essays) {
      const updatedEssays = essays.map((essay) => ({
        ...essay,
        reserved: isReserved(essay.dateReserved),
      }));
      setEssaysIn(updatedEssays);
    }
  }, [essays]);

  return (
    <section className={styles.avaliar_section}>
      <h1>Avaliar Redações</h1>
      <div className={styles.avaliarRedacoes_titles}>
        <span />
        <h2>Turma / Penitenciária</h2>
        <h2>Reservado em</h2>
        <h2>Concluido em</h2>
        <h2>Turma Concluida</h2>
        <h2>Baixar Relatórios</h2>
        <h2>Formulário de avaliação</h2>
      </div>
      <div className={styles.avaliar_itens}>
        {essaysIn &&
          essaysIn.map(
            ({ idclass, place, dateReserved, dateConcluded, reserved }) => (
              <ItemTurmaAvaliacao
                essaysIn={essaysIn}
                setEssaysIn={setEssaysIn}
                idvol={idvol}
                idclass={idclass}
                place={place}
                dateReserved={dateReserved}
                dateConcluded={dateConcluded}
                reserved={reserved}
                key={idclass}
              />
            )
          )}
      </div>
    </section>
  );
}
