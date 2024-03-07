import React from "react";

import BtnGestao from "./BtnGestao";

import styles from "../styles/GestaoDeRelatorios.module.css";

const GestaoDeRelatorios = () => (
  <section className={styles.gestao_section}>
    <h2>Gestão de relatórios de livros</h2>
    <div className={styles.gestao_div}>
      <h3>Visualizar turma</h3>
      <div>
        <p>Insira o número da turma que deseja</p>
        <input placeholder="0000" type="text" />
      </div>
      <div className={styles.gestao_div_baixar}>
        <p>Visualizar na web</p>
        <span>ou</span>
        <BtnGestao text="Baixar" />
      </div>
    </div>
    <div className={styles.gestao_div2}>
      <h3>Editar número da turma</h3>
      <div>
        <p>Insira o número da turma que deseja editar</p>
        <input placeholder="0000" type="text" />
      </div>
      <div className={styles.gestao_div_baixar}>
        <p />
        <span />
        <BtnGestao text="Editar" />
      </div>
    </div>
    <div className={styles.gestao_div}>
      <h3>Lista de avaliação</h3>
      <div>
        <p>Baixar lista a partir da turma</p>
        <input placeholder="0000" type="text" />
      </div>
      <div className={styles.gestao_div_baixar}>
        <p>Visualizar na web</p>
        <span>ou</span>
        <BtnGestao text="Baixar" />
      </div>
    </div>
    <div className={styles.gestao_div_editar}>
      <h2>Editar avaliação de relatórios</h2>
      <p>Insira o número da turma que deseja editar</p>
      <input placeholder="0000" type="text" />
      <button className={styles.btnGestaoAvancar}>Avançar</button>
    </div>
  </section>
);

export default GestaoDeRelatorios;
