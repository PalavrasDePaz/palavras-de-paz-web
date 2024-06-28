/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
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
  inputType: "input" | "textarea" | "selectbox"; // Nova propriedade para determinar o tipo de entrada
  viewOnly?: boolean;
  options?: string[];
}

const ItemTurma: React.FC<ItemTurmaProps> = ({
  label,
  value,
  placeholder,
  onChange,
  inputType,
  viewOnly,
  options,
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
      <p className={style.chave}>
        {inputType === "input" && !isEditing && (
          <>
            {label}: <span className={style.valor}>{value}</span>
          </>
        )}
        {inputType === "textarea" && <>{label}</>}
        {inputType === "selectbox" && <>{label}</>}
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
        {inputType === "textarea" && !isEditing && (
          <span className={style.valorTextArea}>{value}</span>
        )}
        {inputType === "selectbox" && !isEditing && (
          <div className={style.valorSelectbox}>
            {options?.map((option, index) => (
              <div key={label + index}>
                <input
                  type="checkbox"
                  id={`${label + index  }-${  option}`}
                  name={`${label + index  }-${  option}`}
                  checked={value === option}
                  disabled
                />
                <label htmlFor={`${label + index  }-${  option}`}>
                  {` ${  option}`}
                </label>
              </div>
            ))}
          </div>
        )}
      </p>

      {isEditing && !viewOnly && (
        <div style={{ width: "fit-content" }}>
          {inputType === "input" && (
            <input
              className={style.isEditing}
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )}
          {inputType === "textarea" && (
            <textarea
              className={style.isEditingTextArea}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          )}
          {inputType === "selectbox" && (
            <div className={style.valorSelectbox}>
              {options?.map((option, index) => (
                <div key={label + index}>
                  <input
                    type="checkbox"
                    className={`selectbox-${  label}`}
                    id={`${label + index  }-${  option}`}
                    name={`${label + index  }-${  option}`}
                    value={option}
                    onChange={onChange}
                    checked={value === option}
                  />
                  <label htmlFor={`${label + index  }-${  option}`}>
                    {` ${  option}`}
                  </label>
                </div>
              ))}
            </div>
          )}
          <button onClick={handleSaveEdit}>✓</button>
        </div>
      )}
    </div>
  );
};

export default ItemTurma;
