import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

import { Publication } from "./types";

type DeleteSchedule = {
  data: Publication;
};

const deleteSchedule = async (data: Publication) =>
  api.delete(`/schedule/${data.fileName}`);

const useDeleteSchedule = () =>
  useMutation({
    mutationFn: ({ data }: DeleteSchedule) => deleteSchedule(data),
  });

export default useDeleteSchedule;
