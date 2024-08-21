import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { yupResolver } from "@hookform/resolvers/yup";

import ErrorMessage from "../../../components/forms/ErrorMessage";

import { cadastroTela1Schema, MAX_CHARS } from "./schemas";

import styles from "../styles/CadastroTelas.module.css";
import styleButton from "../styles/CadastroTemplate.module.css";

export default function cadastroPrimeiraTela({
  buttonCallback,
  data,
  student,
} = props) {
  useEffect(() => {
    console.log(student);
  }, [student]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const changePasswordVisibility = () =>
    setIsPasswordVisible((_visible) => !_visible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cadastroTela1Schema),
  });

  function ShowPassButton() {
    return (
      <button
        type="button"
        onClick={changePasswordVisibility}
        className={styles.cadastroPassButton}
        title={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
      >
        {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
      </button>
    );
  }

  return (
    <form
      className={styles.cadastroFormSection}
      onSubmit={handleSubmit(buttonCallback)}
    >
      <section>
        <h1 className={styles.formTitle}>
          {student ? "INSCRIÇÃO DE ESTUDANTE" : "CADASTRO DE VOLUNTÁRIOS"}
        </h1>

        <p className={styles.formParagraph}>Seja bem-vindo(a)!</p>
        {student === true ? (
          <p className={styles.formParagraph}>
            Preparamos este formulário para podermos te conhecer melhor.
          </p>
        ) : (
          <p className={styles.formParagraph}>
            Preparamos este formulário para podermos te conhecer melhor, saber
            sobre seus conhecimentos e experiências e para entendermos a sua
            disponibilidade com o nosso voluntariado. Quanto mais você puder
            compartilhar com a gente, mais conseguiremos te ajudar a alcançar
            seus objetivos!
          </p>
        )}

        {student === true ? (
          <p className={styles.formParagraph}>
            O preenchimento tomará no máximo cinco minutos do seu tempo! Bora
            lá?
          </p>
        ) : (
          <p className={styles.formParagraph}>
            O preenchimento tomará no máximo dez minutos do seu tempo! Bora lá?
          </p>
        )}

        <section className={styles.cadastroFormSectionInputContainer}>
          <div className={styles.cadastroFormDiv}>
            <label
              className={styles.cadastroFormSectionInputLabel}
              htmlFor="name"
            >
              Nome Completo
            </label>

            <input
              placeholder="Digite seu nome completo"
              type="text"
              maxLength={MAX_CHARS}
              defaultValue={data.name}
              className={styles.cadastroFormSectionInputText}
              {...register("name")}
            />
            <ErrorMessage showError={errors.name} style={styles.inputError} />
          </div>

          <div className={styles.cadastroFormDiv}>
            <label
              className={styles.cadastroFormSectionInputLabel}
              htmlFor="email"
            >
              E-mail
            </label>

            <input
              placeholder="Digite seu email"
              type="text"
              maxLength={MAX_CHARS}
              defaultValue={data.email}
              className={styles.cadastroFormSectionInputText}
              {...register("email")}
            />
            <ErrorMessage showError={errors.email} style={styles.inputError} />
          </div>

          <div className={styles.cadastroFormDiv}>
            <label
              className={styles.cadastroFormSectionInputLabel}
              htmlFor="password"
            >
              Senha
            </label>

            <input
              placeholder="Digite sua senha"
              type={isPasswordVisible ? "text" : "password"}
              maxLength={12}
              defaultValue={data.password}
              className={styles.cadastroFormSectionInputText}
              {...register("password")}
            />
            <ShowPassButton />
            <ErrorMessage
              showError={errors.password}
              style={styles.inputError}
            />
          </div>

          <div className={styles.cadastroFormDiv}>
            <label
              className={styles.cadastroFormSectionInputLabel}
              htmlFor="password"
            >
              Confirme sua senha
            </label>

            <input
              type={isPasswordVisible ? "text" : "password"}
              maxLength={12}
              defaultValue={data.passConfirmation}
              className={styles.cadastroFormSectionInputText}
              placeholder="Confirme sua senha"
              {...register("passConfirmation")}
            />
            <ShowPassButton />
            <ErrorMessage
              showError={errors.passConfirmation}
              style={styles.inputError}
            />
          </div>
        </section>
      </section>
      <button type="submit" className={styleButton.cadastroFormSectionButton}>
        Próximo
      </button>
    </form>
  );
}
