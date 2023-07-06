import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { API } from "../constants";

const getURL = (email: string) => `${API}/volunteers/${email}`;

const getUser = async (email?: string, token?: string) => {
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
const useGetUser = (email?: string, token?: string) =>
  useQuery(["user"], () => getUser(email, token), {
    staleTime: 600000,
  });

export default useGetUser;
