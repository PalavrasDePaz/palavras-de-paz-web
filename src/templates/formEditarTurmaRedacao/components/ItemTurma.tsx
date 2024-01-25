import React from "react";
import Image from "next/image";

import editBtn from "../../../../public/static/images/icons/edit.svg";

interface ItemTurmaProps {
  label: string;
  value: string;
  onEditClick: () => void;
}

const ItemTurma: React.FC<ItemTurmaProps> = ({ label, value, onEditClick }) => (
  <p>
    {label}: <span>{value}</span>
    <button type="button" onClick={onEditClick}>
      <Image
        src={editBtn}
        alt="imagem de um lápis, como se fosse para editar"
        width="10px"
        height="10px"
      />
    </button>
  </p>
);

export default ItemTurma;
