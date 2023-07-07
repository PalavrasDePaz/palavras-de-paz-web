import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import { schema } from "../templates/presenca/schema";

import { User } from "./types";

type AttendanceFormFields = yup.InferType<typeof schema>;

type PostAttendanceParams = {
  data: AttendanceFormFields;
  user: User;
};

const postAttendance = async (data: AttendanceFormFields, user: User) => {
  const postForm = { ...data, idvol: user.idvol };
  return api.post("/attendances", postForm);
};

const usePostAttendance = () =>
  useMutation({
    mutationFn: ({ data, user }: PostAttendanceParams) =>
      postAttendance(data, user),
  });

export default usePostAttendance;
