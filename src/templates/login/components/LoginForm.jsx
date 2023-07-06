import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { REQUIRED_FIELD } from "../../../constants";
import useLogin from "../../../hooks/useLogin";
import useRequestPasswordEmail from "../../../hooks/useRequestPasswordEmail";
import { INVALID_MAIL } from "../../cadastro/components/constants";

import BackButton from "./BackButton";
import LoginErrorScreen from "./LoginErrorScreen";

import styles from "../styles/LoginForm.module.css";

const emailField = yup
  .string()
  .required(REQUIRED_FIELD)
  .test("is-valid", INVALID_MAIL, (value) => isEmail(value));

const schemaLogin = yup.object().shape({
  email: emailField,
  password: yup.string().required(REQUIRED_FIELD),
});

const schemaResetPass = yup.object().shape({
  email: emailField,
});

const getSchema = (passwordForgotten) =>
  passwordForgotten ? schemaResetPass : schemaLogin;

const getEmailFieldString = (isForgotten) =>
  isForgotten ? (
    "Informe seu e-mail para enviarmos um link de redefinição de senha"
  ) : (
    <b>E-mail</b>
  );

const getButtonString = (isPassForgotten) =>
  isPassForgotten ? "Enviar e-mail" : "Entrar";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordForgotten, setPasswordForgotten] = useState(false);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getSchema(passwordForgotten)),
  });

  const {
    mutate: mutateLogin,
    isLoading: isLoginLoading,
    isError: isLoginError,
    error: loginError,
  } = useLogin();
  const {
    mutate: mutatePassEmail,
    isLoading: isPassEmailLoading,
    isError: isPassEmailError,
    error: passEmailError,
    isSuccess,
  } = useRequestPasswordEmail();

  const sendUserLogin = (data) => mutateLogin(data);
  const requestNewPassword = (data) => mutatePassEmail(data.email);

  const onSubmit = (data) =>
    passwordForgotten ? requestNewPassword(data) : sendUserLogin(data);

  const handlePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  if (isLoginError || isPassEmailError) {
    const errorMessage =
      loginError?.response.data.name || passEmailError?.response.data.name;
    return <LoginErrorScreen errorMessage={errorMessage} />;
  }

  if (isLoginLoading || isPassEmailLoading) {
    return <LoadingSpinner />;
  }

  if (isSuccess) {
    // Apenas com a opção de email enviado porque em caso de login correto vai haver o redirect.
    return (
      <>
        <p className={styles.formParagraph}>
          O e-mail de recuperação de senha foi enviado!
        </p>
        <BackButton />
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginFormSection}>
      {!passwordForgotten && (
        <h1 className={styles.loginFormSectionTitle}>Faça seu login</h1>
      )}

      <div className={styles.loginFormSectionInputContainer}>
        <label className={styles.loginFormSectionInputLabel} htmlFor="email">
          {getEmailFieldString(passwordForgotten)}
        </label>

        <input
          placeholder="nome@palavrasdepaz.com.br"
          className={styles.loginFormSectionInputEmail}
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.inputError}>{errors.email.message}</p>
        )}
      </div>
      {!passwordForgotten && (
        <>
          <div className={styles.loginFormSectionInputContainer}>
            <label
              className={styles.loginFormSectionInputLabel}
              htmlFor="password"
            >
              <b>Senha</b>
            </label>
            <input
              placeholder="Digite sua senha"
              className={styles.loginFormSectionInputPassword}
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
            />
            <button
              className={styles.loginFormSectionInputPasswordVisibility}
              type="button"
              onClick={handlePasswordVisibility}
            >
              {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
            {errors.password && (
              <p className={styles.inputError}>{errors.password.message}</p>
            )}
          </div>
          <section className={styles.loginFormSectionButtonsContainer}>
            <button
              type="button"
              className={styles.loginFormSectionButtons}
              onClick={() => push("/ajuda")}
            >
              Ajuda?
            </button>
            <button
              type="button"
              className={styles.loginFormSectionButtons}
              onClick={() => setPasswordForgotten(true)}
            >
              Esqueceu a senha?
            </button>
          </section>
        </>
      )}

      <button type="submit" className={styles.loginFormButtonEnter}>
        {getButtonString(passwordForgotten)}
      </button>
      <BackButton />
    </form>
  );
};

export default LoginForm;
