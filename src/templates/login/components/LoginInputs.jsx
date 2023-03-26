import Link from 'next/link';
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from '../styles/LoginInputs.style.module.css';

function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  function handlePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div className={ styles.login_form_section }>
      <h1 className={ styles.login_form_section_title }>
        Faça seu login
      </h1>

      <div className={ styles.login_form_section_input_container }>
        <label
          className="login_form_section_input_label"
          htmlFor="email"
        >
          <b>E-mail</b>
        </label>
        <input
          placeholder="nome@palavrasdepaz.com.br"
          id="email"
          type="email"
          className={ styles.login_form_section_input_email }
        />
      </div>

      <div className={ styles.login_form_section_input_container }>
        <label
          className="login_form_section_input_label"
          htmlFor="password"
        >
          <b>Senha</b>
        </label>
        <div className={ styles.password_container }>
          <input
            placeholder="Digite sua senha"
            id="password"
            className={ styles.login_form_section_input_password }
            type={ isPasswordVisible ? 'text' : 'password' }
          />
          <button
            className={ styles.login_form_section_input_password_visibility }
            type="button"
            onClick={ handlePasswordVisibility }
          >
            { isPasswordVisible ? <FaEye /> : <FaEyeSlash /> }
          </button>
        </div>

      </div>

      <section className={ styles.login_form_section_buttons_container }>
        <button className={ styles.login_form_section_buttons }>
          Ajuda?
        </button>

        <button className={ styles.login_form_section_buttons }>
          Esqueceu a senha?
        </button>
      </section>

      <button className={ styles.login_form_button_enter }>
        Entrar
      </button>

      <Link
        href="/"
        className={ styles.login_form_button_back }
      >
        <button
          className={ styles.login_form_button_back }
        >
          Voltar para a página inicial
        </button>
      </Link>
    </div>
  );
}

export default LoginForm;
