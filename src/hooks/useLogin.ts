// Generate an access token for the volunteer if his login data is correct - Temporario

// import { useMutation } from "@tanstack/react-query";

// import { api } from "../api";

// type UserLogin = {
//   email: string;
//   password: string;
// };

// const logIn = async (user: UserLogin) => api.post("/volunteers/login", user);
// const useLogin = () => useMutation((user: UserLogin) => logIn(user));

// export default useLogin;

import axios from "axios";

import { useMutation } from "@tanstack/react-query";

type UserLogin = {
  email: string;
  password: string;
};

const logIn = async (user: UserLogin) =>
  axios.post("https://api.palavrasdepaz.org/volunteers/login", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });

const useLogin = () =>
  useMutation({
    mutationFn: (user: UserLogin) => logIn(user),
  });

export default useLogin;
