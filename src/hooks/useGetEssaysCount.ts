import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

interface EssaysCountResponse {
  count: number;
}

const getEssaysCount = async (idVol: number): Promise<EssaysCountResponse> => {
  const response = await api.get(`/book-club-class/count/${idVol}`);
  return response.data;
};

const useGetEssaysCount = (
  idVol: number
): UseQueryResult<EssaysCountResponse> =>
  useQuery(["count", idVol], () => getEssaysCount(idVol));

export default useGetEssaysCount;

/* 
Busca a quantidade de redações disponíveis para um voluntário através de uma requisição GET à API.

Parâmetros:
  idVol: Número, ID do voluntário para buscar a contagem de redações.

Retorno:
  Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição:
    Dados: Objeto do tipo EssaysCountResponse contendo a propriedade count com a quantidade de redações.
    Carregando: Booleano indicando se a requisição ainda está em andamento.
    Erro: Objeto de erro caso a requisição tenha falhado.

Observações:
  O React Query gerencia o cache e o estado da requisição automaticamente.
*/
