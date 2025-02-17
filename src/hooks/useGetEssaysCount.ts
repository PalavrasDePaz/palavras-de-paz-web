import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

interface EssaysCountResponse {
  count: number;
}

const getEssaysCount = async (idVol: number): Promise<EssaysCountResponse> => {
  const response = await api.get(`/book-club-class/count/${idVol}`);
  return response.data;
};

const useGetEssaysCount = (
  idVol: number
): UseQueryResult<EssaysCountResponse> =>
  useQuery(["bookClubCount", idVol], () => getEssaysCount(idVol));

export default useGetEssaysCount;
