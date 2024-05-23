import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { schema } from "../templates/formAvaliarCaderno/schema";

type NotebookEvalForm = yup.InferType<typeof schema>;

type PutNotebookEvalForm = {
  data: NotebookEvalForm;
  notebookId: string | null;
};

const putNotebookEvalForm = async (
  data: NotebookEvalForm,
  notebookId: string | null
) => api.put(`/notebooks/evaluation/${notebookId}`, { ...data });

const usePutNotebookEvalForm = () =>
  useMutation({
    mutationFn: ({ data, notebookId }: PutNotebookEvalForm) =>
      putNotebookEvalForm(data, notebookId),
  });

export default usePutNotebookEvalForm;
