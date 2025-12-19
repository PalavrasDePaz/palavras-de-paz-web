import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { PALAVRAS_DE_PAZ_TOKEN } from "../constants";

import { User } from "./types";

export type UpdatePayload = {
  email: string;
  data: Partial<User>;
};

const updateUser = async ({ email, data }: UpdatePayload) => {
  const encodedEmail = encodeURIComponent(email);

  const response = await api.patch(`/volunteers/${encodedEmail}`, data);

  return response.data;
};

export const useUpdateUser = () =>
  useMutation({
    mutationFn: updateUser,
  });
