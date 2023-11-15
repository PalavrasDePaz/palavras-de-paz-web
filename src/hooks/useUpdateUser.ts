import { useMutation } from "@tanstack/react-query";

import { User } from "./types";
// import { api } from "../api";

type payload = Partial<User>;

const updateUser = async (data: payload) => {
  // api.post("<endpoint_update_user>", { data });
};

export const useUpdateUser = () =>
  useMutation({
    mutationFn: (data: payload) => updateUser(data),
  });
