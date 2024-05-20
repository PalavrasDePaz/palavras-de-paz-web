import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getClasses = async (currentPage: number) =>
  (await api.get(`/book-club-class?page=${currentPage}`)).data;

const useGetClasses = (currentPage: number) =>
  useQuery(["classes", currentPage], () => getClasses(currentPage));

export default useGetClasses;
