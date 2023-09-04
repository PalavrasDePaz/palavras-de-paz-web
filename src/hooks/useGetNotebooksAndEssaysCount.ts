import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

interface CountResponse {
  count: number;
}

const getCount = async (
  idVol: number,
  apiEndpoint: string
): Promise<CountResponse> => {
  const response = await api.get(`/${apiEndpoint}/count/${idVol}`);
  return response.data;
};

const useGetNotebooksAndEssaysCount = (
  idVol: number,
  apiEndpoint: string
): UseQueryResult<CountResponse> =>
  useQuery(["count", idVol], () => getCount(idVol, apiEndpoint));

export default useGetNotebooksAndEssaysCount;
