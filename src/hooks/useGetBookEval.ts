import { AxiosResponse } from "axios";

import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";
import { BookEval } from "../templates/formEditarAvalLivro/schema";

const getBookEvalForm = async (evaluationId: string | null) =>
  api.get(`/book-evaluations/${evaluationId}`);

const useGetBookEvalForm = (
  evaluationId: string | null
): UseQueryResult<AxiosResponse<BookEval>> =>
  useQuery(["getBookEval"], () => getBookEvalForm(evaluationId), {
    enabled: !!evaluationId,
  });

export default useGetBookEvalForm;
