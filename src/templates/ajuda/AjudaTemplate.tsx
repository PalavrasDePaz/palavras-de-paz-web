import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "../../../public/static/images/logo.svg";
import ErrorMessage from "../../components/forms/ErrorMessage";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { API, REQUIRED_FIELD } from "../../constants";
import { INVALID_MAIL } from "../cadastro/components/constants";

import styles from "./AjudaTemplate.style.module.css";

const FORM_URL = `${API}/volunteers/help-email`;

const schema = yup.object().shape({
  name: yup.string().required(REQUIRED_FIELD),
  email: yup
    .string()
    .required(REQUIRED_FIELD)
    .test("is-valid", INVALID_MAIL, (value) => isEmail(value)),
  subject: yup.string().required(REQUIRED_FIELD),
  message: yup.string().required(REQUIRED_FIELD),
});

const HelpForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitForm = (data: yup.InferType<typeof schema>) => {
    setIsSending(true);
    axios.post(FORM_URL, data).then(() => {
      setIsSending(false);
      setIsSent(true);
    });
  };

  const getContent = () => {
    if (isSent) {
      return "Obrigado pela mensagem. Retornaremos em breve.";
    }

    if (isSending) {
      return <LoadingSpinner />;
    }
    return (
      <section className={styles.helpSectionForm}>
        <form
          className={styles.helpFormSection}
          onSubmit={handleSubmit(submitForm)}
        >
          <p>
            Por favor, explique seu problema. Entraremos em contato o mais
            rápido possível.
          </p>

          <div className={styles.helpFormSectionInputContainer}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              className={styles.helpFormSectionInputEmail}
              placeholder="Digite seu nome"
              {...register("name")}
            />
            <ErrorMessage showError={errors.name} style={styles.inputError} />
          </div>
          <div className={styles.helpFormSectionInputContainer}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              className={styles.helpFormSectionInputEmail}
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <ErrorMessage showError={errors.email} style={styles.inputError} />
          </div>
          <div className={styles.helpFormSectionInputContainer}>
            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              placeholder="Digite o assunto"
              className={styles.helpFormSectionInputEmail}
              {...register("subject")}
            />
            <ErrorMessage
              showError={errors.subject}
              style={styles.inputError}
            />
          </div>
          <div className={styles.helpFormSectionInputContainer}>
            <label htmlFor="mensagem" className="form-label">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              className={styles.helpFormSectionInputText}
              {...register("message")}
            />
            <ErrorMessage
              showError={errors.message}
              style={styles.inputError}
            />
          </div>
          <div className={styles.helpFormButtonsRow}>
            <button
              type="button"
              className={styles.helpFormButtonEnter}
              onClick={() => router.back()}
            >
              Voltar
            </button>
            <button type="submit" className={styles.helpFormButtonEnter}>
              Enviar
            </button>
          </div>
        </form>
      </section>
    );
  };

  return (
    <section className={styles.helpSection}>
      <Image
        style={{ cursor: "pointer" }}
        src={Logo}
        alt="logo com a frase Palavras de Paz,
    programa de educação para a paz,
    escrito em verde"
        width="333px"
        height="150px"
      />
      {getContent()}
    </section>
  );
};

export default HelpForm;
