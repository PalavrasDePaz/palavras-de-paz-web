import React, { useState } from 'react';
import countries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';

export default function cadastroSegundaTela() {
  countries.registerLocale(ptLocale);
  const countryObj = countries.getNames('pt', { select: 'official' });
  const countryArray = Object.entries(countryObj)
    .map(([key, value]) => ({ label: value, value: key }));
  const [selectedCountry, setSelectedCountry] = useState('');
  const selectCountryHandler = (value) => { setSelectedCountry(value); };
  return (

    <form className="styles.cadastroFormSection">

      <section className="styles.cadastroFormSectionInputContainer">

        <div>
          <label>
            País
            <select
              value={ selectedCountry }
              onChange={ (e) => selectCountryHandler(e.target.value) }
            >
              {countryArray?.length && countryArray.map(({ label, value }) => (
                <option key={ value } value={ value }>{ label }</option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            Estado
            <input
              placeholder="Digite seu estado"
              type="text"
              className="styles.cadastroFormSectionInputText"
            />
          </label>
        </div>

        <div>
          <label>
            Telefone
            <input
              placeholder="Digite seu telefone"
              type="text"
              className="styles.cadastroFormSectionInputText"
            />
          </label>
        </div>

        <div>
          <label>
            Escolaridade
            <select>
              <option value="Ensino Médio">Ensino Médio</option>
              <option value="Ensino Superior">Ensino Superior</option>
              <option value="Ensino Fundamental">Ensino Fundamental</option>
              <option value="Outro">Outro</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Qual o Curso
            <input
              placeholder="Digite seu curso"
              type="text"
              className="styles.cadastroFormSectionInputText"
            />
          </label>
        </div>

        <div>
          <label>
            É pessoal com deficiência?
            <select>
              <option value="sim">sim</option>
              <option value="não">não</option>
              <option value="prefiro não dizer">prefiro não dizer</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Se sim, qual?
            <input
              type="text"
              className="styles.cadastroFormSectionInputText"
            />
          </label>

        </div>
      </section>

    </form>
  );
}
