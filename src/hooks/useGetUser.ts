import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { User } from "./types";

const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
const CACHE_TIME_IN_MINUTES = 2;

const getUser = async (email?: string): Promise<User | null> => {
  const response = await api.get(`/volunteers/${email}`);
  return response.data;
};

const useGetUser = (email?: string): UseQueryResult<User | null> =>
  useQuery(["user"], () => getUser(email), {
    staleTime:
      MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * CACHE_TIME_IN_MINUTES,
    enabled: !!email,
  });

export default useGetUser;

/* 
Busca as informações de um usuário da API, utilizando cache e atualização automática de dados.

Parâmetros:
  email: String opcional, email do usuário a ser buscado.

Retorno:
  Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição:
    Dados: Objeto do tipo User com as informações do usuário encontrado, ou null se não encontrado.
    Carregando: Booleano indicando se a requisição ainda está em andamento.
    Erro: Objeto de erro caso a requisição tenha falhado.

Detalhes:
  O código utiliza useQuery do React Query para gerenciar a requisição e o cache.
  A resposta da API é armazenada em cache por 2 minutos (CACHE_TIME_IN_MINUTES).
  A requisição só é disparada se email for truthy (diferente de zero, null, undefined).
  React Query atualiza o cache automaticamente após o tempo especificado (staleTime).
*/
