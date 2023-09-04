import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { Essays } from "./types";

// Consulta API pelo ID da pessoa  voluntária
const getCount = async (volunteerId: number) =>
  (await api.get(`/book-club-class/count/${volunteerId}`)).data;

const useGetEssaysCount = (volunteerId: number): UseQueryResult<Essays[]> =>
  useQuery(["count", volunteerId], () => getCount(volunteerId));

export default useGetEssaysCount;
