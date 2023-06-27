import React from "react";
import Image from "next/image";

import Logo from "../../../public/static/images/logo.svg";
import Button from "../../components/button/button";

import styles from "./AjudaTemplate.style.module.css";

const HelpForm = () => (
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
      >
        <p>
          Por favor, explique seu problema. Entraremos em contato o mais rápido
          possível.
        </p>
        <input type="hidden" name="_template" value="box" />
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
        <input type="hidden" name="_next" value="https://palavrasdepaz.org" />

        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="name"
          className={styles.helpFormSectionInputEmail}
          placeholder="Digite seu nome"
          name="Nome"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          name="Email"
          className={styles.helpFormSectionInputEmail}
          placeholder="Digite seu e-mail"
          required
        />

        <label htmlFor="assunto">Assunto</label>
        <input
          type="text"
          id="assunto"
          name="Assunto"
          className={styles.helpFormSectionInputEmail}
          value="Problemas com login"
        />

        <label htmlFor="mensagem" className="form-label">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="Mensagem"
          className={styles.helpFormSectionInputText}
          required
        />

        <Button
          type="submit"
          bg="rgba(33,170,133,1)"
          border="none"
          borderRadius="0.6rem"
          justify="center"
          padding="8px 24px"
          color="white"
          fontWeight="bold"
          letterSpacing="0.1em"
          margin="1.25rem 0"
          text="ENVIAR"
          font_size="1.25rem"
          width="50%"
          shadow={false}
        />
      </form>
    </section>
  </section>
);

export default HelpForm;
