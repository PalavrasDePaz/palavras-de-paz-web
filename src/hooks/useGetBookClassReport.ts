import { useMutation } from "@tanstack/react-query";

import { api } from "../api";

type GetBookClassReportForm = {
  bookClassId: string;
};

const getBookClassReport = async (bookClassId: string) => {
  if (bookClassId === null) return;
  const response = await api.get(`/book-club-class/download/${bookClassId}`);
  return response.data;
};

const useGetBookClassReport = () =>
  useMutation({
    mutationFn: ({ bookClassId }: GetBookClassReportForm) =>
      getBookClassReport(bookClassId),
  });

export default useGetBookClassReport;
