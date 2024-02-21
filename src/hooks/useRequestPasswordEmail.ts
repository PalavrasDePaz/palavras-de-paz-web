// Sends an email to the volunteer with a link for creating or update a forgotten password.

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

const requestPasswordEmail = async (email: string) =>
  api.post("/volunteers/password-email", { email });

const useRequestPasswordEmail = () =>
  useMutation({
    mutationFn: (email: string) => requestPasswordEmail(email),
  });

export default useRequestPasswordEmail;
