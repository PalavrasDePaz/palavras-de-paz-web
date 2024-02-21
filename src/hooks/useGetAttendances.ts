import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

type Workshops = {
  idAttend: number;
  submissionDate: string;
  workshopSubject: string;
};

const getAttendances = async (volunteerId: number) =>
  (await api.get(`attendances/volunteer/${volunteerId}`)).data;

const useGetAttendances = (volunteerId: number): UseQueryResult<Workshops[]> =>
  useQuery(["attendances", volunteerId], () => getAttendances(volunteerId), {
    enabled: !!volunteerId,
  });

export default useGetAttendances;
