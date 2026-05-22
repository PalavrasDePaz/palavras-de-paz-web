// Sends an email to the volunteer with a link for creating or update a forgotten password.

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

const requestPasswordEmail = async (email: string) =>
  api.post("/volunteers/password-email", { email });

const useRequestPasswordEmail = () =>
  useMutation({
    mutationFn: (email: string) => requestPasswordEmail(email),
  });

export default useRequestPasswordEmail;

/* 
Envia um e-mail para o voluntário contendo um link para redefinir a senha.

Parâmetros:
  email: String, e-mail do voluntário para o qual a senha será redefinida.

Retorno:
  Um objeto UseQueryResult do React Query, contendo informações sobre o resultado da requisição (disponível apenas para propósitos ilustrativos, já que useMutation não retorna dados):
    Carregando: Booleano indicando se a requisição ainda está em andamento.
    Erro: Objeto de erro caso a requisição tenha falhado.

Observações:
  O código utiliza useMutation do React Query para gerenciar a requisição de solicitação de redefinição de senha.
  A função requestPasswordEmail envia uma requisição POST à API na rota /volunteers/password-email com o e-mail do voluntário.
  A API é responsável por gerar o link de redefinição de senha e incluí-lo no e-mail enviado.
  O código não retorna dados da API, pois o foco é disparar a solicitação do e-mail.
*/
