import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

type Workshops = {
  idAttend: number;
  submissionDate: string;
  workshopSubject: string;
};

const getAttendances = async (volunteerId: number) =>
  (await api.get(`attendances/volunteer/${volunteerId}`)).data;

const useGetAttendances = (volunteerId: number): UseQueryResult<Workshops[]> =>
  useQuery(["attendances", volunteerId], () => getAttendances(volunteerId), {
    enabled: !!volunteerId,
  });

export default useGetAttendances;

/* 
  Documentação resumida do código useGetAttendances
  Funcionalidade:
    Busca a lista de workshops inscritos por um voluntário através de uma requisição GET à API.
  
  Parâmetros:
    volunteerId: Número, ID do voluntário para buscar as inscrições.
  
  Retorno:
  Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição:
    Dados: Array de objetos do tipo Workshops contendo informações sobre as inscrições.
    Carregando: Booleano indicando se a requisição ainda está em andamento.
    Erro: Objeto de erro caso a requisição tenha falhado.
  
  Observações:
    A requisição só é disparada se volunteerId for truthy (diferente de zero, null, undefined).
    O React Query gerencia o cache e o estado da requisição automaticamente.
  */
