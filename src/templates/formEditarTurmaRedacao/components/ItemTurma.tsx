/* eslint-disable react/require-default-props */
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
  viewOnly?: boolean;
}

const ItemTurma: React.FC<ItemTurmaProps> = ({
  label,
  value,
  placeholder,
  onChange,
  inputType,
  viewOnly,
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
          {!viewOnly && (
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
          )}
        </p>
      ) : (
        <p className={style.chave}>
          {label}
          {!viewOnly && (
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
          )}
          <br />
          <span className={style.valorTextArea}>{value}</span>
        </p>
      )}

      {isEditing && !viewOnly && (
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
