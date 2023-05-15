import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styles from '../styles/CadastroTemplate.module.css';
import { API } from '../../../constants';
import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';

const filterValues = (valuesObj) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Object.keys(valuesObj).filter((key) => valuesObj[key] !== false);

export default function cadastroTelaFinal({ data } = props) {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  // Workaround para transformar os valores dos checkbox em um array de strings
  const { interestFutureRoles, rolesPep } = data;
  data.interestFutureRoles = filterValues(interestFutureRoles);
  data.rolesPep = filterValues(rolesPep);

  // Também não mandamos o valor do campo de deficiencia, só qual ela é, se houver.
  const { deficiencia, ...restOfData } = data;

  // Removemos qualquer atributo que esteja nulo
  const apiObject = Object.fromEntries(
    Object.entries(restOfData).filter(([, v]) => v != null),
  );

  // Mandamos o dado
  const apiAddress = `${ API }/volunteers`;
  axios
    .post(apiAddress, apiObject)
    .then(() => setIsSent(true))
    .catch((error) => {
      console.log(error);
      setIsError(true);
    });

  const getContent = () => {
    if (isSent) {
      return (
        <>
          <h1 className={ styles.formTitle }>OBRIGADO</h1>
          <p className={ styles.formParagraph }>
            Entraremos em contato em breve.
          </p>
        </>
      );
    }
    if (isError) {
      return (
        <p className={ styles.formParagraph } style={ { color: 'red' } }>
          Ocorreu um erro inesperado. Tente novamente mais tarde
        </p>
      );
    }

    return <LoadingSpinner />;
  };

  return (
    <section>
      {getContent()}
      {(isSent || isError) && (
        <Link href="/">
          <button className={ styles.cadastroFormSectionButton }>
            Voltar para a página inicial
          </button>
        </Link>
      )}
    </section>
  );
}
