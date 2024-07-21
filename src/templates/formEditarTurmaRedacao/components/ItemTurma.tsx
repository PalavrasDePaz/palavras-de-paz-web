/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable complexity */

import React, { useState } from "react";
import Image from "next/image";

import editBtn from "../../../../public/static/images/icons/edit.svg";

import style from "../styles/ItemTurma.module.css";

interface ItemTurmaProps {
  label: string;
  value?: string | number;
  placeholder: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputType: "input" | "textarea" | "selectbox" | "link" | "selectboxes";
  viewOnly?: boolean;
  options?: string[];
  values?: string[];
}

const ItemTurma: React.FC<ItemTurmaProps> = ({
  label,
  value,
  placeholder,
  onChange,
  inputType,
  viewOnly,
  options,
  values,
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
        {inputType === "selectboxes" && <>{label}</>}
        {inputType === "link" && <>{label}: </>}
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
          <span className={style.valorSelectbox}>
            {options?.map((option, index) => (
              <span key={label + index}>
                <input
                  type="checkbox"
                  className="me-1"
                  id={`${label + index}-${option}`}
                  name={`${label}-${option}`}
                  checked={value === option}
                  disabled
                />
                <label htmlFor={`${label + index}-${option}`}>{option}</label>
              </span>
            ))}
          </span>
        )}
        {inputType === "selectboxes" && !isEditing && (
          <span className={style.valorSelectbox}>
            {options?.map((option, index) => (
              <span key={label + index}>
                <input
                  type="checkbox"
                  className="me-1"
                  id={`${label + index}-${option}`}
                  name={`${label}-${option}`}
                  checked={values?.includes(option)}
                  disabled
                />
                <label htmlFor={`${label + index}-${option}`}>{option}</label>
              </span>
            ))}
          </span>
        )}
        {inputType === "link" && !isEditing && (
          <a
            className={style.valor}
            href={String(value)}
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        )}
      </p>

      {isEditing && !viewOnly && (
        <div style={{ width: "fit-content" }}>
          {(inputType === "input" || inputType === "link") && (
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
                    className="me-1"
                    id={`${label + index}-${option}`}
                    name={`${label}-${option}`}
                    value={option}
                    onChange={onChange}
                    checked={value === option}
                  />
                  <label htmlFor={`${label + index}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
          {inputType === "selectboxes" && (
            <div className={style.valorSelectbox}>
              {options?.map((option, index) => (
                <div key={label + index}>
                  <input
                    type="checkbox"
                    className="me-1"
                    id={`${label + index}-${option}`}
                    name={`${label}-${option}`}
                    value={option}
                    onChange={onChange}
                    checked={values?.includes(option)}
                  />
                  <label htmlFor={`${label + index}-${option}`}>{option}</label>
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
