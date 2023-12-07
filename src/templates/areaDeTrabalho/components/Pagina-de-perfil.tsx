import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import editIcon from "../../../../public/static/images/icons/edit.svg";
import profileImage from "../../../../public/static/images/icons/profile.svg";
import { useGetUser, useUpdateUser } from "../../../hooks";
import { UpdatePayload } from "../../../hooks/useUpdateUser";
import useUserEmail from "../../../hooks/useUserEmail";
import { FormType } from "../types/FormType";

import EditarPerfilEndereco from "./Editar-Perfil-Endereço";
import ModalSucess from "./ModalSucess";
import ProfileHeader from "./ProfileHeader";

import styles from "../styles/Pagina-de-perfil.module.css";

const MIN_PASSWORD_LENGTH = 6;

const PerfilComponent = () => {
  const userEmail = useUserEmail();
  const { data: user } = useGetUser(userEmail);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { mutate: updateUser } = useUpdateUser();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormType>();

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

    if (data.new_email && data.new_email !== "") {
      updateData.data.email = data.new_email;
    }
    if (data.new_password && data.new_password !== "") {
      updateData.data.password = data.new_password;
    }

    updateUser(updateData);
    setUpdateSuccess(true);
  };

  const handleModalClose = () => {
    setUpdateSuccess(false);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <>
      <ProfileHeader />
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
                {...register("password", { minLength: 6 })}
              />
              <input
                type="password"
                placeholder="Confirme sua nova senha"
                {...register("new_password", {
                  validate: (value) => {
                    const passwordValue = getValues("password");
                    let errorMessage = "";

                    if (value && !passwordValue) {
                      errorMessage = "Digite sua nova senha primeiro";
                    } else if (value !== passwordValue) {
                      errorMessage = "As senhas não coincidem";
                    } else if (value && value.length < MIN_PASSWORD_LENGTH) {
                      errorMessage =
                        "A nova senha deve ter pelo menos 6 caracteres";
                    }

                    return errorMessage || true;
                  },
                })}
              />
            </span>
            {errors.new_password && (
              <span className={styles.errorMessage}>
                {errors.new_password.message ||
                  "A nova senha deve ter pelo menos 6 caracteres"}
              </span>
            )}
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
                {...register("new_email", {
                  validate: (value) => {
                    const emailValue = getValues("email");
                    let errorMessage = "";

                    if (value && !emailValue) {
                      errorMessage = "Digite seu novo e-mail primeiro";
                    } else if (value !== emailValue) {
                      errorMessage = "Os e-mails não coincidem";
                    }
                    return errorMessage || true;
                  },
                })}
              />
            </span>
            {errors.new_email && <span>{errors.new_email.message}</span>}
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
          <EditarPerfilEndereco register={register} />
          <button type="submit" className={styles.btnSalvar}>
            Salvar alterações
          </button>
        </form>
        {updateSuccess && (
          <ModalSucess
            isOpen={updateSuccess}
            onClose={handleModalClose}
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
