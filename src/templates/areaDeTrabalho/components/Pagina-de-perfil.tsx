import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import editIcon from "../../../../public/static/images/icons/edit.svg";
import bntSair from "../../../../public/static/images/icons/exit.svg";
import profileImage from "../../../../public/static/images/icons/profile.svg";
import LogoPaz from "../../../../public/static/images/logo.svg";
import { useGetUser, useUpdateUser } from "../../../hooks";

import EditarPerfilEndereco from "./Editar-Perfil-Endereço";
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
      <header className={styles.headerContent}>
        <div className={styles.sectionVoltar}>
          <Image src={bntSair} alt="Icone de sair" width={30} height={20} />
          <Link href="/login">
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
      <main className={styles.mainContainer}>
        <h3 className={styles.profileTitle}>Editar Perfil</h3>
        <section className={styles.profileInfo}>
          <Image
            src={profileImage}
            alt="Imagem de perfil"
            className={styles.profileImg}
          />

          <div className={styles.profileNameEmail}>
            <p className={styles.profileName}>{user?.name}</p>
            <p className={styles.profileEmail}>{user?.email}</p>
          </div>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo de senha */}
          <label className={styles.formField}>
            <span className={styles.fieldName}>
              Senha
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={12}
                height={12}
              />
            </span>

            <span>
              <input
                type="password"
                placeholder="Digite sua nova senha"
                {...register("password")}
              />
              <input
                type="password"
                placeholder="Confirme sua nova senha"
                {...register("new_password")}
              />
            </span>
          </label>

          {/* Campo de email */}
          <label className={styles.formField}>
            <span className={styles.fieldName}>
              {" "}
              Email
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={12}
                height={12}
              />
            </span>
            <span>
              <input
                type="email"
                placeholder="Insira seu novo email"
                {...register("email")}
              />
              <input
                type="email"
                placeholder="Confirme seu novo email"
                {...register("new_email")}
              />
            </span>
          </label>
          {/* Campo de telefone */}
          <label className={styles.formField}>
            <span className={styles.fieldName}>
              {" "}
              Telefone
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={12}
                height={12}
              />
            </span>
            <span>
              <input
                type="tel"
                placeholder="Insira seu novo número"
                {...register("phoneNumber")}
              />
            </span>
          </label>
          {/* Campo de residência */}
          {/*       <span className={styles.inlineFields}>
            <span>
            <label className={styles.fieldName}>
              Cidade
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={12}
                height={12}
              />

              <input
                type="text"
                className={styles.inputInline}
                placeholder="Insira sua nova cidade"
                {...register("city")}
              />
            </label>
            </span>

            <label className={styles.fieldName}>
              Estado
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={12}
                height={12}
              />

              <input
                type="text"
                className={styles.inputInline}
                placeholder="Insira seu novo Estado"
                {...register("state")}
              />
            </label>


            <label className={styles.fieldName}>
              Pais
              <Image
                src={editIcon}
                alt="icone de um lápis"
                width={12}
                height={12}
              />
              <input
                type="text"
                className={styles.inputInline}
                placeholder="Insira seu novo País"
                {...register("country")}
              />
            </label>
          </span> */}

          <EditarPerfilEndereco register={register} />

          <button type="submit" className={styles.btnSalvar}>
            Salvar alterações
          </button>
        </form>
      </main>
    </>
  );
};

export default PerfilComponent;
