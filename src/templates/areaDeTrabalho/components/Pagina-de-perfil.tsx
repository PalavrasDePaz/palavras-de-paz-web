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

import EditarPerfilEndereco from "./Editar-Perfil-Endereço";
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
          
        <form onSubmit={handleSubmit(onSubmitBtn)}>
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
      </main>
    </>
  );
};

export default PerfilComponent;
