import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/LoginForm.module.css';
import { API } from '../../../constants';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';
import { MANDATORY_FIELD } from '../../cadastro/components/constants';

const MIN_PASSWORD_LENGTH = 6;

const schemaLogin = yup.object().shape({
  email: yup.string().email().required(MANDATORY_FIELD),
  password: yup.string().required(MANDATORY_FIELD).min(MIN_PASSWORD_LENGTH),
});

const schemaResetPass = yup.object().shape({
  email: yup.string().email().required(MANDATORY_FIELD),
});

function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordForgotten, setPasswordForgotten] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState();

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordForgotten ? schemaResetPass : schemaLogin),
  });

  const loginAddress = `${ API }/volunteers/login`;
  const resetPassAddress = `${ API }/volunteers/password-email`;

  const postAddress = passwordForgotten ? resetPassAddress : loginAddress;

  const postData = (data) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    axios
      .post(postAddress, data)
      // TODO: a resposta de login será um token, que vamos levar para a área de trabalho.
      .then(() => (passwordForgotten ? setIsSubmitted(true) : push('/')))
      .catch((error) => {
        setApiError(true);
        console.log(error);
      });

  const onSubmit = (data) => {
    setIsSending(true);
    console.log(data);
    postData(data);
    reset();
  };

  function handlePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const emailFieldString = passwordForgotten ? (
    'Informe seu e-mail para enviarmos um link de redefinição de senha'
  ) : (
    <b>E-mail</b>
  );
  const buttonString = passwordForgotten ? 'Enviar e-mail' : 'Entrar';

  if (apiError) {
    return (
      <p className={ styles.formParagraph } style={ { color: 'red' } }>
        Ocorreu um erro inesperado. Tente novamente mais tarde
      </p>
    );
  }

  if (isSending) {
    return <LoadingSpinner />;
  }

  if (isSubmitted) {
    // Apenas com a opção de email enviado porque em caso de login correto vai haver o redirect.
    return (
      <p className={ styles.formParagraph } style={ { color: 'red' } }>
        Ocorreu um erro inesperado. Tente novamente mais tarde
      </p>
    );
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className={ styles.loginFormSection }>
      {!passwordForgotten && (
        <h1 className={ styles.loginFormSectionTitle }>Faça seu login</h1>
      )}

      <div className={ styles.loginFormSectionInputContainer }>
        <label className={ styles.loginFormSectionInputLabel } htmlFor="email">
          {emailFieldString}
        </label>

        <input
          placeholder="nome@palavrasdepaz.com.br"
          type="email"
          className={ styles.loginFormSectionInputEmail }
          { ...register('email') }
        />
        {errors.email && (
          <p className={ styles.inputError }>{errors.email.message}</p>
        )}
      </div>
      {!passwordForgotten && (
        <div className={ styles.loginFormSectionInputContainer }>
          <label
            className={ styles.loginFormSectionInputLabel }
            htmlFor="password"
          >
            <b>Senha</b>
          </label>

          <input
            placeholder="Digite sua senha"
            className={ styles.loginFormSectionInputPassword }
            type={ isPasswordVisible ? 'text' : 'password' }
            { ...register('password') }
          />

          <button
            className={ styles.loginFormSectionInputPasswordVisibility }
            type="button"
            onClick={ handlePasswordVisibility }
          >
            {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
          {errors.password && (
            <p className={ styles.inputError }>{errors.password.message}</p>
          )}
        </div>
      )}
      {!passwordForgotten && (
        <section className={ styles.loginFormSectionButtonsContainer }>
          <button
            className={ styles.loginFormSectionButtons }
            onClick={ () => setPasswordForgotten(true) }
          >
            Esqueceu a senha?
          </button>
        </section>
      )}

      <button type="submit" className={ styles.loginFormButtonEnter }>
        {buttonString}
      </button>

      <Link href="/" className={ styles.loginFormButtonBack }>
        <button className={ styles.loginFormButtonBack }>
          Voltar para a página inicial
        </button>
      </Link>
    </form>
  );
}

export default LoginForm;
