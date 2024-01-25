import React from "react";
import Image from "next/image";

import editBtn from "../../../../public/static/images/icons/edit.svg";

import style from "../styles/ItemTruma.module.css";

interface ItemTurmaProps {
  label: string;
  value: string;
  onEditClick: () => void;
}

const ItemTurma: React.FC<ItemTurmaProps> = ({ label, value, onEditClick }) => (
  <p className={style.chave}>
    {label}: <span className={style.valor}>{value}</span>
    <button type="button" onClick={onEditClick} className={style.editBtn}>
      <Image
        src={editBtn}
        alt="imagem de um lápis, como se fosse para editar"
      />
    </button>
  </p>
);

export default ItemTurma;
