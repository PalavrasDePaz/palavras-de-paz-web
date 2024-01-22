import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { Notebook } from "./types";

const getNotebooks = async (volunteerId: number) =>
  (await api.get(`/notebooks/available/${volunteerId}`)).data;

const useGetNotebooks = (volunteerId: number): UseQueryResult<Notebook[]> =>
  useQuery(["notebooks", volunteerId], () => getNotebooks(volunteerId));

export default useGetNotebooks;
