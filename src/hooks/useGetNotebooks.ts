import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getNotebooks = async (volunteerId: number) =>
  (await api.get(`/notebooks/available/${volunteerId}`)).data;

const useGetNotebooks = (volunteerId: number) =>
  useQuery(["notebooks", volunteerId], () => getNotebooks(volunteerId));

export default useGetNotebooks;
