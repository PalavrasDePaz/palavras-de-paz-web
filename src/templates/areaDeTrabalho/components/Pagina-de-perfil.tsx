import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import editIcon from "../../../../public/static/images/icons/edit.svg";
import bntSair from "../../../../public/static/images/icons/exit.svg";
import profileImage from "../../../../public/static/images/icons/profile.svg";
import LogoPaz from "../../../../public/static/images/logo.svg";
import { useGetUser, useUpdateUser } from "../../../hooks";
import { UpdatePayload } from "../../../hooks/useUpdateUser";

import Modal from "./Modal";
import ModalSucess from "./ModalSucess";

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
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { mutate: updateUser } = useUpdateUser();
  const { register, handleSubmit, setValue } = useForm<FormType>();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (user) {
      setValue("phoneNumber", user.phoneNumber || "");
      setValue("city", user.city || "");
      setValue("state", user.state || "");
      setValue("country", user.country || "");
    }
  }, [user, setValue]);

  const onSubmitBtn = async (data: FormType) => {
    const email = user?.email;

    const updateData: UpdatePayload = {
      email: email || "",
      data: {
        phoneNumber: data.phoneNumber,
        city: data.city,
        state: data.state,
        country: data.country,
      },
    };

    try {
      await updateUser(updateData);
      setUpdateSuccess(true);
    } catch (error) {
      // console.error('Error updating:', error);
    }
  };

  return (
    <>
      <div className={styles.headerContent}>
        <div className={styles.sectionVoltar}>
          <Image src={bntSair} alt="Icone de sair" width={30} height={20} />
          <Link href="/login">
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
        <form onSubmit={handleSubmit(onSubmitBtn)}>
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
        {updateSuccess && (
          <ModalSucess
            isOpen={updateSuccess}
            onClose={() => setUpdateSuccess(false)}
            timeout={2500}
            content={
              <div className={styles.successMessage}>
                Dados atualizados com sucesso!
              </div>
            }
          />
        )}
      </div>
    </>
  );
};

export default PerfilComponent;
