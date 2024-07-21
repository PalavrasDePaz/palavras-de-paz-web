import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { BookEval } from "../templates/formEditarAvalLivro/schema";

type PutBookEval = {
  data: Partial<BookEval>;
  evaluationId: string | null;
};

const putNotebookEvalForm = async (
  data: Partial<BookEval>,
  evaluationId: string | null
) => api.put(`/book-evaluations/${evaluationId}`, { ...data });

const usePutBookEvalForm = () =>
  useMutation({
    mutationFn: ({ data, evaluationId }: PutBookEval) =>
      putNotebookEvalForm(data, evaluationId),
  });

export default usePutBookEvalForm;
