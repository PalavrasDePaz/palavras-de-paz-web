import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import EmptyOption from '../../components/forms/EmptyOption';

import styles from './index.module.css';

type SelectableProps = {
  fieldName: keyof FieldValues;
  question: string;
  options: Array<{ label: string; value: string }>;
  register: UseFormRegister<FieldValues>;
};

function Selectable({
  fieldName,
  question,
  options,
  register,
}: SelectableProps) {
  return (
    <div className={ styles.presencaDiv }>
      <label
        className={ styles.presencaInputLabel }
        htmlFor={ fieldName }
      >
        {question}
      </label>
      <select
        defaultValue=""
        className={ styles.presencaInputText }
        { ...register(fieldName) }
      >
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
