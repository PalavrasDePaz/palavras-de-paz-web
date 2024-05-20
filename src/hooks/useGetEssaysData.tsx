import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getEssays = async (currentPage: number) =>
  (await api.get(`/book-club-class?page=${currentPage}`)).data;

const useGetEssaysData = (currentPage: number) =>
  useQuery(["essays", currentPage], () => getEssays(currentPage));

export default useGetEssaysData;
