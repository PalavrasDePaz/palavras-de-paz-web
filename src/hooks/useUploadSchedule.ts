import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

import { Publication } from "./types";

type UploadSchedule = {
  data: Publication;
};

const uploadSchedule = async (data: Publication) => {
  const newFormData = new FormData();
  newFormData.append("title", data.title);
  newFormData.append("description", data.description);
  newFormData.append("fileName", data.fileName);
  if (data.file) newFormData.append("file", data.file);

  api.post("/schedule/upload", newFormData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const useUploadSchedule = () =>
  useMutation({
    mutationFn: ({ data }: UploadSchedule) => uploadSchedule(data),
  });

export default useUploadSchedule;
