// Generate an access token for the volunteer if his login data is correct

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

type UserLogin = {
  email: string;
  password: string;
};

const logIn = async (user: UserLogin) => api.post("/volunteers/login", user);
const useLogin = () => useMutation((user: UserLogin) => logIn(user));

export default useLogin;

/* 
Realiza a autenticação de um voluntário na API, gerando um token de acesso caso as credenciais estejam corretas.

Detalhes:
  O código utiliza useMutation do React Query para gerenciar a requisição de login.
  A função logIn realiza a requisição POST à rota da API /volunteers/login com as credenciais do usuário.
  O token de acesso, caso gerado, provavelmente será retornado na resposta da API.
  O código não trata explicitamente o armazenamento ou uso do token de acesso.
*/
