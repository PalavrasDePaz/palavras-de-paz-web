import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import HeaderWorkspace from "../../components/headerWorkspace/HeaderWorkspace";

import { INTRO_TEXT, OPEN_TEXT_FIELDS, SELECT_QUESTIONS } from "./constants";
import { schema } from "./schema";
import Selectable from "./Selectable";
import TextField from "./TextField";

import styles from "./index.module.css";

function FormDePresenca() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <HeaderWorkspace title="Formulário de Presença" />
      <div className={styles.presencaContainer}>
        <form className={styles.formPresenca} onSubmit={onSubmit}>
          <p className={styles.formParagraph}>{INTRO_TEXT}</p>
          {SELECT_QUESTIONS.map(({ fieldName, question, options }) => (
            <Selectable
              key={fieldName}
              fieldName={fieldName}
              question={question}
              options={options.map((option) => ({
                label: option,
                value: option,
              }))}
              register={register}
            />
          ))}
          {OPEN_TEXT_FIELDS.map(({ label, text }) => (
            <TextField
              key={label}
              fieldName={label}
              question={text}
              register={register}
            />
          ))}
          <div className={styles.buttonsRow}>
            <button
              type="button"
              className={`${styles.presencaFormButton} ${styles.buttonWhite} `}
            >
              Sair
            </button>
            <div className={styles.divider} />
            <button
              type="submit"
              className={`${styles.presencaFormButton} ${styles.buttonGreen} `}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormDePresenca;
