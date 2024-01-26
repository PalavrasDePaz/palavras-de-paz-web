import React from "react";
import Image from "next/image";

import editBtn from "../../../../public/static/images/icons/edit.svg";

import style from "../styles/ItemTruma.module.css";

interface ItemTurmaProps {
  label: string;
  value: string;
  placeholder: string;
  isEditing?: boolean;
  onEditClick: () => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemTurma: React.FC<ItemTurmaProps> = ({
  label,
  value,
  placeholder,
  onEditClick,
  handleSaveEdit,
  handleCancelEdit,
  onChange,
  isEditing = false,
}) => (
  <div className={style.ItemTurmaContainer}>
    <p className={style.chave}>
      {label}: <span className={style.valor}>{value}</span>
      <button type="button" onClick={onEditClick} className={style.editBtn}>
        <Image
          src={editBtn}
          alt="imagem de um lápis, como se fosse para editar"
        />
      </button>
    </p>

    {isEditing && (
      <div>
        <input
          className={style.isEditing}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button onClick={handleSaveEdit}>✓</button>
        <button onClick={handleCancelEdit}>x</button>
      </div>
    )}
  </div>
);

export default ItemTurma;
