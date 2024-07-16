import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getNotebookClasses = async (currentPage: number) =>
  (await api.get(`/pep-class?page=${currentPage}`)).data;

const useGetNotebookClasses = (currentPage: number) =>
  useQuery(
    ["notebookClasses", currentPage],
    () => getNotebookClasses(currentPage),
    {
      enabled: currentPage !== undefined,
    }
  );

export default useGetNotebookClasses;
