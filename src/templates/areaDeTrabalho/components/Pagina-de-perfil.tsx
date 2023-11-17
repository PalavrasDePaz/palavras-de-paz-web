import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import editIcon from "../../../../public/static/images/icons/edit.svg";
import bntSair from "../../../../public/static/images/icons/exit.svg";
import profileImage from "../../../../public/static/images/icons/profile.svg";
import LogoPaz from "../../../../public/static/images/logo.svg";
import { useGetUser, useUpdateUser } from "../../../hooks";

import Modal from "./Modal";

import styles from "../styles/Pagina-de-perfil.module.css";

type FormType = {
  password?: string;
  new_password?: string;
  email?: string;
  new_email?: string;
  phoneNumber?: string;
  city?: string;
  state?: string;
  country?: string;
};

const PerfilComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: user } = useGetUser();

  const { mutate: updateUser } = useUpdateUser();

  const { register, handleSubmit } = useForm<FormType>({
    values: {
      phoneNumber: user?.phoneNumber,
      city: user?.city,
      state: user?.state,
      country: user?.country,
    },
  });

  const onSubmit = (data: FormType) => {
    updateUser({
      password: data.password,
      email: data.email,
      phoneNumber: data.phoneNumber,
      city: data.city,
      state: data.state,
      country: data.country,
    });
  };

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
          <Link href="/area-de-trabalho">
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
            <p className={styles.profileNome}>{user?.name}</p>
            <p className={styles.profileEmail}>{user?.email}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo de senha */}
          <div className={styles.profileContainer}>
            <label>
              Senha
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
              <input
                type="password"
                className={styles.campo}
                placeholder="Digite sua nova senha"
                {...register("password")}
              />
              <input
                type="password"
                className={styles.campo}
                placeholder="Confirme sua nova senha"
                {...register("new_password")}
              />
            </label>
          </div>
          {/* Campo de email */}
          <div className={styles.profileContainer}>
            <label>
              Email
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
              <input
                type="email"
                className={styles.campo}
                placeholder="Insira seu novo email"
                {...register("email")}
              />
              <input
                type="email"
                className={styles.campo}
                placeholder="Confirme seu novo email"
                {...register("new_email")}
              />
            </label>
          </div>
          {/* Campo de telefone */}
          <div className={styles.profileContainer}>
            <label>
              Telefone
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
              <input
                type="tel"
                className={styles.campo}
                placeholder="Insira seu novo número"
                {...register("phoneNumber")}
              />
            </label>
          </div>
          {/* Campo de residência */}
          <div className={styles.profileContainerRow}>
            <label>
              Cidade
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
              <input
                type="text"
                className={styles.campo}
                placeholder="Insira seu novo número"
                {...register("city")}
              />
            </label>
            <label>
              Estado
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
              <input
                type="text"
                className={styles.campo}
                placeholder="Insira seu novo número"
                {...register("state")}
              />
            </label>
            <label>
              Pais
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={15}
                height={10}
              />
              <input
                type="text"
                className={styles.campo}
                placeholder="Insira seu novo número"
                {...register("country")}
              />
            </label>
          </div>

          <button type="submit" className={styles.btnSalvar}>
            Salvar alterações
          </button>
        </form>
      </div>
    </>
  );
};

export default PerfilComponent;
