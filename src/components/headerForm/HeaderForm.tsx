import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Voltar from "../../../public/static/images/icons/basic.svg";
import Logo from "../../../public/static/images/logo.svg";

import styles from "./HeaderForm.module.css";

export default function HeaderForm() {
  const { push } = useRouter();
  const handleClick = () => {
    push("/area-de-trabalho");
  };
  return (
    <header className={styles.headerContainer}>
      <button className={styles.back} onClick={handleClick}>
        <div className={styles.backIcon}>
          <Image
            src={Voltar}
            alt="imagem de uma seta apontada para a esquerda, 
            como se fosse sair da porta, na cor preta"
            layout="fill"
          />
        </div>
        Voltar
      </button>
      <div className={styles.logoIcon}>
        <Image
          src={Logo}
          alt="Logo da organização e logo abaixo está escrito
          palavras de paz, programa de educação para a paz, com a cor verde"
          layout="fill"
        />
      </div>
    </header>
  );
}
