import React from "react";

import penitenciarias from "../../../helpers/penitenciarias";

import styles from "../../../styles/formularioAvaliação/FormularioAvaliacao.module.css";

interface UnidadePrisionalOptionsProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UnidadePrisional: React.FC<UnidadePrisionalOptionsProps> = ({
  handleChange,
}) => (
  <div>
    {penitenciarias.map((penitenciaria) => (
      <label key={penitenciaria.id} className={styles.labelClass}>
        <input
          className={styles.inputClass}
          type="radio"
          name="prisonUnit"
          value={penitenciaria.value}
          onChange={handleChange}
        />
        {penitenciaria.nome}
      </label>
    ))}
  </div>
);

export default UnidadePrisional;
