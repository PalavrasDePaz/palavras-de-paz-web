import React from "react";
import Image from "next/image";

import DownloadImage from "../../../../public/static/images/icons/download.svg";
import useGetEssays from "../../../hooks/useGetEssays";

import styles from "../styles/Avaliar.module.css";

type AvaliarRedacoesProps = {
  idvol: number;
};
// Proximo commit : troquei extensão para jsx. Adicionei no template da area de trabalho uma props com o id do usuário. Criei const para pegar os dados recuperados da API.
// Proximo passo: mapear const essays
export default function AvaliarRedacoes({ idvol }: AvaliarRedacoesProps) {
  const { data: essays } = useGetEssays(idvol);

  const naoReservado = "Não reservado";
  const preencher = "Preencher Formulário";

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
            <div className={styles.avaliarRedacoes_status} key={idclass}>
              <input type="checkbox" />
              <p>{`${idclass}-${place}`}</p>
              <p>{dateReserved ? "Reservado" : "Não Reservado"}</p>
              <p>{naoReservado}</p>
              <div className={styles.avaliarRedacoes_status_div}>
                <Image src={DownloadImage} alt="icone de download" />
                <p>Download</p>
              </div>
              <p className={styles.avaliarRedacoes_status_p5}>{preencher}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
