import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import editIcon from "../../../../public/static/images/icons/edit.svg";
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
    <>
      <div className={styles.headerContent}>
        <div className={styles.sectionVoltar}>
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

      <div className={styles.dadosContainer}>
        <h3 className={styles.profileTitulo}>Editar Perfil</h3>
        <div className={styles.profileInfo}>
          <Image
            src={profileImage}
            alt="Imagem de perfil"
            width={110}
            height={110}
            className={styles.profileImg}
          />
          <div className={styles.profileNomeEmail}>
            <p className={styles.profileNome}>Paulo Vitor Rosendo</p>
            <p className={styles.profileEmail}>Exemplodeemail@gmail.com</p>
          </div>
        </div>

        {/* Campo de senha */}
        <div className={styles.profileContainer}>
          <div className={styles.tituloContainer}>
            <p className={styles.titulo}>Senha</p>
            <Image
              src={editIcon}
              alt="icone de um lápis"
              width={15}
              height={10}
            />
          </div>
          <div className={styles.camposContainer}>
            <input
              type="password"
              className={styles.campo}
              placeholder="Digite sua senha"
            />
            <input
              type="password"
              className={styles.campo}
              placeholder="Confirme sua senha"
            />
          </div>
        </div>

        {/* Campo de email */}
        <div className={styles.profileContainer}>
          <div className={styles.tituloContainer}>
            <p className={styles.titulo}>Email</p>
            <Image
              src={editIcon}
              alt="icone de um lápis"
              width={15}
              height={10}
            />
          </div>
          <div className={styles.camposContainer}>
            <input
              type="email"
              className={styles.campo}
              placeholder="Insira seu novo email"
            />
            <input
              type="email"
              className={styles.campo}
              placeholder="Confirme seu novo email"
            />
          </div>
        </div>

        {/* Campo de telefone */}
        <div className={styles.profileContainer}>
          <div className={styles.tituloContainer}>
            <p className={styles.titulo}>Telefone</p>
            <Image
              src={editIcon}
              alt="icone de um lápis"
              width={15}
              height={10}
            />
          </div>
          <div className={styles.camposContainer}>
            <input
              type="tel"
              className={styles.campo}
              placeholder="Insira seu novo número"
              value="(12) 9238-1834"
            />
          </div>
        </div>

        {/* Campo de residência */}
        <div className={styles.profileContainerRow}>
          <div className={styles.profileContainer}>
            <div className={styles.tituloContainer}>
              <p className={styles.titulo}>Cidade</p>
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
            </div>
            <div className={styles.camposContainer}>
              <input
                type="text"
                className={styles.campo}
                placeholder="Insira seu novo número"
                value="São Paulo"
              />
            </div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.tituloContainer}>
              <p className={styles.titulo}>Estado</p>
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
            </div>
            <div className={styles.camposContainer}>
              <input
                type="text"
                className={styles.campo}
                placeholder="Insira seu novo número"
                value="São Paulo"
              />
            </div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.tituloContainer}>
              <p className={styles.titulo}>País</p>
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
            </div>
            <div className={styles.camposContainer}>
              <input
                type="text"
                className={styles.campo}
                placeholder="Insira seu novo número"
                value="Brasil"
              />
            </div>
          </div>
        </div>

        <input
          className={styles.btnSalvar}
          type="submit"
          value="Salvar alterações"
        />
      </div>
    </>
  );
};

export default PerfilComponent;
