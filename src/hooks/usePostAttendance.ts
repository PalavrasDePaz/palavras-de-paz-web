import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { schema } from "../templates/presenca/schema";

import { User } from "./types";

type AttendanceFormFields = yup.InferType<typeof schema>;

type PostAttendanceParams = {
  data: AttendanceFormFields;
  user: User;
};

const postAttendance = async (data: AttendanceFormFields, user: User) => {
  const postForm = { ...data, idvol: user.idvol };
  return api.post("/attendances", postForm);
};

const usePostAttendance = () =>
  useMutation({
    mutationFn: ({ data, user }: PostAttendanceParams) =>
      postAttendance(data, user),
  });

export default usePostAttendance;

/* 
Realiza a autenticação de um voluntário na API, gerando um token de acesso caso as credenciais estejam corretas.

Detalhes:
  O código utiliza useMutation do React Query para gerenciar a requisição de login.
  A função logIn realiza a requisição POST à rota da API /volunteers/login com as credenciais do usuário.
  O token de acesso, caso gerado, provavelmente será retornado na resposta da API.
  O código não trata explicitamente o armazenamento ou uso do token de acesso.
*/
