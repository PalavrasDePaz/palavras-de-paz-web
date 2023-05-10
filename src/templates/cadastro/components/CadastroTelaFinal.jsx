import React from 'react';
import Link from 'next/link';
import styles from '../styles/CadastroTemplate.module.css';

export default function cadastroTelaFinal() {
  return (
    <section>
      <h1 className={ styles.formTitle }>OBRIGADO</h1>
      <p className={ styles.formParagraph }>Entraremos em contato em breve.</p>
      <Link href="/">
        <button className={ styles.cadastroFormSectionButton }>
          Voltar para a página inicial
        </button>
      </Link>
    </section>
  );
}
