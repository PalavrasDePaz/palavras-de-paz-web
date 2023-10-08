import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import bntSair from "../../../../public/static/images/icons/exit.svg";
import profileImage from "../../../../public/static/images/icons/profile.svg";
import LogoPaz from "../../../../public/static/images/logo.svg";

import Modal from "./Modal";

import styles from "../styles/Pagina-de-perfil.module.css";

const PerfilComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["header-content"]}>
      <div className={styles["section-voltar"]}>
        <Image src={bntSair} alt="Icone de sair" width={30} height={20} />
        <Link href="/">
          <p>Voltar</p>
        </Link>
      </div>
      <div className={styles.logo}>
        <Image
          src={LogoPaz}
          alt="Logo palavras de paz"
          width={200}
          height={100}
        />
      </div>
      <button onClick={openModal} className={styles.openModal}>
        Precisa de ajuda?
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PerfilComponent;
