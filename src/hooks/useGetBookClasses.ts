import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getBookClasses = async (currentPage: number) =>
  (await api.get(`/book-club-class?page=${currentPage}`)).data;

const useGetBookClasses = (currentPage: number) =>
  useQuery(["bookClasses", currentPage], () => getBookClasses(currentPage));

export default useGetBookClasses;
