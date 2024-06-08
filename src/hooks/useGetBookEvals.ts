import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getBookEvals = async (currentPage: number) =>
  (await api.get(`/book-evaluations?page=${currentPage}`)).data;

const useGetBookEvals = (currentPage: number) =>
  useQuery(["bookEvals", currentPage], () => getBookEvals(currentPage));

export default useGetBookEvals;
