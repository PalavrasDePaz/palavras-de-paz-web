import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useQueryClient } from "@tanstack/react-query";

import Login from "../../../../public/static/images/icons/login.svg";
import Logo from "../../../../public/static/images/logo.svg";
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

  const logOut = () => {
    localStorage.removeItem(PALAVRAS_DE_PAZ_TOKEN);
    queryClient.setQueryData(["user"], null);
    queryClient.invalidateQueries("user");
    router.push("/login");
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
        />
        <div className={styles.headerBtnLogin}>
          <button onClick={openModal} className={styles.openModal}>
            Dúvidas ?
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <Image
            src={Login}
            alt="Botão de acesso ao login com imagem de uma seta dentro de uma porta"
            onClick={logOut}
          />
        </div>
      </header>
    </div>
  );
};

export default HeaderAreaDeTrabalho;
