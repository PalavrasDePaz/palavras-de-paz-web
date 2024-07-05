import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { schema } from "../templates/formAvaliarCaderno/schema";

type NotebookEvalForm = yup.InferType<typeof schema>;

type PutNotebookEvalForm = {
  data: NotebookEvalForm;
  notebookEvalId: string | null;
};

const putNotebookEditEvalForm = async (
  data: NotebookEvalForm,
  notebookEvalId: string | null
) => api.put(`/notebooks/evaluation/${notebookEvalId}`, { ...data });

const usePutNotebookEditEvalForm = () =>
  useMutation({
    mutationFn: ({ data, notebookEvalId }: PutNotebookEvalForm) =>
      putNotebookEditEvalForm(data, notebookEvalId),
  });

export default usePutNotebookEditEvalForm;
