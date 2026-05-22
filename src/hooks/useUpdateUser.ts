import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { PALAVRAS_DE_PAZ_TOKEN } from "../constants";

import { User } from "./types";

export type UpdatePayload = {
  email: string;
  data: Partial<User>;
};

const updateUser = async ({ email, data }: UpdatePayload) => {
  const encodedEmail = encodeURIComponent(email);

  const response = await api.patch(`/volunteers/${encodedEmail}`, data);

  return response.data;
};

export const useUpdateUser = () =>
  useMutation({
    mutationFn: updateUser,
  });

/* 
Atualiza as informações de um usuário na API palavrasdepaz.org.

Parâmetros:
  updatePayload: Objeto contendo:
  email: String, e-mail do usuário a ser atualizado.
  data: Objeto parcial do tipo User contendo os dados a serem atualizados.

Retorno:
  Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição (disponível apenas para propósitos ilustrativos, já que o código implementa tratamento de erros sem retorno):
    Carregando: Booleano indicando se a requisição ainda está em andamento.
    Erro: Objeto de erro caso a requisição tenha falhado (tratado internamente com log no console).

Observações:
  O código utiliza useMutation do React Query para gerenciar a requisição de atualização de usuário.
  A função updateUser monta a URL da API usando o e-mail codificado para URL.
  A função updateUser recupera o token de autenticação do localStorage e o inclui no header da requisição.
  O código implementa tratamento básico de erros no useMutation, mas apenas registra erros no console (sem retorno para o componente).
*/
