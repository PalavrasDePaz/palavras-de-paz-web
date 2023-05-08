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
} from './constants';

const MIN_PASSWORD_LENGTH = 6;

const schema = yup.object().shape({
  name: yup.string().required(MANDATORY_FIELD),
  email: yup.string().email(INVALID_MAIL).required(MANDATORY_FIELD),
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

export default function cadastroPrimeiraTela(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setController, controller } = props;

  const onSubmit = () => {
    setController(controller + 1);
    reset();
  };

  return (
    <form
      className={ styles.cadastroFormSection }
      onSubmit={ handleSubmit(onSubmit) }
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
              className={ styles.cadastroFormSectionInputText }
              { ...register('name') }
            />
            {errors.name && (
              <p className={ styles.inputError }>{errors.name.message}</p>
            )}
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
              className={ styles.cadastroFormSectionInputText }
              { ...register('email') }
            />
            {errors.email && (
              <p className={ styles.inputError }>{errors.email.message}</p>
            )}
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
              className={ styles.cadastroFormSectionInputText }
              { ...register('password') }
            />
            {errors.password && (
              <p className={ styles.inputError }>{errors.password.message}</p>
            )}
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
              className={ styles.cadastroFormSectionInputText }
              placeholder="Confirme sua senha"
              { ...register('passConfirmation') }
            />
            {errors.passConfirmation && (
              <p className={ styles.inputError }>
                {errors.passConfirmation.message}
              </p>
            )}
          </div>
        </section>
      </section>
      <button type="submit" className={ styleButton.cadastroFormSectionButton }>
        Próximo
      </button>
    </form>
  );
}
