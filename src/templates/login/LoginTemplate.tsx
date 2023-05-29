import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/static/images/logo.svg';
import LoginForm from './components/LoginInputs';
import styles from './styles/LoginTemplate.style.module.css';

function LoginTemplate() {
  return (
    <section className={ styles.loginSection }>
      <Image
        style={ { cursor: 'pointer' } }
        src={ Logo }
        alt="logo com a frase Palavras de Paz,
        programa de educação para a paz,
        escrito em verde"
        width="333px"
        height="150px"
      />

      <section className={ styles.loginSectionForm }>
        <LoginForm />
      </section>
    </section>
  );
}

export default LoginTemplate;
