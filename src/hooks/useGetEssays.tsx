import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { Essays } from "./types";

// Consulta API pelo ID da pessoa  voluntária
const getEssays = async (volunteerId: number) =>
  (await api.get(`/book-club-class/available/${volunteerId}`)).data;

const useGetEssays = (volunteerId: number): UseQueryResult<Essays[]> =>
  useQuery(["essays", volunteerId], () => getEssays(volunteerId));

export default useGetEssays;
