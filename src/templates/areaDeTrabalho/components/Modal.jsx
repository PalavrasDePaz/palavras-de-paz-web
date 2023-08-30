import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../../api";
import ErrorMessage from "../../../components/forms/ErrorMessage";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import useGetUser from "../../../hooks/useGetUser";

import styles from "../styles/AreaDeTrabalho.module.css";

const schema = yup.object().shape({
  name: yup.string().required("* Campo obrigatório"),
  message: yup.string().required("* Campo obrigatório"),
});

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { data: user } = useGetUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    setIsSending(true);

    const withEmail = { ...data, email: user.email, subject: "teste subject" };

    api.post("/volunteers/contact-email", withEmail).then(() => {
      setIsSending(false);
      setIsSent(true);
    });
  };

  if (isSent) {
    return "Obrigado pela mensagem. Retornaremos em breve.";
  }

  if (isSending) {
    return <LoadingSpinner />;
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.headerModal}>
      <button className={styles.closeModal} onClick={onClose}>
        X
      </button>

      <label htmlFor="nome" {...register("nome")}>
        Nome
      </label>
      <input
        type="text"
        id="nome"
        placeholder="Digite seu nome "
        {...register("name")}
      />
      <ErrorMessage showError={errors.name} style={styles.inputError} />
        
      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        type="text"
        id="mensagem"
        rows="5"
        placeholder="Digite sua mensagem para podermos te ajudar"
        {...register("message")}
        width="150px"
      />
      <ErrorMessage showError={errors.message} style={styles.inputError} />
      <button type="submit" className={styles.sendMessage}>
        Enviar
      </button>
    </form>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
