import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

type UserLogin = {
  email: string;
  password: string;
};

const logIn = async (user: UserLogin) => api.post("/volunteers/login", user);
const useLogin = () => useMutation((user: UserLogin) => logIn(user));

export default useLogin;
