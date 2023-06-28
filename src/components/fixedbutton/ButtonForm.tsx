import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { REQUIRED_FIELD } from "../../constants";
import { INVALID_MAIL } from "../../templates/cadastro/components/constants";
import ErrorMessage from "../forms/ErrorMessage";

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

  const submitForm = (data: yup.InferType<typeof schema>) => console.log(data);
  //  axios.post(FORM_URL, data).then((response) => console.log(response));

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
        <textarea
          id="mensagem"
          className={styles.helpFormSectionInputText}
          {...register("message")}
        />
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
