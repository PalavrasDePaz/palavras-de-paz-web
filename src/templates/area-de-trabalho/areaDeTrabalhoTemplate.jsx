import React from 'react';
import Image from 'next/image';

import Download from '../../../public/static/images/icons/download.svg';

import HeaderAreaDeTrabalho from './components/HeaderAreaDeTrabalho';

import Styles from './styles/AreaDeTrabalho.module.css';

export default function AreaDeTrabalhoTemplate() {
  return (
    <>
      <HeaderAreaDeTrabalho />
      <div className={ Styles.containerSections }>
        <section className={ Styles.main_container_section }>
          <div className={ Styles.sectionTitle }>
            <h1>Bem vindo, José</h1>
            <p>Aqui estão as suas atividades</p>
          </div>
          <div className={ Styles.mainContainer }>
            <div className={ Styles.main_container_div }>
              <p className={ Styles.main_container_p1 }>
                Para marcar presença em um
              </p>
              <p className={ Styles.main_container_p2 }>Workshop</p>
              <button className={ Styles.main_container_button }>
                Clique aqui
              </button>
            </div>
            <h3>Relatórios de leitura avaliados:</h3>
            <h3>Cadernos avaliados:</h3>
          </div>
          <div className={ Styles.tableContent }>
            <div className={ Styles.tableTitles }>
              <h4 className={ Styles.tableTitle1 }>Data</h4>
              <h4 className={ Styles.tableTitle2 }>Workshops Assistidos</h4>
            </div>
            <div className={ Styles.tableDate }>
              <p>04/03/2023</p>
              <p>Paz</p>
            </div>
          </div>
        </section>
        <section className={ Styles.avaliarCadernos_section }>
          <h1>Avaliar Cadernos</h1>
          <div className={ Styles.avaliarCadernos_itens }>
            <div className={ Styles.avaliarCadernos_opcoes }>
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>
          <div className={ Styles.avaliarCadernos_itens }>
            <h2>Aluno</h2>
            <div className={ Styles.avaliarCadernos_opcoes }>
              <span>Ricardo</span>
              <span>Maura</span>
            </div>
          </div>
          <div className={ Styles.avaliarCadernos_itens }>
            <h2>Reservado em</h2>
            <div className={ Styles.avaliarCadernos_opcoes }>
              <span>Reservado</span>
              <span>Não reservado</span>
            </div>
          </div>
          <div className={ Styles.avaliarCadernos_itens }>
            <h2>Baixar Caderno</h2>
            <div className={ Styles.avaliarCadernos_baixar }>
              <Image src={ Download } alt="icone de download" />
              <span>Download</span>
            </div>
            <div className={ Styles.avaliarCadernos_baixar }>
              <Image src={ Download } alt="icone de download" />
              <span>Download</span>
            </div>
          </div>
          <div className={ Styles.avaliarCadernos_itens }>
            <h2>Formulário de avaliação</h2>
            <div className={ Styles.avaliarCadernos_opcoes }>
              <span>Preencher formulário</span>
              <span>Preencher formulário</span>
            </div>
          </div>
          <footer className={ Styles.footer }>
            <p>Selecione um caderno para avaliar</p>
          </footer>
        </section>
      </div>
    </>
  );
}
