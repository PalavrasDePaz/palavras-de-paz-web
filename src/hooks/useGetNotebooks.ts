import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { Notebook } from "./types";

const getNotebooks = async (volunteerId: number) =>
  (await api.get(`/notebooks/available/${volunteerId}`)).data;

const useGetNotebooks = (volunteerId: number): UseQueryResult<Notebook[]> =>
  useQuery(["notebooks", volunteerId], () => getNotebooks(volunteerId));

export default useGetNotebooks;

/* 
Busca a lista de cadernos disponíveis para um voluntário através de uma requisição GET à API.

Parâmetros:
  volunteerId: Número, ID do voluntário para buscar os cadernos.

Retorno:
  Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição:
    Dados: Array de objetos do tipo Notebook contendo informações sobre os cadernos.
    Carregando: Booleano indicando se a requisição ainda está em andamento.
    Erro: Objeto de erro caso a requisição tenha falhado.

Observações:
  O React Query gerencia o cache e o estado da requisição automaticamente.

*/
