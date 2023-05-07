import React from 'react';
import Styles from '../styles/CadastroTelas.module.css';

export default function CadastroQuartaTela() {
  return (
    <form className={ Styles.cadastroFormSection }>
      <div className={ Styles.cadastroFormDivContainer }>
        <p>
          Atualmente, essas são as nossas oportunidades de voluntariado.
          De quais você gostaria de participar?
        </p>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Facilitador presencial </label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Facilitador virtual</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Avaliador remoto</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Captação de voluntário</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Leitura de caderno de presos Virtual</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Tradutor remoto</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Divulgação</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Captação de grupos</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Leitura de redação dos presos virtual</label>
        </div>
      </div>
      <div className={ Styles.cadastroFormDivContainer }>
        <p>
          A nossa organização é formada totalmente por voluntários.
          Caso surjam outras oporturnidades você gostaria de ajudar em alguma dessas áreas
          ?
        </p>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Administração</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Comunicação</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Jornalismo</label>
        </div>
        <div className="empty" />
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Mídias Sociais</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Rádio e Televisão</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Recursos Humanos</label>
        </div>
        <div className="empty" />
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Tecnologia da Informação</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Psicologia</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Assistência Social</label>
        </div>
        <div className={ Styles.cadastroFormDivCheckbox }>
          <input className={ Styles.cadastroFormInputCheckbox } type="checkbox" />
          <label htmlFor="text">Outros</label>
        </div>
      </div>
      <div className={ Styles.cadastroFormDivContainer }>
        <p>
          Você precisa de declaração de horas de atividades
          voluntárias para a faculdade ou trabalho?
        </p>
        <select className={ Styles.cadastroFormSectionInputText }>
          <option value="" hidden disabled>              Selecione</option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </div>
    </form>
  );
}
