import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useQueryClient } from "@tanstack/react-query";

import Login from "../../../../public/static/images/icons/login.svg";
import Profile from "../../../../public/static/images/icons/profile.svg";
import Logo from "../../../../public/static/images/logo.svg";
import LogoMobile from "../../../../public/static/images/paz.png";
import { PALAVRAS_DE_PAZ_TOKEN } from "../../../constants";

import Modal from "./Modal";

import styles from "../styles/AreaDeTrabalho.module.css";

const HeaderAreaDeTrabalho = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const delayToRender = () => {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 100);
    });

    return promise;
  };

  const logOut = async () => {
    localStorage.removeItem(PALAVRAS_DE_PAZ_TOKEN);
    localStorage.removeItem("AUTH");

    queryClient.setQueryData(["user"], null);
    queryClient.invalidateQueries("user");

    // Aguardar um curto período antes de redirecionar para garantir que a transição anterior seja concluída
    await delayToRender();

    router.push("/");
  };

  return (
    <div className={styles.headerFixed}>
      <header className={styles.headerContainer}>
        <Image
          src={Logo}
          alt="Logo da organização e logo abaixo está escrito
          palavras de paz, programa de educação para a paz, com a cor verde"
          width="333px"
          height="90px"
          className={styles.logo}
        />

        <div className={styles.headerBtnLogin}>
          <Link href="/pagina-de-perfil">
            <Image
              src={Profile}
              alt="Botão de acesso à página de perfil do usuário."
              width={35}
              height={35}
              className={styles.profileButton}
            />
          </Link>
          <button onClick={openModal} className={styles.openModal}>
            Dúvidas?
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <Image
            src={Login}
            alt="Botão de acesso ao login com imagem de uma seta dentro de uma porta"
            onClick={logOut}
            className={styles.logoutButton}
          />
        </div>
      </header>
    </div>
  );
};

export default HeaderAreaDeTrabalho;
