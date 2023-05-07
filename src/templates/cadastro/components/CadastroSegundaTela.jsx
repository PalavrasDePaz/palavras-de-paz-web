import React, { useState } from 'react';
import countries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';
import styles from '../styles/CadastroTelas.module.css';

export default function cadastroSegundaTela() {
  countries.registerLocale(ptLocale);
  const countryObj = countries.getNames('pt', { select: 'official' });
  const countryArray = Object.entries(countryObj)
    .map(([key, value]) => ({ label: value, value: key }));
  const [selectedCountry, setSelectedCountry] = useState('');
  const selectCountryHandler = (value) => { setSelectedCountry(value); };
  return (

    <form className={ styles.cadastroFormSection }>

      <section className={ styles.cadastroFormSectionInputContainer }>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="pais"
            className={ styles.cadastroFormSectionInputLabel }
          >
            País
          </label>
          <select
            name="estado"
            value={ selectedCountry }
            className={ styles.cadastroFormSectionInputText }
            onChange={ (e) => selectCountryHandler(e.target.value) }
          >
            {countryArray?.length && countryArray.map(({ label, value }) => (
              <option key={ value } value={ value }>{ label }</option>
            ))}
          </select>
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label htmlFor="estado" className={ styles.cadastroFormSectionInputLabel }>
            Estado
          </label>
          <input
            name="estado"
            placeholder="Digite seu estado"
            type="text"
            className={ styles.cadastroFormSectionInputText }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label htmlFor="telefone" className={ styles.cadastroFormSectionInputLabel }>
            Telefone
          </label>
          <input
            name="telefone"
            placeholder="Digite seu telefone"
            type="text"
            className={ styles.cadastroFormSectionInputText }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="escolaridade"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Escolaridade
          </label>
          <select
            className={ styles.cadastroFormSectionInputText }
          >
            <option
              name="escolaridade"
              value="Ensino Médio"
            >
              Ensino Médio

            </option>
            <option
              name="escolaridade"
              value="Ensino Superior"
            >
              Ensino Superior

            </option>
            <option
              name="escolaridade"
              value="Ensino Fundamental"
            >
              Ensino Fundamental

            </option>
            <option
              name="escolaridade"
              value="Outro"
            >
              Outro

            </option>
          </select>
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label htmlFor="curso" className={ styles.cadastroFormSectionInputLabel }>
            Qual o Curso
          </label>
          <input
            placeholder="Digite seu curso"
            type="text"
            name="curso"
            className={ styles.cadastroFormSectionInputText }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label htmlFor="deficiencia" className={ styles.cadastroFormSectionInputLabel }>
            É pessoal com deficiência?
          </label>
          <select
            name="deficiencia"
            className={ styles.cadastroFormSectionInputText }
          >
            <option value="sim">sim</option>
            <option value="não">não</option>
            <option value="prefiro não dizer">prefiro não dizer</option>
          </select>
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="descricao-deficiencia"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Se sim, qual?
          </label>
          <input
            name="descricao-deficiencia"
            type="text"
            className={ styles.cadastroFormSectionInputText }
          />

        </div>
      </section>

    </form>
  );
}
