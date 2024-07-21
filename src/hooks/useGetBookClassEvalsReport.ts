import { Dispatch, SetStateAction, useEffect } from "react";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import downloadZipData from "../helpers/downloadZipData";

type GetBookClassReportForm = {
  bookClassIds: string[];
};

const getBookClassEvalsReport = async (bookClassIds: string[]) => {
  const response = await api.get(
    `/book-evaluations/download/?classes=${bookClassIds.join(",")}`,
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
    mutationFn: ({ bookClassIds }: GetBookClassReportForm) =>
      getBookClassEvalsReport(bookClassIds),
  });

  useEffect(() => {
    const classIds = mutation.variables?.bookClassIds
      ? mutation.variables.bookClassIds
      : [];
    if (mutation.isSuccess && mutation.data?.data) {
      downloadZipData(mutation.data.data, `avaliações_redação.xlsx`);
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
