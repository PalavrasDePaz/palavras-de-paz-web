import React from "react";

import BtnGestao from "./BtnGestao";

import styles from "../styles/GestaoDeRelatorios.module.css";

const GestaoDeRelatorios = () => {
  const [setNumber, useSetNumber] = React.useState(null);
  return (
    <section className={styles.gestao_section}>
      <h2>Gestão de relatórios de livros</h2>
      <div className={styles.gestao_div}>
        <h3>Visualizar turma</h3>
        <div className={styles.gestao_div_numero}>
          <p>Insira o número da turma que deseja</p>
          <input placeholder="0000" type="text" />
        </div>
        <div className={styles.gestao_div_baixar}>
          <p>Visualizar na web</p>
          <span>ou</span>
          <BtnGestao />
        </div>
      </div>
      <div className={styles.gestao_div2}>
        <h3>Editar número da turma</h3>
        <div className={styles.gestao_div_numero}>
          <p>Insira o número da turma que deseja editar</p>
          <input placeholder="0000" type="text" />
        </div>
        <div className={styles.gestao_div_baixar}>
          <p />
          <span />
          <button>Editar</button>
        </div>
      </div>
      <div className={styles.gestao_div}>
        <h3>Lista de avaliação</h3>
        <div className={styles.gestao_div_numero}>
          <p>Baixar lista a partir da turma</p>
          <input placeholder="0000" type="text" />
        </div>
        <div className={styles.gestao_div_baixar}>
          <p>Visualizar na web</p>
          <span>ou</span>
          <BtnGestao />
        </div>
      </div>
      <div className={styles.gestao_div_editar}>
        <h2>Editar avaliação da turma</h2>
        <p>Insira o número da turma que deseja editar</p>
        <input placeholder="0000" type="text" />
        <button>Avançar</button>
      </div>
    </section>
  );
};

export default GestaoDeRelatorios;
