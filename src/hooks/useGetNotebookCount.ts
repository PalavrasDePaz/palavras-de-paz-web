import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

interface NotebooksCountResponse {
  count: number;
}

const getNotebooksCount = async (
  idVol: number
): Promise<NotebooksCountResponse> => {
  const response = await api.get(`/notebooks/count/${idVol}`);
  return response.data;
};

const useGetNotebooksCount = (
  idVol: number
): UseQueryResult<NotebooksCountResponse> =>
  useQuery(["count", idVol], () => getNotebooksCount(idVol));

export default useGetNotebooksCount;
