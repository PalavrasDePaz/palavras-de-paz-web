import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

import { Class } from "./types";

const getBookEvals = async (currentPage: number, selectedClasses: Class[]) => {
  const classesParam = selectedClasses?.length
    ? `&classes=${  selectedClasses.map((c) => c.idclass).join(",")}`
    : "";
  return (await api.get(`/book-evaluations?page=${currentPage}${  classesParam}`))
    .data;
};

const useGetBookEvals = (currentPage: number, selectedClasses: Class[]) =>
  useQuery(["bookEvals", currentPage], () =>
    getBookEvals(currentPage, selectedClasses)
  );

export default useGetBookEvals;
