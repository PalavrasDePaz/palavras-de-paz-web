import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

type GetNotebookReportForm = {
  notebookId: string;
};

const getNotebookReport = async (notebookId: string) => {
  if (notebookId === null) return;
  const response = await api.get(`/notebooks/download/${notebookId}`, {
    responseType: "blob",
  });
  return response;
};

const useGetNotebookReport = () =>
  useMutation({
    mutationFn: ({ notebookId }: GetNotebookReportForm) =>
      getNotebookReport(notebookId),
  });

export default useGetNotebookReport;
