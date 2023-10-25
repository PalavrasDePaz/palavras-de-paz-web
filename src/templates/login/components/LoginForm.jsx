import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineWarning } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { PALAVRAS_DE_PAZ_TOKEN, REQUIRED_FIELD } from "../../../constants";
import useLogin from "../../../hooks/useLogin";
import useRequestPasswordEmail from "../../../hooks/useRequestPasswordEmail";

import BackButton from "./BackButton";
import LoginErrorScreen from "./LoginErrorScreen";

import styles from "../styles/LoginForm.module.css";

const INVALID_MAIL = "Endereço de e-mail incorreto";

// Validação do e-mail
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

// Redefinição de senha
const getEmailFieldString = (isForgotten) =>
  isForgotten ? (
    "Informe seu e-mail para enviarmos um link de redefinição de senha"
  ) : (
    <b>E-mail</b>
  );

const getButtonString = (isPassForgotten) =>
  isPassForgotten ? "Enviar e-mail" : "Entrar";

const LoginForm = ({ logIn } = props) => {
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

  // desestruturação do useLogin
  const {
    mutate: mutateLogin,
    isLoading: isLoginLoading,
    isError: isLoginError,
    error: loginError,
    isSuccess: isLoginSuccess,
    data: loginData,
  } = useLogin();

  // desestruturação do useRequestPasswordEmail
  const {
    mutate: mutatePassEmail,
    isLoading: isPassEmailLoading,
    isError: isPassEmailError,
    error: passEmailError,
    isSuccess: isPassEmailSuccess,
  } = useRequestPasswordEmail();

  const sendUserLogin = (data) => mutateLogin(data);
  const requestNewPassword = (data) => mutatePassEmail(data.email);

  const onSubmit = (data) =>
    passwordForgotten ? requestNewPassword(data) : sendUserLogin(data);

  const handlePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const emailInputClassName = errors.email
    ? `${styles.loginFormSectionInputEmail} ${styles.inputBorderError}`
    : styles.loginFormSectionInputEmail;

  const passwordInputClassName = errors.password
    ? `${styles.loginFormSectionInputPassword} ${styles.inputBorderError}`
    : styles.loginFormSectionInputPassword;

  useEffect(() => {
    if (isLoginSuccess) {
      localStorage.setItem(PALAVRAS_DE_PAZ_TOKEN, loginData.data.token);
      const {
        attendanceModulePermission,
        bookPermission,
        certificationPermission,
        determineVolunteerModulePermission,
        essayModulePermission,
        manageVolunteerModulePermission,
        notebookModulePermission,
        readPermission,
      } = jwtDecode(loginData.data.token);
      localStorage.setItem(
        "AUTH",
        JSON.stringify({
          attendanceModulePermission,
          bookPermission,
          certificationPermission,
          determineVolunteerModulePermission,
          essayModulePermission,
          manageVolunteerModulePermission,
          notebookModulePermission,
          readPermission,
        })
      );
      logIn(loginData.data.volunteer.email);
      // console.log(jwtDecode(loginData.data.token));
    }
  }, [isLoginSuccess]);

  if (isLoginError || isPassEmailError) {
    const errorMessage =
      loginError?.response.data.name || passEmailError?.response.data.name;
    return <LoginErrorScreen errorMessage={errorMessage} />;
  }

  if (isLoginLoading || isPassEmailLoading) {
    return <LoadingSpinner />;
  }

  if (isPassEmailSuccess) {
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

        <span className={styles.loginFormSectionInputContainer}>
          <FiAtSign className={styles.loginFormSectionInputIcon} />
          <input
            placeholder="nome@palavrasdepaz.com.br"
            className={emailInputClassName}
            {...register("email")}
          />
        </span>
        {errors.email && (
          <div className={styles.inputError}>
            <AiOutlineWarning />
            <span>{errors.email.message}</span>
          </div>
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
            <span className={styles.loginFormSectionInputContainer}>
              <AiOutlineLock className={styles.loginFormSectionInputIcon} />
              <input
                placeholder="Digite sua senha"
                className={passwordInputClassName}
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
            </span>
            {errors.password && (
              <div className={styles.inputError}>
                <AiOutlineWarning />
                <span>{errors.password.message}</span>
              </div>
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

LoginForm.propTypes = {
  logIn: propTypes.func,
};

export default LoginForm;
