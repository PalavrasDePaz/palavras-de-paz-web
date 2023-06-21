import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

import { API } from '../../../constants';

export const getIsHigherEducation = (schooling?: string): boolean =>
  // eslint-disable-next-line implicit-arrow-linebreak
  !!(schooling && schooling.includes('superior'));

const NOT_FOUND = 404;

/**
 * Verifica se o email já está cadastrado no banco de dados.
 * @param email para verificar
 * @returns se a resposta for 404 Not found, podemos prosseguir.
 */
export const isNewEmail = async (email: string) => {
  const isEmailValid = isEmail(email);
  if (!isEmailValid) {
    // Caso o email seja inválido, ele tem que cair na validação anterior,
    // E não chegar ao erro de estar cadastrado.
    return true;
  }
  const apiAddress = `${ API }/volunteers/${ email }`;
  const check = await axios.head(apiAddress).catch((error) => error);

  // A API dá bad request quando não acha o email,
  // então temos que procurar no erro mesmo.
  return axios.isAxiosError(check) && check.response?.status === NOT_FOUND;
};

/**
 * Formata uma data para YYYY-MM-DD, ou string vazia se não existir.
 * @param date em formato de data ou de string
 * @returns a mesma data sempre em formato string, ou string vazia.
 */
export const formatDate = (date: Date | string): string => {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    return date;
  }
  return date.toISOString().split('T')[0];
};
