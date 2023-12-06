import React from "react";
import Image from "next/image";
import { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

import editIcon from "../../../../public/static/images/icons/edit.svg";
import { FormType } from "../types/FormType";

import styles from "../styles/Pagina-de-perfil.module.css";

interface PasswordInputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  name: FieldPath<FormType>;
  confirm?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  register,
  name,
  confirm = false,
}) => (
  <label className={styles.formField}>
    <span className={styles.fieldName}>
      Senha
      <Image src={editIcon} alt="icone de um lápis" width={12} height={12} />
    </span>
    <span>
      <input
        type="password"
        placeholder={`Digite ${confirm ? "novamente " : ""}`}
        {...register(name, { minLength: 6 })}
      />
    </span>
  </label>
);

export default PasswordInput;
