import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineWarning } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";

import { yupResolver } from "@hookform/resolvers/yup";

import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import { ERROR_MESSAGES, PALAVRAS_DE_PAZ_TOKEN } from "../../../constants";
import useLogin from "../../../hooks/useLogin";
import useRequestPasswordEmail from "../../../hooks/useRequestPasswordEmail";
import {
  getButtonString,
  getEmailFieldString,
  getSchema,
} from "../utils/loginUtils";

import BackButton from "./BackButton";

import styles from "../styles/LoginForm.module.css";

const LoginForm = ({ logIn } = props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordForgotten, setPasswordForgotten] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLoginSubmited, setIsLoginSubmited] = useState(false);

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
    //  isError: isLoginError,
    error: loginError,
    isSuccess: isLoginSuccess,
    data: loginData,
  } = useLogin();
  console.log(loginError?.response.data.name);

  // desestruturação do useRequestPasswordEmail
  const {
    mutate: mutatePassEmail,
    isLoading: isPassEmailLoading,
    // isError: isPassEmailError,
    // error: passEmailError,
    isSuccess: isPassEmailSuccess,
  } = useRequestPasswordEmail();

  const sendUserLogin = (data) => {
    mutateLogin(data);
    setIsLoginSubmited(true);
  };

  const requestNewPassword = (data) => mutatePassEmail(data.email);

  const onSubmit = (data) =>
    passwordForgotten ? requestNewPassword(data) : sendUserLogin(data);

  const handlePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  // Muda estilo de borda em caso de erro
  const emailInputClassName = errors.email
    ? `${styles.loginFormSectionInputEmail} ${styles.inputBorderError}`
    : styles.loginFormSectionInputEmail;

  const passwordInputClassName = errors.password
    ? `${styles.loginFormSectionInputPassword} ${styles.inputBorderError}`
    : styles.loginFormSectionInputPassword;

  useEffect(() => {
    if (isLoginSuccess) {
      setIsLoginFailed(false);
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

  useEffect(() => {
    if (isLoginSubmited && !isLoginSuccess) {
      setIsLoginFailed(true);
    }
  }, [isLoginSubmited]);

  if (isLoginLoading || isPassEmailLoading) {
    return <LoadingSpinner />;
  }

  if (isPassEmailSuccess) {
    return (
      <>
        <p>O e-mail de recuperação de senha foi enviado!</p>
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
            {isLoginFailed && (
              <>
                <div className={styles.inputError}>
                  <AiOutlineWarning />
                  <span>{ERROR_MESSAGES.EMAIL_OR_PASSWORD_WRONG_ERROR}</span>
                </div>
                {loginError?.response.data.name ===
                  "VOLUNTEER_UNREGISTERED" && (
                    <p>
                      Quer se cadastrar como voluntário?
                      <a href="/cadastro">Aqui.</a>
                    </p>
                )}
              </>
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
