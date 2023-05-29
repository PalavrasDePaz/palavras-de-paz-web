import React from 'react';
import Image from 'next/image';

import Logo from '../../../../public/static/images/logo.svg';

import styles from '../styles/HeaderCadastro.module.css';

export default function HeaderCadastro() {
  return (
    <>
      <header className={ styles.headerContainer }>
        <Image
          src={ Logo }
          alt="Logo da organização e logo abaixo está escrito
        palavras de paz, programa de educação para a paz, com a cor verde"
          width="333px"
          height="100px"
        />

        <h1 className={ styles.registerTitle }>Cadastro de voluntário</h1>
      </header>

      <hr className={ styles.line } />
    </>
  );
}
