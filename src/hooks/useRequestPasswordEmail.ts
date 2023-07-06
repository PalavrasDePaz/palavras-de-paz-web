import axios from "axios";

import { useMutation } from "@tanstack/react-query";

import { API } from "../constants";

const URL = `${API}/volunteers/password-email`;

const requestPasswordEmail = async (email: string) =>
  axios.post(URL, { email });

const useRequestPasswordEmail = () =>
  useMutation({
    mutationFn: (email: string) => requestPasswordEmail(email),
  });

export default useRequestPasswordEmail;
