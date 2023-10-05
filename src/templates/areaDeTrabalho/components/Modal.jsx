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
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    setIsSending(true);

    try {
      const withEmail = {
        ...data,
        email: user.email,
        name: `${user.name}, id:${user.idvol}`,
        subject: "teste subject",
      };

      await api.post("/volunteers/contact-email", withEmail);

      setIsSending(false);
      setIsSent(true);
      reset();
    } catch (error) {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.headerModal}>
      <div className={styles.alignBoxContainer}>
        <button className={styles.closeModal} onClick={onClose}>
          X
        </button>

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          rows="5"
          placeholder="Digite sua mensagem para podermos te ajudar"
          {...register("message")}
        />
        <ErrorMessage showError={errors.message} style={styles.inputError} />
        <button
          type="submit"
          className={styles.sendMessage}
          disabled={isSending}
        >
          {isSending ? <LoadingSpinner /> : "Enviar"}
        </button>
      </div>
      {isSent && <div>Obrigado pela mensagem. Retornaremos em breve.</div>}
    </form>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
