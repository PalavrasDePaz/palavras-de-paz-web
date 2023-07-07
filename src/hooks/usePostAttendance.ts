import axios from "axios";
import * as yup from "yup";

import { useMutation } from "@tanstack/react-query";

import { API } from "../constants";
import { schema } from "../templates/presenca/schema";

import { User } from "./types";

type AttendanceFormFields = yup.InferType<typeof schema>;

type PostAttendanceParams = {
  data: AttendanceFormFields;
  user: User;
};

const URL = `${API}/attendances`;

const postAttendance = async (data: AttendanceFormFields, user: User) => {
  const postForm = { ...data, idvol: user.volunteer.idvol };

  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };
  return axios.post(URL, postForm, config);
};

const usePostAttendance = () =>
  useMutation({
    mutationFn: ({ data, user }: PostAttendanceParams) =>
      postAttendance(data, user),
  });

export default usePostAttendance;
