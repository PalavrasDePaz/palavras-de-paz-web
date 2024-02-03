import React, { useState } from "react";
import Image from "next/image";

import editBtn from "../../../../public/static/images/icons/edit.svg";

import style from "../styles/ItemTurma.module.css";

interface ItemTurmaProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemTurma: React.FC<ItemTurmaProps> = ({
  label,
  value,
  placeholder,
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };
/*
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
*/
  const handleSaveEdit = () => {
    // Implemente a lógica para salvar as alterações (pode enviar para um servidor, atualizar o estado global, etc.)
    // Exemplo: console.log('Salvando alterações:', formData[index]);
    setIsEditing(false);
  };

  return (
    <div className={style.ItemTurmaContainer}>
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

      {isEditing && (
        <form>
          <input
            className={style.isEditing}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <button onClick={handleSaveEdit}>✓</button>
          {/* <button onClick={handleCancelEdit}>x</button>*/}
        </form>
      )}
    </div>
  );
};

export default ItemTurma;
