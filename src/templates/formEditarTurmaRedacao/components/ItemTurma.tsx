import React, { useState } from "react";
import Image from "next/image";

import editBtn from "../../../../public/static/images/icons/edit.svg";

import style from "../styles/ItemTurma.module.css";

interface ItemTurmaProps {
  label: string;
  value: string | number;
  placeholder: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputType: "input" | "textarea"; // Nova propriedade para determinar o tipo de entrada
}

const ItemTurma: React.FC<ItemTurmaProps> = ({
  label,
  value,
  placeholder,
  onChange,
  inputType,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className={style.ItemTurmaContainer}>
      {inputType === "input" ? (
        <p className={style.chave}>
          {label}: <span className={style.valor}>{value}</span>
          <button
            type="button"
            onClick={handleEditClick}
            className={style.editBtn}
          >
            <Image
              src={editBtn}
              alt="imagem de um lápis, como se fosse para editar"
            />
          </button>
        </p>
      ) : (
        <p className={style.chave}>
          {label}
          <button
            type="button"
            onClick={handleEditClick}
            className={style.editBtn}
          >
            <Image
              src={editBtn}
              alt="imagem de um lápis, como se fosse para editar"
            />
          </button>
          <br />
          <div className={style.valorTextArea}>{value}</div>
        </p>
      )}

      {isEditing && (
        <form>
          {inputType === "input" ? (
            <input
              className={style.isEditing}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          ) : (
            <textarea
              className={style.isEditingTextArea}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )}
          <button onClick={handleSaveEdit}>✓</button>
          {/* <button onClick={handleCancelEdit}>x</button> */}
        </form>
      )}
    </div>
  );
};

export default ItemTurma;
