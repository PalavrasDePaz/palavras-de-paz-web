import React from 'react';

import styles from '../cadastro/styles/CadastroTelas.module.css';

type TextFieldProps = {
  fieldName: string;
  question: string;
};

function TextField({ fieldName, question }: TextFieldProps) {
  const adjustTextAreaSize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    target.style.height = 'inherit';
    target.style.height = `${ target.scrollHeight }px`;
  };

  return (
    <div className={ styles.cadastroFormDiv }>
      <label
        className={ styles.cadastroFormSectionInputLabel }
        htmlFor={ fieldName }
      >
        {question}
      </label>
      <textarea
        maxLength={ 300 }
        className={ styles.cadastroFormSectionInputText }
        onChange={ adjustTextAreaSize }
      />
    </div>
  );
}

export default TextField;
