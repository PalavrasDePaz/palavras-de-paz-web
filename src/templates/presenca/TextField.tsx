import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './index.module.css';

type TextFieldProps = {
  fieldName: string;
  question: string;
  register: UseFormRegister<FieldValues>;
};

function TextField({ fieldName, question, register }: TextFieldProps) {
  return (
    <div className={ styles.presencaDiv }>
      <label className={ styles.presencaInputLabel } htmlFor={ fieldName }>
        {question}
      </label>
      <textarea
        maxLength={ 300 }
        className={ styles.presencaInputText }
        { ...register(fieldName) }
      />
    </div>
  );
}

export default TextField;
