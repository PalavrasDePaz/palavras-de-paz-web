import axios from "axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { API, LOCAL_STORAGE_USER } from "../constants";

const LOGIN_URL = `${API}/volunteers/login`;

type UserLogin = {
  email: string;
  password: string;
};

const logIn = async (user: UserLogin) => axios.post(LOGIN_URL, user);

const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: UserLogin) => logIn(user),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data);
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(data.data));
    },
  });
};

export default useLogin;
