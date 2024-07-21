import { Dispatch, SetStateAction, useEffect } from "react";

import { useMutation } from "@tanstack/react-query";

import { api } from "../api";
import downloadZipData from "../helpers/downloadZipData";

type GetBookClassReportForm = {
  bookClassId: string;
};

const getBookClassReport = async (bookClassId: string) => {
  if (bookClassId === null) return;
  const response = await api.get(`/book-club-class/download/${bookClassId}`, {
    responseType: "blob",
  });
  return response;
};

const useGetBookClassReport = (
  setDownloadItemStatus: Dispatch<
    SetStateAction<Record<string, "error" | "loading" | "success">>
  >,
  setFinishedDownloads: Dispatch<SetStateAction<number>>
) => {
  const mutation = useMutation({
    mutationFn: ({ bookClassId }: GetBookClassReportForm) =>
      getBookClassReport(bookClassId),
  });

  useEffect(() => {
    const classId = mutation.variables?.bookClassId
      ? mutation.variables.bookClassId
      : "";
    if (mutation.isSuccess && mutation.data?.data) {
      downloadZipData(mutation.data.data, `turma_${classId}.zip`);
      setDownloadItemStatus((prev) => ({
        ...prev,
        [classId]: "success",
      }));
      setFinishedDownloads((prev) => prev + 1);
    } else if (mutation.isError) {
      setDownloadItemStatus((prev) => ({
        ...prev,
        [classId]: "error",
      }));
      setFinishedDownloads((prev) => prev + 1);
    }
  }, [mutation.data, mutation.isSuccess, mutation.isError, mutation.isLoading]);

  return mutation;
};

export default useGetBookClassReport;
