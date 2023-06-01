import React from 'react';
import Image from 'next/image';

import Logo from '../../../public/static/images/logo.svg';

import styles from './HeaderWorkspace.module.css';

type HeaderWorkspaceProps = {
  title: string;
};

export default function HeaderWorkspace({ title }: HeaderWorkspaceProps) {
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

        <h1 className={ styles.registerTitle }>{title}</h1>
      </header>

      <hr className={ styles.line } />
    </>
  );
}
