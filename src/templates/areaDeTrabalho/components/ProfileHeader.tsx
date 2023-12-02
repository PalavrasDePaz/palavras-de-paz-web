import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import bntSair from "../../../../public/static/images/icons/exit.svg";
import LogoPaz from "../../../../public/static/images/logo.svg";

import Modal from "./Modal";

import styles from "../styles/Pagina-de-perfil.module.css";

const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={styles.headerContent}>
      <div className={styles.sectionVoltar}>
        <Image src={bntSair} alt="Icone de sair" width={30} height={20} />
        <Link href="/area-de-trabalho">
          <p>Voltar</p>
        </Link>
      </div>
      <div className={styles.logo}>
        <Image
          src={LogoPaz}
          alt="Logo Palavras de Paz"
          width={200}
          height={100}
        />
      </div>
      <button onClick={openModal} className={styles.openModal}>
        Precisa de ajuda?
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default ProfileHeader;
