import React from "react";

import styles from "../styles/CadastroTelas.module.css";
import styleButton from "../styles/CadastroTemplate.module.css";

export default function cadastroPrimeiraTela({ buttonCallback } = props) {
  return (
    <form className={styles.cadastroFormSection}>
      <section>
        <h1 className={styles.formTitle}>CADASTRO DE VOLUNTÁRIO</h1>

        <p className={styles.formParagraph}>Seja bem-vindo(a)!</p>
        <p className={styles.formParagraph}>
          Preparamos este formulário para podermos te conhecer melhor, saber
          sobre seus conhecimentos e experiências e para entendermos a sua
          disponibilidade com o nosso voluntariado. Quanto mais você puder
          compartilhar com a gente, mais conseguiremos te ajudar a alcançar seus
          objetivos!
        </p>

        <p className={styles.formParagraph}>
          O preenchimento tomará no máximo dez minutos do seu tempo! Bora lá?
        </p>
      </section>

      <button
        type="button"
        onClick={() => buttonCallback()}
        className={styleButton.cadastroFormSectionButton}
      >
        Próximo
      </button>
    </form>
  );
}
