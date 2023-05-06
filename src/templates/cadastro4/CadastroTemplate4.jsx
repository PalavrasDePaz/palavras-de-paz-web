import React from 'react';
import Styles from '../cadastro/styles/CadastroTelas.module.css';
import StylesTemplate from '../cadastro/styles/CadastroTemplate.module.css';

function CadastroTemplate4() {
  return (
    <form className={ Styles.cadastroFormSection }>
      <div>
        <p>
          Atualmente, essas são as nossas oportunidades de voluntáriado.
          De quais você gostaria de participar?
        </p>
        <ul className="check" action="./">
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Facilitador presencial </label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Facilitador virtual</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Avaliador remoto</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Captação de voluntário</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Leitura de caderno de presos Virtual</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Tradutor remoto</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Divulgação</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Captação de grupos</label>
          </li>
          <li className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Leitura de redação dos presos virtual</label>
          </li>
        </ul>
      </div>
      <div className={ Styles.cadastroFormSection }>
        <p>
          A nossa organização é formada totalmente por voluntários.
          Caso surjam outras oporturnidades você gostaria de ajudar em alguma dessas áreas?
        </p>
        <ul className="check" action="./">
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Administração</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Comunicação</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Jornalismo</label>
          </div>
          <div className="empty"></div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Mídias Sociais</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Rádio e Televisão</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Recursos Humanos</label>
          </div>
          <div className="empty"></div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Tecnologia da Informação</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Psicologia</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Assistência Social</label>
          </div>
          <div className="box font">
            <input className="input" type="checkbox"/>
            <label htmlFor="text">Outros</label>
          </div>
        </ul>
      </div>
      <div className={ Styles.cadastroFormSection }>
        <p>
          Você precisa de declaração de horas de atividades
          voluntárias para a faculdade ou trabalho?
        </p>
        <select name="selecione" id="selecione">
          <option value="selecione">Selecione</option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </div>
    </form>
  );
}

export default CadastroTemplate4;
