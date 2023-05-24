import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/RedefinirSenha.module.css';
import {
  MANDATORY_FIELD,
  PASS_MIN,
  PASS_MISMATCH,
} from '../../cadastro/components/constants';
import ErrorMessage from '../../../components/forms/ErrorMessage';
import { API } from '../../../constants';
import BackButton from '../../login/components/BackButton';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';

const MIN_PASSWORD_LENGTH = 6;

const schema = yup.object().shape({
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

function Form() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPassConfVisible, setIsPassConfVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [apiError, setApiError] = useState();

  const router = useRouter();
  const mailHash = router.query.hash;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const route = `${ API }/volunteers/password`;

  const onSubmit = ({ password }) => {
    setIsLoading(true);
    axios
      .patch(route, { password, hashEmail: mailHash })
      .then(() => {
        setIsLoading(false);
        setIsSent(true);
        // eslint-disable-next-line no-magic-numbers
        setTimeout(() => router.push('/login'), 3000);
      })
      .catch((error) => {
        setApiError(true);
        console.log(error);
      });
  };

  if (apiError) {
    return (
      <>
        <p className={ styles.formParagraph } style={ { color: 'red' } }>
          Ocorreu um erro inesperado. Tente novamente mais tarde
        </p>
        <BackButton />
      </>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isSent) {
    return (
      <p className={ styles.formParagraph }>
        Nova senha criada! Redirecionando para login...
      </p>
    );
  }

  return (
    <form onSubmit={ handleSubmit(onSubmit) } className={ styles.loginFormSection }>
      <h1 className={ styles.loginFormSectionTitle }>Crie sua nova senha</h1>
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
          onClick={ () => setIsPasswordVisible((_isVisible) => !_isVisible) }
        >
          {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
        <ErrorMessage showError={ errors.password } style={ styles.inputError } />
      </div>
      <div className={ styles.loginFormSectionInputContainer }>
        <label className={ styles.loginFormSectionInputLabel } htmlFor="password">
          <b>Confirmação</b>
        </label>
        <input
          placeholder="Confirme sua senha"
          className={ styles.loginFormSectionInputPassword }
          type={ isPassConfVisible ? 'text' : 'password' }
          { ...register('passConfirmation') }
        />
        <button
          className={ styles.loginFormSectionInputPasswordVisibility }
          type="button"
          onClick={ () => setIsPassConfVisible((_isVisible) => !_isVisible) }
        >
          {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
        </button>
        <ErrorMessage
          showError={ errors.passConfirmation }
          style={ styles.inputError }
        />
      </div>
      <button className={ styles.loginFormButtonEnter }>Enviar</button>
      <Link href="/" className={ styles.loginFormButtonBack }>
        <button className={ styles.loginFormButtonBack }>
          Voltar para a página inicial
        </button>
      </Link>
    </form>
  );
}

export default Form;
