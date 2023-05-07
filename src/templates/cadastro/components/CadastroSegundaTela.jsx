import React, { useState } from 'react';
import countries from 'i18n-iso-countries';
import ptLocale from 'i18n-iso-countries/langs/pt.json';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';

const cadastroTela2Schema = yup.object().shape({
  pais: yup.string().required('Campo obrigatório'),
  estado: yup.string().required('Campo obrigatório'),
  cidade: yup.string().required('Campo obrigatório'),
  telefone: yup.string().required('Campo obrigatório'),
  escolaridade: yup.string().required('Campo obrigatório'),
  curso: yup.string().required('Campo obrigatório'),
});

export default function cadastroSegundaTela(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela2Schema),
  });

  const { setController, controller } = props;

  watch('pais', 'estado', 'cidade', 'telefone', 'escolaridade', 'curso');

  const onSubmit = () => {
    setController(controller + 1);
    reset();
  };

  countries.registerLocale(ptLocale);

  const countryObj = countries.getNames('pt', { select: 'official' });
  const countryArray = Object.entries(countryObj)
    .map(([key, value]) => ({ label: value, value: key }));
  const [selectedCountry, setSelectedCountry] = useState('');

  const selectCountryHandler = (value) => {
    setSelectedCountry(value);
  };

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(onSubmit) }
    >
      <section className={ styles.cadastroFormSectionInputContainer }>

        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="pais"
            className={ styles.cadastroFormSectionInputLabel }
          >
            País
          </label>
          <select
            name="pais"
            value={ selectedCountry }
            className={ styles.cadastroFormSectionInputText }
            onChange={ (e) => selectCountryHandler(e.target.value) }
            { ...register('pais') }
          >
            {countryArray?.length && countryArray.map(({ label, value }) => (
              <option key={ value } value={ value }>{ label }</option>
            ))}
          </select>

          {errors.pais && (
            <p className={ styles.inputError }>
              {errors.pais.message}
            </p>
          )}
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
            { ...register('estado') }
          />
          {errors.estado && (
            <p className={ styles.inputError }>
              {errors.estado.message}
            </p>
          )}
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label htmlFor="cidade" className={ styles.cadastroFormSectionInputLabel }>
            Cidade
          </label>
          <input
            name="cidade"
            placeholder="Digite seu estado"
            type="text"
            className={ styles.cadastroFormSectionInputText }
            { ...register('cidade') }
          />
          {errors.cidade && (
            <p className={ styles.inputError }>
              {errors.cidade.message}
            </p>
          )}
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
            { ...register('telefone') }
          />
          {errors.telefone && (
            <p className={ styles.inputError }>
              {errors.telefone.message}
            </p>
          )}
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
            name="escolaridade"
            { ...register('escolaridade') }
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
          { errors.escolaridade && (
            <p className={ styles.inputError }>
              {errors.escolaridade.message}
            </p>
          )}
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
            { ...register('curso') }
          />
          { errors.curso && (
            <p className={ styles.inputError }>
              {errors.curso.message}
            </p>
          )}
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label htmlFor="deficiencia" className={ styles.cadastroFormSectionInputLabel }>
            É pessoa com deficiência?
          </label>
          <select
            name="deficiencia"
            className={ styles.cadastroFormSectionInputText }
            { ...register('deficiencia') }
          >
            <option value="sim">sim</option>
            <option value="não">não</option>
            <option value="prefiro não dizer">prefiro não dizer</option>
          </select>
          { errors.deficiencia && (
            <p className={ styles.inputError }>
              {errors.deficiencia.message}
            </p>
          )}
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
      <button
        type="submit"
        className={ styleButton.cadastroFormSectionButton }
      >
        Próximo
      </button>
    </form>
  );
}
