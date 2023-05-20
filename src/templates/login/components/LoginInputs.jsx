import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import styles from '../styles/LoginForm.module.css';
import { API } from '../../../constants';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';

const MIN_PASSWORD_LENGTH = 6;

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(MIN_PASSWORD_LENGTH),
});

function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [apiError, setApiError] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const apiAddress = `${ API }/volunteers/login`;

  const sendLogin = (data) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    axios
      .post(apiAddress, data)
      .then((response) => {
        setIsSending(false); // TODO: trocar isso por um redirect para a área de trabalho.
        console.log(response);
      })
      .catch((error) => {
        setIsSending(false);
        setApiError(true);
        console.log(error);
      });

  function onSubmit(data) {
    setIsSending(true);
    console.log(data);
    sendLogin(data);
    reset();
  }

  function handlePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  if (isSending) {
    return <LoadingSpinner />;
  }

  if (apiError) {
    return (
      <p className={ styles.formParagraph } style={ { color: 'red' } }>
        Ocorreu um erro inesperado. Tente novamente mais tarde
      </p>
    );
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className={ styles.loginFormSection }>
      <h1 className={ styles.loginFormSectionTitle }>Faça seu login</h1>

      <div className={ styles.loginFormSectionInputContainer }>
        <label className={ styles.loginFormSectionInputLabel } htmlFor="email">
          <b>E-mail</b>
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

      <div className={ styles.loginFormSectionInputContainer }>
        <label className={ styles.loginFormSectionInputLabel } htmlFor="password">
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

      <section className={ styles.loginFormSectionButtonsContainer }>
        <button className={ styles.loginFormSectionButtons }>Ajuda?</button>

        <button className={ styles.loginFormSectionButtons }>
          Esqueceu a senha?
        </button>
      </section>

      <button className={ styles.loginFormButtonEnter }>Entrar</button>

      <Link href="/" className={ styles.loginFormButtonBack }>
        <button className={ styles.loginFormButtonBack }>
          Voltar para a página inicial
        </button>
      </Link>
    </form>
  );
}

export default LoginForm;
