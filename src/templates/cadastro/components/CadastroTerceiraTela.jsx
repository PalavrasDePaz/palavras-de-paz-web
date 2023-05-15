import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { knowledgePep, OPEN_TEXT_FIELDS, howFoundPep } from './constants';

import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';

import { cadastroTela3Schema } from './schemas';
import ErrorMessage from '../../../components/forms/ErrorMessage';
import EmptyOption from '../../../components/forms/EmptyOption';

export default function cadastroTerceiraTela({
  buttonCallback,
  returnButton,
  data,
} = props) {
  const [about, lifeExperience, desires] = OPEN_TEXT_FIELDS;

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
            htmlFor={ howFoundPep.fieldLabel }
          >
            {howFoundPep.fieldLabel}
          </label>
          <select
            defaultValue={ data.howFoundPep || '' }
            className={ styles.cadastroFormSectionInputText }
            { ...register('howFoundPep') }
          >
            <EmptyOption />
            {howFoundPep.options.map((option) => (
              <option key={ option } value={ option }>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ knowledgePep.fieldLabel }
          >
            {knowledgePep.fieldLabel}
          </label>
          <select
            defaultValue={ data.knowledgePep || '' }
            className={ styles.cadastroFormSectionInputText }
            { ...register('knowledgePep') }
          >
            <EmptyOption />
            {knowledgePep.options.map(({ label, value }) => (
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
            defaultValue={ data.studiesKnowledge }
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('studiesKnowledge') }
          />
          <ErrorMessage
            showError={ errors.studiesKnowledge }
            style={ styles.inputError }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ lifeExperience.label }
          >
            {lifeExperience.text}
          </label>
          <textarea
            maxLength={ 300 }
            defaultValue={ data.lifeExperience }
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('lifeExperience') }
          />
          <ErrorMessage
            showError={ errors.lifeExperience }
            style={ styles.inputError }
          />
        </div>

        <div className={ styles.cadastroFormDiv }>
          <label
            className={ styles.cadastroFormSectionInputLabel }
            htmlFor={ desires.label }
          >
            {desires.text}
          </label>
          <textarea
            maxLength={ 300 }
            defaultValue={ data.desires }
            className={ styles.cadastroFormSectionInputText }
            onKeyDown={ adjustTextAreaSize }
            { ...register('desires') }
          />
          <ErrorMessage showError={ errors.desires } style={ styles.inputError } />
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
