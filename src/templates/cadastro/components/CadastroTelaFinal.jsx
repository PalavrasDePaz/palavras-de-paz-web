import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import LoadingSpinner from '../../../components/loadingSpinner/LoadingSpinner';
import { API } from '../../../constants';

import {
  EXISTING_MESSAGE,
  FUTURE_ROLES,
  SKILLS,
  UNEXPECTED_ERROR,
  VOLUNTEER_ALREADY_EXISTS,
} from './constants';

import styles from '../styles/CadastroTemplate.module.css';

const filterValues = (valuesObj, optionsObject) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Object.keys(valuesObj)
    // Pegamos todos os valores de checkbox e transformamos em um array
    .filter((key) => valuesObj[key] !== false)
    // Trocamos os nomes de item pelos labels.
    .map(
      (item) => optionsObject.find((option) => option.value === item)?.label,
    );

export default function cadastroTelaFinal({ data } = props) {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();

  // Workaround para transformar os valores dos checkbox em um array de strings
  const { interestFutureRoles, rolesPep, needDeclaration } = data;
  data.interestFutureRoles = filterValues(interestFutureRoles, FUTURE_ROLES);
  data.rolesPep = filterValues(rolesPep, SKILLS);
  // e transformar string em boolean
  data.needDeclaration = needDeclaration === 'sim';

  // Também não mandamos o valor do campo de deficiencia, só qual ela é, se houver.
  // E nem a confirmação de password.
  const { deficiencia, passConfirmation, ...restOfData } = data;

  // Removemos qualquer atributo que esteja nulo
  const apiObject = Object.fromEntries(
    Object.entries(restOfData).filter(([, v]) => v != null),
  );

  // Mandamos o dado
  const apiAddress = `${ API }/volunteers`;
  axios
    .post(apiAddress, apiObject)
    .then(() => router.push('/login'))
    .catch((error) => {
      setIsError(true);
      if (error.response.data.name) {
        setErrorMessage(error.response.data.name);
      }
    });

  const getContent = () => {
    if (isError) {
      const existingUser = errorMessage === VOLUNTEER_ALREADY_EXISTS;
      const message = existingUser ? EXISTING_MESSAGE : UNEXPECTED_ERROR;
      return (
        <p className={ styles.formParagraph } style={ { color: 'red' } }>
          {message}
        </p>
      );
    }

    return <LoadingSpinner />;
  };

  return (
    <section>
      {getContent()}
      {isError && (
        <Link href="/">
          <button className={ styles.cadastroFormSectionButton }>
            Voltar para a página inicial
          </button>
        </Link>
      )}
    </section>
  );
}
