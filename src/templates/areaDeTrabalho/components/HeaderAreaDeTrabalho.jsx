import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useQueryClient } from "@tanstack/react-query";

import Login from "../../../../public/static/images/icons/login.svg";
import Logo from "../../../../public/static/images/logo.svg";
import { PALAVRAS_DE_PAZ_TOKEN } from "../../../constants";

import styles from "../styles/AreaDeTrabalho.module.css";

const HeaderAreaDeTrabalho = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem(PALAVRAS_DE_PAZ_TOKEN);
    queryClient.setQueryData(["user"], null);
    queryClient.invalidateQueries("user");
    router.push("/login");
  };

  return (
    <header className={styles.headerContainer}>
      <Image
        src={Logo}
        alt="Logo da organização e logo abaixo está escrito
        palavras de paz, programa de educação para a paz, com a cor verde"
        width="333px"
        height="100px"
      />
      <div className={styles.headerBtnLogin}>
        <div>Perfil</div>
        <Image
          src={Login}
          alt="Botão de acesso ao login com imagem de uma seta dentro de uma porta"
          onClick={logOut}
        />
      </div>
    </header>
  );
};

export default HeaderAreaDeTrabalho;
