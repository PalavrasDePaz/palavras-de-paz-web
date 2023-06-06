import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import styles from './index.module.css';

type TextFieldProps = {
  fieldName: string;
  question: string;
  register: UseFormRegister<FieldValues>;
};

function TextField({ fieldName, question, register }: TextFieldProps) {
  const adjustTextAreaSize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    target.style.height = 'inherit';
    target.style.height = `${ target.scrollHeight }px`;
  };

  return (
    <div className={ styles.presencaDiv }>
      <label
        className={ styles.presencaInputLabel }
        htmlFor={ fieldName }
      >
        {question}
      </label>
      <textarea
        maxLength={ 300 }
        className={ styles.presencaInputText }
        onChange={ adjustTextAreaSize }
        { ...register(fieldName) }
      />
    </div>
  );
}

export default TextField;
