import axios from "axios";

import { useMutation } from "@tanstack/react-query";

import { PALAVRAS_DE_PAZ_TOKEN } from "../constants";

import { User } from "./types";

export type UpdatePayload = {
  email: string;
  data: Partial<User>;
};

const updateUser = async ({ email, data }: UpdatePayload) => {
  try {
    const encodedEmail = encodeURIComponent(email); // substituindo caracteres especiais por sequências percentuais UTF-8, garantir a formatação correta de strings em URLs.
    const url = `https://api.palavrasdepaz.org:21043/volunteers/${encodedEmail}`;

    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);

    const response = await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    // console.error('Error updating:', error);
  }
};

export const useUpdateUser = () =>
  useMutation({
    mutationFn: async (updatePayload: UpdatePayload) => {
      try {
        const result = await updateUser(updatePayload);
        return result;
      } catch (error) {
        // console.error('Error updating:', error);
      }
    },
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
