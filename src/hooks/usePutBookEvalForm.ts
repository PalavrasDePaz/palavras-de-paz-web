import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { BookEvalForm } from "../templates/formEditarAvalLivro/schema";

type PutBookEvalForm = {
  data: BookEvalForm;
  evaluationId: string | null;
};

const putNotebookEvalForm = async (
  data: BookEvalForm,
  evaluationId: string | null
) => api.put(`/book-evaluations/${evaluationId}`, { ...data });

const usePutBookEvalForm = () =>
  useMutation({
    mutationFn: ({ data, evaluationId }: PutBookEvalForm) =>
      putNotebookEvalForm(data, evaluationId),
  });

export default usePutBookEvalForm;
