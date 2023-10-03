import React from "react";

import useGetEssays from "../../../hooks/useGetEssays";

import ItemTurmaAvaliacao from "./ItemTurmaAvaliacao";

import styles from "../styles/AvaliarRedacoes.module.css";

type AvaliarRedacoesProps = {
  idvol: number;
};

export default function AvaliarRedacoes({ idvol }: AvaliarRedacoesProps) {
  const { data: essays } = useGetEssays(idvol);
  if (!essays) {
    return null;
  }
  essays.sort((a, b) => b.idclass - a.idclass);
  return (
    <section className={styles.avaliar_section}>
      <h1>Avaliar Redações</h1>
      <div className={styles.avaliar_itens}>
        <div className={styles.avaliarRedacoes_titles}>
          <span />
          <h2>Turma / Penitenciária</h2>
          <h2>Reservado em</h2>
          <h2>Concluido em</h2>
          <h2>Baixar Relatórios</h2>
          <h2>Formulário de avaliação</h2>
        </div>
        {essays &&
          essays.map(({ idclass, place, dateReserved }) => (
            <ItemTurmaAvaliacao
              idvol={idvol}
              idclass={idclass}
              place={place}
              dateReserved={dateReserved}
              key={idclass}
            />
          ))}
      </div>
    </section>
  );
}
