import axios from "axios";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { API } from "../constants";

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
    onSuccess: (data) => queryClient.setQueryData(["user"], data.data),
  });
};

export default useLogin;
