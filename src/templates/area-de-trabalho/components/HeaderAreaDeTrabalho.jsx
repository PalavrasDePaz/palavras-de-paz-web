import React from 'react';
import Image from 'next/image';

import Login from '../../../../public/static/images/icons/login.svg';
import Logo from '../../../../public/static/images/logo.svg';

import Styles from '../styles/AreaDeTrabalho.module.css';

export default function HeaderAreaDeTrabalho() {
  return (
    <header className={ Styles.headerContainer }>
      <Image
        src={ Logo }
        alt="Logo da organização e logo abaixo está escrito
        palavras de paz, programa de educação para a paz, com a cor verde"
        width="333px"
        height="100px"
      />
      <div className={ Styles.headerBtnLogin }>
        <div>Foto de Perfil</div>
        <Image
          src={ Login }
          alt="Botão de acesso ao login com imagem de uma seta dentro de uma porta"
        />
      </div>
    </header>
  );
}
