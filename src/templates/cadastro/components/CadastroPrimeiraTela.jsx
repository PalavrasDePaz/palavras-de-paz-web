import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../styles/CadastroTelas.module.css';
import styleButton from '../styles/CadastroTemplate.module.css';
import {
  INVALID_MAIL,
  MANDATORY_FIELD,
  PASS_MIN,
  PASS_MISMATCH,
  minCharsMessage,
} from './constants';
import ErrorMessage from '../../../components/forms/ErrorMessage';

const MIN_PASSWORD_LENGTH = 6;
const MIN_CHARS = 3;
const MAX_CHARS = 24;

const schema = yup.object().shape({
  name: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS, minCharsMessage(MIN_CHARS))
    .max(MAX_CHARS),
  email: yup
    .string()
    .email(INVALID_MAIL)
    .required(MANDATORY_FIELD)
    .min(MIN_CHARS, minCharsMessage(MIN_CHARS))
    .max(MAX_CHARS),
  password: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_PASSWORD_LENGTH, PASS_MIN),
  passConfirmation: yup
    .string()
    .required(MANDATORY_FIELD)
    .min(MIN_PASSWORD_LENGTH, PASS_MIN)
    .equals([yup.ref('password')], PASS_MISMATCH),
});

export default function cadastroPrimeiraTela({ buttonCallback, data } = props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(buttonCallback) }
    >
      <section>
        <h1 className={ styles.formTitle }>CADASTRO DE VOLUNTÁRIOS</h1>

        <p className={ styles.formParagraph }>
          Seja bem-vindo(a)! Preparamos este formulário para podermos te
          conhecer melhor, saber sobre seus conhecimentos e experiências, e
          também para entendermos a sua disponibilidade com o nosso
          voluntariado. Quanto mais você puder compartilhar com a gente, mais
          conseguiremos te ajudar a alcançar seus objetivos! O preenchimento
          tomará no máximo dez minutos do seu tempo! Bora lá?
        </p>

        <section className={ styles.cadastroFormSectionInputContainer }>
          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="name"
            >
              Nome
            </label>

            <input
              placeholder="Digite seu nome"
              type="text"
              maxLength={ 24 }
              defaultValue={ data.name }
              className={ styles.cadastroFormSectionInputText }
              { ...register('name') }
            />
            <ErrorMessage showError={ errors.name } style={ styles.inputError } />
          </div>

          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="email"
            >
              Email
            </label>

            <input
              placeholder="Digite seu email"
              type="text"
              maxLength={ 24 }
              defaultValue={ data.email }
              className={ styles.cadastroFormSectionInputText }
              { ...register('email') }
            />
            <ErrorMessage showError={ errors.email } style={ styles.inputError } />
          </div>

          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="password"
            >
              Senha
            </label>

            <input
              placeholder="Digite sua senha"
              type="password"
              maxLength={ 12 }
              defaultValue={ data.password }
              className={ styles.cadastroFormSectionInputText }
              { ...register('password') }
            />
            <ErrorMessage
              showError={ errors.password }
              style={ styles.inputError }
            />
          </div>

          <div className={ styles.cadastroFormDiv }>
            <label
              className={ styles.cadastroFormSectionInputLabel }
              htmlFor="password"
            >
              Confirme sua senha
            </label>

            <input
              type="password"
              maxLength={ 12 }
              defaultValue={ data.passConfirmation }
              className={ styles.cadastroFormSectionInputText }
              placeholder="Confirme sua senha"
              { ...register('passConfirmation') }
            />
            <ErrorMessage
              showError={ errors.passConfirmation }
              style={ styles.inputError }
            />
          </div>
        </section>
      </section>
      <button type="submit" className={ styleButton.cadastroFormSectionButton }>
        Próximo
      </button>
    </form>
  );
}
