import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getBookEvalForm = async (evaluationId: string | null) =>
  api.get(`/book-evaluations/${evaluationId}`);

const useGetBookEvalForm = (evaluationId: string | null) =>
  useQuery(["getBookEval"], () => getBookEvalForm(evaluationId), {
    enabled: !!evaluationId,
  });

export default useGetBookEvalForm;
