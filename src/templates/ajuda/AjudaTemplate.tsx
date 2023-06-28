import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "../../../public/static/images/logo.svg";
import ErrorMessage from "../../components/forms/ErrorMessage";
import { REQUIRED_FIELD } from "../../constants";
import { INVALID_MAIL } from "../cadastro/components/constants";

import styles from "./AjudaTemplate.style.module.css";

const FORM_URL = "https://formsubmit.co/info@palavrasdepaz.org";

const schema = yup.object().shape({
  _template: yup.string().required(),
  _autoresponse: yup.string().required(),
  _subject: yup.string().required(),
  _next: yup.string().required(),
  name: yup.string().required(REQUIRED_FIELD),
  email: yup
    .string()
    .required(REQUIRED_FIELD)
    .test("is-valid", INVALID_MAIL, (value) => isEmail(value)),
  assunto: yup.string().required(REQUIRED_FIELD),
  mensagem: yup.string().required(REQUIRED_FIELD),
});

const HelpForm = () => {
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      _template: "box",
      _autoresponse:
        "Agradecemos o contato! Responderemos sua mensagem em breve!",
      _subject: "Mensagem via site da ONG!",
      _next: "https://palavrasdepaz.org",
      name: "",
      email: "",
      assunto: "",
      mensagem: "",
    },
  });

  const submitForm = (data: yup.InferType<typeof schema>) =>
    axios.post(FORM_URL, data).then((response) => console.log(response));

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
      <section className={styles.helpSectionForm}>
        <form
          action="https://formsubmit.co/info@palavrasdepaz.org"
          method="POST"
          className={styles.helpFormSection}
          onSubmit={handleSubmit(submitForm)}
        >
          <p>
            Por favor, explique seu problema. Entraremos em contato o mais
            rápido possível.
          </p>
          {/* <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Agradecemos o contato! Responderemos sua mensagem em breve!"
          />
          <input
            type="hidden"
            name="_subject"
            value="Mensagem via site da ONG!"
          />
          <input type="hidden" name="_next" value="https://palavrasdepaz.org" /> */}

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
              {...register("assunto")}
            />
            <ErrorMessage
              showError={errors.assunto}
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
              {...register("mensagem")}
            />
            <ErrorMessage
              showError={errors.mensagem}
              style={styles.inputError}
            />
          </div>
          <div className={styles.helpFormButtonsRow}>
            <button type="button" className={styles.helpFormButtonEnter}>
              Voltar
            </button>
            <button type="submit" className={styles.helpFormButtonEnter}>
              Enviar
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default HelpForm;
