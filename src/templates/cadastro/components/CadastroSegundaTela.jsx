/* eslint-disable max-lines */
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';
import { SCHOOLING_OPTIONS, countryArray, statesArray } from './constants';
import { cadastroTela2Schema } from './schemas';
import ErrorMessage from '../../../components/forms/ErrorMessage';
import EmptyOption from '../../../components/forms/EmptyOption';
import { getIsHigherEducation } from './util';

export default function cadastroSegundaTela({
  buttonCallback,
  returnButton,
  data,
} = props) {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela2Schema),
  });

  const country = watch('country', 'Brasil');
  const schoolingLevel = watch('schooling', '');
  const isInHigherEducation = getIsHigherEducation(schoolingLevel)
    || getIsHigherEducation(data.schooling);
  const disability = watch('deficiencia', 'não');

  const hasDisability = disability === 'sim' || data.disability === 'sim';

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(buttonCallback) }
    >
      <section className={ styles.cadastroFormSectionInputContainer }>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="country"
            className={ styles.cadastroFormSectionInputLabel }
          >
            País
          </label>
          <select
            defaultValue={ data.country || 'Brasil' }
            className={ styles.cadastroFormSectionInputText }
            { ...register('country') }
          >
            {countryArray.map(({ label, value }) => (
              <option key={ value } value={ value }>
                {label}
              </option>
            ))}
          </select>
          <ErrorMessage showError={ errors.country } style={ styles.inputError } />
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="state"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Estado
          </label>
          {country === 'Brasil' ? (
            <select
              defaultValue={ data.state || '' }
              className={ styles.cadastroFormSectionInputText }
              { ...register('state') }
            >
              <EmptyOption />
              {statesArray.map(({ label, value }) => (
                <option key={ value } value={ value }>
                  {label}
                </option>
              ))}
            </select>
          ) : (
            <input
              placeholder="Digite seu estado"
              defaultValue={ data.state || '' }
              type="text"
              className={ styles.cadastroFormSectionInputText }
              { ...register('state') }
            />
          )}
          <ErrorMessage showError={ errors.state } style={ styles.inputError } />
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="city"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Cidade
          </label>
          <input
            placeholder="Digite sua cidade"
            defaultValue={ data.city || '' }
            type="text"
            maxLength={ 28 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('city') }
          />
          <ErrorMessage showError={ errors.city } style={ styles.inputError } />
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="phoneNumber"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Telefone
          </label>
          <input
            placeholder="Digite seu telefone"
            type="tel"
            defaultValue={ data.phoneNumber }
            maxLength={ 15 }
            minLength={ 3 }
            className={ styles.cadastroFormSectionInputText }
            { ...register('phoneNumber') }
          />
          <ErrorMessage
            showError={ errors.phoneNumber }
            style={ styles.inputError }
          />
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="birthDate"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Data de nascimento
          </label>
          <input
            type="date"
            defaultValue={ data.birthDate?.toISOString().split('T')[0] }
            className={ styles.cadastroFormSectionInputText }
            { ...register('birthDate') }
          />
          <ErrorMessage
            showError={ errors.birthDate }
            style={ styles.inputError }
          />
        </div>
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="schooling"
            className={ styles.cadastroFormSectionInputLabel }
          >
            Escolaridade
          </label>
          <select
            className={ styles.cadastroFormSectionInputText }
            defaultValue={ data.schooling || '' }
            { ...register('schooling') }
          >
            <EmptyOption />
            {SCHOOLING_OPTIONS.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
          <ErrorMessage
            showError={ errors.schooling }
            style={ styles.inputError }
          />
        </div>
        {isInHigherEducation && (
          <div className={ styles.cadastroFormDiv }>
            <label
              htmlFor="bachelor"
              className={ styles.cadastroFormSectionInputLabel }
            >
              Qual o Curso
            </label>
            <input
              placeholder="Digite seu curso"
              type="text"
              defaultValue={ data.bachelor }
              maxLength={ 40 }
              className={ styles.cadastroFormSectionInputText }
              { ...register('bachelor') }
            />
            <ErrorMessage
              showError={ errors.bachelor }
              style={ styles.inputError }
            />
          </div>
        )}
        <div className={ styles.cadastroFormDiv }>
          <label
            htmlFor="deficiencia"
            className={ styles.cadastroFormSectionInputLabel }
          >
            É pessoa com deficiência?
          </label>
          <select
            className={ styles.cadastroFormSectionInputText }
            defaultValue={ data.deficiencia || '' }
            { ...register('deficiencia') }
          >
            <EmptyOption />
            <option value="sim">Sim</option>
            <option value="não">Não</option>
            <option value="prefiro não dizer">Prefiro não dizer</option>
          </select>
          <ErrorMessage
            showError={ errors.deficiencia }
            style={ styles.inputError }
          />
        </div>
        {hasDisability && (
          <div className={ styles.cadastroFormDiv }>
            <label
              htmlFor="disability"
              className={ styles.cadastroFormSectionInputLabel }
            >
              Qual?
            </label>
            <input
              type="text"
              defaultValue={ data.disability }
              maxLength={ 30 }
              className={ styles.cadastroFormSectionInputText }
              { ...register('disability') }
            />
            <ErrorMessage
              showError={ errors.disability }
              style={ styles.inputError }
            />
          </div>
        )}
      </section>
      <div className={ styles.buttonsRow }>
        <button
          type="button"
          className={ styleButton.cadastroFormSectionButton }
          onClick={ () => returnButton(getValues()) }
        >
          Anterior
        </button>
        <button type="submit" className={ styleButton.cadastroFormSectionButton }>
          Próximo
        </button>
      </div>
    </form>
  );
}
