import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { User } from "./types";

const getUser = async (email?: string): Promise<User | null> =>
  (await api.get(`/volunteers/${email}`)).data;

const useGetUser = (email?: string): UseQueryResult<User | null> =>
  useQuery(["user"], () => getUser(email), {
    // eslint-disable-next-line no-magic-numbers
    staleTime: 1000 * 60 * 60 * 2, // 2 horas (como no backend)
    enabled: !!email,
  });

export default useGetUser;
