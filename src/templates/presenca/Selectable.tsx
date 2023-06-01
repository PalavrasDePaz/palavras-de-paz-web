import React from 'react';

import EmptyOption from '../../components/forms/EmptyOption';

import styles from '../cadastro/styles/CadastroTelas.module.css';

type SelectableProps = {
  fieldName: string;
  question: string;
  options: Array<{ label: string; value: string }>;
};

function Selectable({ fieldName, question, options }: SelectableProps) {
  return (
    <div className={ styles.cadastroFormDiv }>
      <label
        className={ styles.cadastroFormSectionInputLabel }
        htmlFor={ fieldName }
      >
        {question}
      </label>
      <select defaultValue="" className={ styles.cadastroFormSectionInputText }>
        <EmptyOption />
        {options.map(({ label, value }) => (
          <option key={ value } value={ value }>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selectable;
