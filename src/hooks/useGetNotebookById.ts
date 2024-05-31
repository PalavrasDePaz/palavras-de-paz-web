import { AxiosResponse } from "axios";

import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";
import { NotebookAval } from "../templates/formEditarAvalCaderno/schema";

const getNotebookById = async (notebookId: string | null) =>
  api.get(`/notebooks/${notebookId}`);

const useGetNotebookById = (
  notebookId: string | null
): UseQueryResult<AxiosResponse<NotebookAval>> =>
  useQuery(["notebooks", notebookId], () => getNotebookById(notebookId), {
    enabled: !!notebookId,
  });

export default useGetNotebookById;
