import axios from "axios";

import { useMutation } from "@tanstack/react-query";

import { PALAVRAS_DE_PAZ_TOKEN } from "../constants";

import { User } from "./types";

export type UpdatePayload = {
  email: string;
  data: Partial<User>;
};

const updateUser = async ({ email, data }: UpdatePayload) => {
  try {
    const encodedEmail = encodeURIComponent(email); // substituindo caracteres especiais por sequências percentuais UTF-8, garantir a formatação correta de strings em URLs.
    const url = `https://api.palavrasdepaz.org:21043/volunteers/${encodedEmail}`;

    const token = localStorage.getItem(PALAVRAS_DE_PAZ_TOKEN);

    const response = await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    // console.error('Error updating:', error);
  }
};

export const useUpdateUser = () =>
  useMutation({
    mutationFn: async (updatePayload: UpdatePayload) => {
      try {
        const result = await updateUser(updatePayload);
        return result;
      } catch (error) {
        // console.error('Error updating:', error);
      }
    },
  });
