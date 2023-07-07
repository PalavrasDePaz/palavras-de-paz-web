import axios from "axios";

import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { API, LOCAL_STORAGE_USER } from "../constants";

import { User } from "./types";

const getURL = (email: string) => `${API}/volunteers/${email}`;

const getUser = async (
  email?: string,
  token?: string
): Promise<User | null> => {
  const cachedUser = localStorage.getItem(LOCAL_STORAGE_USER);

  if (cachedUser) {
    return JSON.parse(cachedUser);
  }

  if (!email || !token) {
    return null;
  }
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(getURL(email), config);
};

// Todos os parâmetros são opcionais porque o primeiro render é
// no form de login, então não vai ter ainda nem email nem token.
// Então só vemos se a query já está populada ou não, e se estiver já
// vamos direto para a área de trabalho.
const useGetUser = (
  email?: string,
  token?: string
): UseQueryResult<User | null> =>
  useQuery(["user"], () => getUser(email, token), {
    // eslint-disable-next-line no-magic-numbers
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

export default useGetUser;
