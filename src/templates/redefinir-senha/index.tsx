import React from "react";
import Image from "next/image";

import Logo from "../../../public/static/images/logo.svg";

import Form from "./components/Form";

import styles from "./styles/RedefinirSenha.style.module.css";

function RedefinirSenhaTemplate() {
  return (
    <section className={styles.loginSection}>
      <Image
        src={Logo}
        alt="logo com a frase Palavras de Paz,
        programa de educação para a paz,
        escrito em verde"
        width="333px"
        height="150px"
      />

      <section className={styles.loginSectionForm}>
        <Form />
      </section>
    </section>
  );
}

export default RedefinirSenhaTemplate;
