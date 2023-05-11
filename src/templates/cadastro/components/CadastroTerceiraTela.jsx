import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { AWARENESS, OPEN_TEXT_FIELDS, REFERRAL } from './constants';

import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';

import { cadastroTela3Schema } from './schemas';

export default function cadastroTerceiraTela({ buttonCallback } = props) {
  const [about, experience, expectations] = OPEN_TEXT_FIELDS;

  const {
    register,
    handleSubmit,
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
            defaultValue=""
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
            defaultValue=""
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
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('aboutYou') }
          />
          {errors.aboutYou && (
            <p className={ styles.inputError }>{errors.aboutYou.message}</p>
          )}
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
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('experience') }
          />
          {errors.experience && (
            <p className={ styles.inputError }>{errors.experience.message}</p>
          )}
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
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('expectations') }
          />
          {errors.expectations && (
            <p className={ styles.inputError }>{errors.expectations.message}</p>
          )}
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
