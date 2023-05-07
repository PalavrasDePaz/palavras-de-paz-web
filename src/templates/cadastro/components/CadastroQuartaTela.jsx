import React from 'react';
import styles from '../styles/CadastroTelas.module.css';
import { DATA_1, DATA_2 } from './constants';

export default function CadastroQuartaTela() {
  return (
    <form className={ styles.cadastroFormSection }>
      <div className={ styles.cadastroFormDivContainer }>
        <p className={ styles.formParagraph }>
          Atualmente, essas são as nossas oportunidades de voluntariado. De
          quais você gostaria de participar?
        </p>
        { DATA_1.map((item, index) => (
          <div key={ index } className={ styles.cadastroFormDivCheckbox }>
            <input className={ styles.cadastroFormInputCheckbox } type="checkbox" />
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="text"
            >
              {item}

            </label>
          </div>
        ))}
      </div>

      <div className={ styles.cadastroFormDivContainer }>
        <p className={ styles.formParagraph }>
          A nossa organização é formada totalmente por voluntários. Caso surjam
          outras oporturnidades você gostaria de ajudar em alguma dessas áreas ?
        </p>
        { DATA_2.map((item, index) => (
          <div key={ index } className={ styles.cadastroFormDivCheckbox }>
            <input className={ styles.cadastroFormInputCheckbox } type="checkbox" />
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="text"
            >
              {item}

            </label>
          </div>
        ))}
      </div>

      <div className={ styles.cadastroFormDivContainer }>
        <p className={ styles.formParagraph }>
          Você precisa de declaração de horas de atividades voluntárias para a
          faculdade ou trabalho?
        </p>
        <select className={ styles.cadastroFormSectionInputText }>
          <option value="" hidden disabled>
            {' '}
            Selecione
          </option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
      </div>
    </form>
  );
}
