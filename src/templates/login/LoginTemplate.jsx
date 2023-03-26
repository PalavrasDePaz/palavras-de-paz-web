import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/static/images/logo.svg';
import LoginForm from './components/LoginInputs';
import styles from './styles/LoginTemplate.style.module.css';

function LoginTemplate() {
  return (
    <section className={ styles.login_section }>

      <Image
        style={ { cursor: 'pointer' } }
        src={ Logo }
        alt="logo-header"
        width="333px"
        height="150px"
      />

      <section className={ styles.login_section_form }>
        <LoginForm />
      </section>

    </section>
  );
}

export default LoginTemplate;
