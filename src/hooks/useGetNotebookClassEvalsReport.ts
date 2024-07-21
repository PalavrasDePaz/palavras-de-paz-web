import { Dispatch, SetStateAction, useEffect } from "react";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import downloadZipData from "../helpers/downloadZipData";

type GetNotebookClassEvalsReportForm = {
  notebookClassIds: string[];
};

const getBookClassEvalsReport = async (notebookClassIds: string[]) => {
  const response = await api.get(
    `/notebooks/evaluation-list/download/?classes=${notebookClassIds.join(
      ","
    )}`,
    {
      responseType: "blob",
    }
  );
  return response;
};

const useGetBookClassEvalsReport = (
  setDownloadItemStatus: Dispatch<
    SetStateAction<Record<string, "error" | "loading" | "success">>
  >
) => {
  const mutation = useMutation({
    mutationFn: ({ notebookClassIds }: GetNotebookClassEvalsReportForm) =>
      getBookClassEvalsReport(notebookClassIds),
  });

  useEffect(() => {
    const classIds = mutation.variables?.notebookClassIds
      ? mutation.variables.notebookClassIds
      : [];
    if (mutation.isSuccess && mutation.data?.data) {
      downloadZipData(mutation.data.data, `avaliações_caderno.xlsx`);
      const status = {} as Record<string, "error" | "loading" | "success">;
      classIds.forEach((classId) => {
        status[classId] = "success";
      });
      setDownloadItemStatus({ ...status });
    } else if (mutation.isError) {
      const status = {} as Record<string, "error" | "loading" | "success">;
      classIds.forEach((classId) => {
        status[classId] = "error";
      });
      setDownloadItemStatus({ ...status });
    }
  }, [mutation.data, mutation.isSuccess, mutation.isError, mutation.isLoading]);

  return mutation;
};

export default useGetBookClassEvalsReport;
