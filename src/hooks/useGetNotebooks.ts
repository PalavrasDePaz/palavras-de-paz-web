import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

type Workshops = {
  idAttend: number;
  submissionDate: string;
  workshopSubject: string;
};

const getNotebooks = async (volunteerId: number) =>
  (await api.get(`/notebooks/available/${volunteerId}`)).data;

const useGetNotebooks = (volunteerId: number): UseQueryResult<Workshops[]> =>
  useQuery(["notebooks", volunteerId], () => getNotebooks(volunteerId));

export default useGetNotebooks;
