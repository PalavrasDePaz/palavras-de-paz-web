import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import {
  API,
  ERROR_MESSAGES,
  REQUIRED_FIELD,
  UNEXPECTED_ERROR,
  VOLUNTEER_NOT_FOUND,
} from "../../../constants";
import { INVALID_MAIL } from "../../cadastro/components/constants";

import BackButton from "./BackButton";

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

const loginAddress = `${API}/volunteers/login`;
const resetPassAddress = `${API}/volunteers/password-email`;
const getPostAddress = (isPassForgotten) =>
  isPassForgotten ? resetPassAddress : loginAddress;

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordForgotten, setPasswordForgotten] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getSchema(passwordForgotten)),
  });

  const updateComponentAfterMail = () => {
    setIsSubmitted(true);
    setIsSending(false);
  };

  const postData = (data) =>
    axios
      .post(getPostAddress(passwordForgotten), data)
      // TODO: a resposta de login será um token, que vamos levar para a área de trabalho.
      .then(() => (passwordForgotten ? updateComponentAfterMail() : push("/")))
      .catch((error) => {
        setApiError(error);
        if (error.response.data.name) {
          setErrorMessage(error.response.data.name);
        }
      });

  // No caso de senha perdida, mandamos só o email
  const cleanData = (data) =>
    passwordForgotten ? { email: data.email } : data;

  const onSubmit = (data) => {
    setIsSending(true);
    postData(cleanData(data));
    reset();
  };

  const handlePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  if (apiError) {
    const message = ERROR_MESSAGES[errorMessage] || UNEXPECTED_ERROR;
    const userNotFound = errorMessage === VOLUNTEER_NOT_FOUND;
    return (
      <>
        <p className={styles.formParagraph} style={{ color: "red" }}>
          {message}
        </p>
        {userNotFound && (
          <p>
            Quer se cadastrar como voluntário?{" "}
            <Link href="/cadastro">Aqui.</Link>
          </p>
        )}
        <BackButton />
      </>
    );
  }

  if (isSending) {
    return <LoadingSpinner />;
  }

  if (isSubmitted) {
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
