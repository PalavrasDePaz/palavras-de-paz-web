import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

interface EssaysCount {
  count: number;
}
const getCount = async (volunteerId: number): Promise<EssaysCount> =>
  (await api.get(`/book-club-class/count/${volunteerId}`)).data;

const useGetEssaysCount = (volunteerId: number): UseQueryResult<EssaysCount> =>
  useQuery(["count", volunteerId], () => getCount(volunteerId));

export default useGetEssaysCount;
