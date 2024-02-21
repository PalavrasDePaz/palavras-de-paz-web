import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { api } from "../api";

import { User } from "./types";

const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
const CACHE_TIME_IN_MINUTES = 2;

const getUser = async (email?: string): Promise<User | null> => {
  const response = await api.get(`/volunteers/${email}`);
  return response.data;
};

const useGetUser = (email?: string): UseQueryResult<User | null> =>
  useQuery(["user"], () => getUser(email), {
    staleTime:
      MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * CACHE_TIME_IN_MINUTES,
    enabled: !!email,
  });

export default useGetUser;
