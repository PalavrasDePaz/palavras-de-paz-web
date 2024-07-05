import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getNotebooksEvalsList = async (currentPage: number) =>
  (await api.get(`/notebooks/evaluation-list?page=${currentPage}`)).data;

const useGetNotebooksEvalsList = (currentPage: number) =>
  useQuery(["notebooksEvalsList", currentPage], () =>
    getNotebooksEvalsList(currentPage)
  );

export default useGetNotebooksEvalsList;
