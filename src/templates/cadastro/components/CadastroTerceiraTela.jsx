import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { AWARENESS, OPEN_TEXT_FIELDS, REFERRAL } from './constants';

import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';

import { cadastroTela3Schema } from './schemas';
import ErrorMessage from '../../../components/forms/ErrorMessage';

export default function cadastroTerceiraTela({
  buttonCallback,
  returnButton,
  data,
} = props) {
  const [about, experience, expectations] = OPEN_TEXT_FIELDS;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela3Schema),
  });

  const adjustTextAreaSize = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${ e.target.scrollHeight }px`;
  };

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(buttonCallback) }
    >
      <section className={ styles.cadastroFormSectionInputContainer }>
        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ REFERRAL.fieldLabel }
          >
            {REFERRAL.fieldLabel}
          </label>
          <select
            defaultValue={ data.referral || '' }
            className={ styles.cadastroFormSectionInputText }
            { ...register('referral') }
          >
            <option value="" hidden disabled>
              Selecione
            </option>
            {REFERRAL.options.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ AWARENESS.fieldLabel }
          >
            {AWARENESS.fieldLabel}
          </label>
          <select
            defaultValue={ data.awareness || '' }
            className={ styles.cadastroFormSectionInputText }
            { ...register('awareness') }
          >
            <option value="" hidden disabled>
              Selecione
            </option>
            {AWARENESS.options.map(({ label, value }) => (
              <option key={ value } value={ value }>
                {label}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section>
        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ about.label }
          >
            {about.text}
          </label>
          <textarea
            maxLength={ 300 }
            defaultValue={ data.aboutYou }
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('aboutYou') }
          />
          <ErrorMessage showError={ errors.aboutYou } style={ styles.inputError } />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ experience.label }
          >
            {experience.text}
          </label>
          <textarea
            maxLength={ 300 }
            defaultValue={ data.experience }
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('experience') }
          />
          <ErrorMessage
            showError={ errors.experience }
            style={ styles.inputError }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ expectations.label }
          >
            {expectations.text}
          </label>
          <textarea
            maxLength={ 300 }
            defaultValue={ data.expectations }
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('expectations') }
          />
          <ErrorMessage
            showError={ errors.expectations }
            style={ styles.inputError }
          />
        </div>
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
