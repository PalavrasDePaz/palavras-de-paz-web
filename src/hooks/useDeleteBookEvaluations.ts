import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

type DeleteBookEval = {
  evaluationId: number;
};

const deleteBookEval = async (evaluationId: number) =>
  api.delete(`/book-evaluations/${evaluationId}`);

const useDeleteBookEval = () =>
  useMutation({
    mutationFn: ({ evaluationId }: DeleteBookEval) =>
      deleteBookEval(evaluationId),
  });

export default useDeleteBookEval;
