import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { Essays } from "./types";

// Consulta API pelo ID da pessoa  voluntária
const getEssays = async (volunteerId: number) =>
  (await api.get(`/book-club-class/available/${volunteerId}`)).data;

const useGetEssays = (volunteerId: number): UseQueryResult<Essays[]> =>
  useQuery(["essays", volunteerId], () => getEssays(volunteerId));

export default useGetEssays;

/* 
Funcionalidade:
Busca a lista de redações disponíveis para um voluntário através de uma requisição GET à API.

Parâmetros:
volunteerId: Número, ID do voluntário para buscar as redações.

Retorno:
Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição:
  Dados: Array de objetos do tipo Essays contendo informações sobre as redações.
  Carregando: Booleano indicando se a requisição ainda está em andamento.
  Erro: Objeto de erro caso a requisição tenha falhado.

  Observações:
  O React Query gerencia o cache e o estado da requisição automaticamente.
*/
