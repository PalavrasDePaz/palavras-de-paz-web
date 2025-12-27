import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { schema } from "../templates/formAvaliarCaderno/schema";

type NotebookEvalForm = yup.InferType<typeof schema>;

type PutNotebookEvalForm = {
  data: NotebookEvalForm;
  notebookId: string;
};

const putNotebookEvalForm = async (
  data: NotebookEvalForm,
  notebookId: string
) => api.put(`/notebooks/${notebookId}`, { ...data });

const usePutNotebookEvalForm = () =>
  useMutation({
    mutationFn: ({ data, notebookId }: PutNotebookEvalForm) =>
      putNotebookEvalForm(data, notebookId),
  });

export default usePutNotebookEvalForm;

/* 
Envia uma avaliação de caderno para a API, associando-a ao identificador do caderno. O formato dos dados de avaliação é validado usando Yup (schema não fornecido).

Detalhes:
  O código utiliza useMutation do React Query para gerenciar a requisição de envio da avaliação.
  A função putNotebookEvalForm valida os dados do formulário usando a biblioteca Yup (schema não fornecido no código).
  A função putNotebookEvalForm realiza uma requisição PUT à API, atualizando o recurso /notebooks/${notebookId} com os dados de avaliação.

*/
