import React from "react";
import Image from "next/image";
import { FieldValues, UseFormRegister } from "react-hook-form";

import editIcon from "../../../../public/static/images/icons/edit.svg";

import styles from "../styles/Pagina-de-perfil.module.css";

interface EditarPerfilEnderecoProps {
  register: UseFormRegister<FieldValues>;
}

const EditarPerfilEndereco: React.FC<EditarPerfilEnderecoProps> = ({
  register,
}) => (
  <>
    <div>
      <span className={styles.fieldName}>
        Cidade
        <Image src={editIcon} alt="icone de um lápis" width={12} height={12} />
      </span>
      <input
        type="text"
        className={styles.inputInline}
        placeholder="Insira sua nova cidade"
        {...register("city")}
      />
    </div>

    <div>
      <span className={styles.fieldName}>
        Estado
        <Image src={editIcon} alt="icone de um lápis" width={12} height={12} />
      </span>
      <input
        type="text"
        className={styles.inputInline}
        placeholder="Insira seu novo Estado"
        {...register("state")}
      />
    </div>

    <div>
      <span className={styles.fieldName}>
        País
        <Image src={editIcon} alt="icone de um lápis" width={12} height={12} />
      </span>
      <input
        type="text"
        className={styles.inputInline}
        placeholder="Insira seu novo País"
        {...register("country")}
      />
    </div>
  </>
);

export default EditarPerfilEndereco;
