import React, { useState } from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../api";
import { REQUIRED_FIELD } from "../../constants";
import { INVALID_MAIL } from "../../templates/cadastro/components/constants";
import ErrorMessage from "../forms/ErrorMessage";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

import styles from "../../templates/ajuda/AjudaTemplate.style.module.css";

const schema = yup.object().shape({
  name: yup.string().required(REQUIRED_FIELD),
  email: yup
    .string()
    .required(REQUIRED_FIELD)
    .test("is-valid", INVALID_MAIL, (value) => isEmail(value)),
  subject: yup.string().required(REQUIRED_FIELD),
  message: yup.string().required(REQUIRED_FIELD),
});

const ButtonForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

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
    api.post("/volunteers/contact-email", data).then(() => {
      setIsSending(false);
      setIsSent(true);
    });
  };

  if (isSent) {
    return "Obrigado pela mensagem. Retornaremos em breve.";
  }

  if (isSending) {
    return <LoadingSpinner />;
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
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
        <ErrorMessage showError={errors.subject} style={styles.inputError} />
      </div>
      <div className={styles.helpFormSectionInputContainer}>
        <label htmlFor="mensagem" className="form-label">
          Mensagem
        </label>
        <textarea id="mensagem" {...register("message")} />
        <ErrorMessage showError={errors.message} style={styles.inputError} />
      </div>
      <div className={styles.helpFormButtonsRow}>
        <button type="submit" className={styles.helpFormButtonEnter}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ButtonForm;
