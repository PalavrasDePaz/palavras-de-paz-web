import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

import { Publication } from "./types";

type UpdateSchedule = {
  data: Publication;
};

const updateSchedule = async (data: Publication) => {
  const newFormData = new FormData();
  newFormData.append("title", data.title);
  newFormData.append("description", data.description);
  if (data.file) newFormData.append("file", data.file);

  api.put(`/schedule/${data.fileName}`, newFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const useUpdateSchedule = () =>
  useMutation({
    mutationFn: ({ data }: UpdateSchedule) => updateSchedule(data),
  });

export default useUpdateSchedule;
