import React from 'react';
import Link from 'next/link';
import styles from '../styles/CadastroTemplate.module.css';

const filterValues = (valuesObj) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Object.keys(valuesObj).filter((key) => valuesObj[key] !== false);

export default function cadastroTelaFinal({ data } = props) {
  // Workaround para transformar os valores dos checkbox em um array de strings
  const { interestFutureRoles, rolesPep } = data;
  data.interestFutureRoles = filterValues(interestFutureRoles);
  data.rolesPep = filterValues(rolesPep);

  // Também não mandamos o valor do campo de deficiencia, só qual ela é, se houver.
  const { deficiencia, ...apiObject } = data;

  console.log(apiObject);

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
